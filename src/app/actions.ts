"use server";

import { revalidatePath } from "next/cache";
import { updateServiceConfig } from "@/lib/service-config";

export async function updateServiceConfigFromTelegram(input: {
  telegramUrl?: string;
  receivingAddress?: string;
}) {
  const telegramUrl = input.telegramUrl?.trim();
  const receivingAddress = input.receivingAddress?.trim();

  if (telegramUrl && !/^https:\/\/t\.me\/[a-zA-Z0-9_]+$/.test(telegramUrl)) {
    throw new Error("客服链接必须是 https://t.me/ 开头的 Telegram 链接");
  }

  if (receivingAddress && !/^T[a-zA-Z0-9]{33}$/.test(receivingAddress)) {
    throw new Error("收款地址格式不正确，请检查 TRON 地址");
  }

  const updated = await updateServiceConfig({
    ...(telegramUrl ? { telegramUrl } : {}),
    ...(receivingAddress ? { receivingAddress } : {}),
  });

  revalidatePath("/");
  return updated;
}
