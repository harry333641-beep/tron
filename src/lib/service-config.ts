import "server-only";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { serviceConfig } from "@/db/schema";

export type ServiceConfig = {
  id: string;
  telegramUrl: string;
  receivingAddress: string;
};

export const DEFAULT_SERVICE_CONFIG: ServiceConfig = {
  id: "primary",
  telegramUrl: "https://t.me/trx_energy_service",
  receivingAddress: "THcETD8Xud85LQU5LJnqRz7smSty8ejSz4",
};

async function readServiceConfig(): Promise<ServiceConfig> {
  try {
    const [existing] = await db
      .select({
        id: serviceConfig.id,
        telegramUrl: serviceConfig.telegramUrl,
        receivingAddress: serviceConfig.receivingAddress,
      })
      .from(serviceConfig)
      .where(eq(serviceConfig.id, DEFAULT_SERVICE_CONFIG.id))
      .limit(1);

    if (existing) return existing;

    const [created] = await db
      .insert(serviceConfig)
      .values(DEFAULT_SERVICE_CONFIG)
      .onConflictDoNothing()
      .returning({
        id: serviceConfig.id,
        telegramUrl: serviceConfig.telegramUrl,
        receivingAddress: serviceConfig.receivingAddress,
      });

    return created ?? DEFAULT_SERVICE_CONFIG;
  } catch {
    return DEFAULT_SERVICE_CONFIG;
  }
}

export async function getServiceConfig(): Promise<ServiceConfig> {
  return Promise.race([
    readServiceConfig(),
    new Promise<ServiceConfig>((resolve) => {
      setTimeout(() => resolve(DEFAULT_SERVICE_CONFIG), 1500);
    }),
  ]);
}

export async function updateServiceConfig(
  updates: Partial<Pick<ServiceConfig, "telegramUrl" | "receivingAddress">>,
) {
  const current = await getServiceConfig();
  const [updated] = await db
    .update(serviceConfig)
    .set({ ...updates, updatedAt: new Date() })
    .where(eq(serviceConfig.id, current.id))
    .returning({
      id: serviceConfig.id,
      telegramUrl: serviceConfig.telegramUrl,
      receivingAddress: serviceConfig.receivingAddress,
    });

  return updated ?? { ...current, ...updates };
}
