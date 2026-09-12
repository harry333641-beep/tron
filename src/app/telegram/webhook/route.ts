import { NextResponse } from "next/server";
import { updateServiceConfigFromTelegram } from "@/app/actions";
import { getServiceConfig } from "@/lib/service-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type TelegramUpdate = {
  message?: {
    chat?: { id?: number };
    text?: string;
  };
};

async function reply(chatId: number, text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

export async function POST(request: Request) {
  const update = (await request.json()) as TelegramUpdate;
  const message = update.message;
  const chatId = message?.chat?.id;
  const text = message?.text?.trim();
  const adminChatId = process.env.TELEGRAM_ADMIN_CHAT_ID;

  if (!chatId || !text || !adminChatId) {
    return NextResponse.json({ ok: true });
  }

  if (String(chatId) !== adminChatId.trim()) {
    await reply(chatId, "此机器人仅限管理员使用。");
    return NextResponse.json({ ok: true });
  }

  try {
    if (text === "/start" || text === "/help") {
      await reply(chatId, "可用指令：\n/set_address TRON收款地址\n/set_support https://t.me/客服用户名\n/config");
    } else if (text === "/config") {
      const config = await getServiceConfig();
      await reply(chatId, `当前配置：\n客服：${config.telegramUrl}\n收款地址：${config.receivingAddress}`);
    } else if (text.startsWith("/set_address ")) {
      const receivingAddress = text.slice("/set_address ".length).trim();
      const config = await updateServiceConfigFromTelegram({ receivingAddress });
      await reply(chatId, `收款地址已更新：\n${config.receivingAddress}`);
    } else if (text.startsWith("/set_support ")) {
      const telegramUrl = text.slice("/set_support ".length).trim();
      const config = await updateServiceConfigFromTelegram({ telegramUrl });
      await reply(chatId, `客服链接已更新：\n${config.telegramUrl}`);
    } else {
      await reply(chatId, "指令未识别，发送 /help 查看用法。");
    }
  } catch (error) {
    await reply(chatId, error instanceof Error ? error.message : "更新失败，请检查输入后重试。");
  }

  return NextResponse.json({ ok: true });
}
