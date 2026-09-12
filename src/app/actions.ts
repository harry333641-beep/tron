"use server";

import { revalidatePath } from "next/cache";
import { updateServiceConfig } from "@/lib/service-config";

function validatePrice(value: string, label: string) {
  if (!/^\d+(\.\d{1,6})?$/.test(value) || Number(value) <= 0) {
    throw new Error(`${label}必须是大于 0 的 TRX 数字`);
  }
}

export async function updateServiceConfigFromTelegram(input: {
  telegramUrl?: string;
  receivingAddress?: string;
  price65k?: string;
  price131k?: string;
}) {
  const telegramUrl = input.telegramUrl?.trim();
  const receivingAddress = input.receivingAddress?.trim();
  const price65k = input.price65k?.trim();
  const price131k = input.price131k?.trim();

  if (telegramUrl && !/^https:\/\/t\.me\/[a-zA-Z0-9_]+$/.test(telegramUrl)) {
    throw new Error("客服链接必须是 https://t.me/ 开头的 Telegram 链接");
  }

  if (receivingAddress && !/^T[a-zA-Z0-9]{33}$/.test(receivingAddress)) {
    throw new Error("收款地址格式不正确，请检查 TRON 地址");
  }

  if (price65k) validatePrice(price65k, "65,000 能量价格");
  if (price131k) validatePrice(price131k, "131,000 能量价格");

  const updated = await updateServiceConfig({
    ...(telegramUrl ? { telegramUrl } : {}),
    ...(receivingAddress ? { receivingAddress } : {}),
    ...(price65k ? { price65k } : {}),
    ...(price131k ? { price131k } : {}),
  });

  revalidatePath("/");
  return updated;
}
