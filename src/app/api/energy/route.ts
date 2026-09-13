import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** TronGrid full-node HTTP API. Override with TRONGRID_API_URL when self-hosting. */
const TRONGRID_URL = process.env.TRONGRID_API_URL ?? "https://api.trongrid.io";

/** TRON base58 address: a leading T followed by 33 base58 characters. */
const ADDRESS_PATTERN = /^T[1-9A-HJ-NP-Za-km-z]{33}$/;

/**
 * The subset of `/wallet/getaccountresource` this app reads.
 *
 * `EnergyLimit` already includes energy delegated by someone else, which is
 * exactly what a rental customer needs to see. Available energy is the
 * difference between the limit and what the address has already burned.
 */
type AccountResource = {
  freeNetUsed?: number;
  freeNetLimit?: number;
  NetUsed?: number;
  NetLimit?: number;
  EnergyUsed?: number;
  EnergyLimit?: number;
};

function num(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

/**
 * Available energy for one address.
 *
 * Read-only and public: it takes an address, never a key, and reveals nothing
 * about the caller. Still query-only — this endpoint deliberately cannot read
 * any of this app's own data.
 *
 * Never cached: energy changes the second a rental lands, and a cached answer
 * is worse than no answer.
 */
export async function GET(request: Request) {
  const address = (new URL(request.url).searchParams.get("address") ?? "").trim();

  if (!address) {
    return NextResponse.json(
      { ok: false, error: "missing_address", message: "请输入 TRON 地址。" },
      { status: 400 },
    );
  }

  if (!ADDRESS_PATTERN.test(address)) {
    return NextResponse.json(
      {
        ok: false,
        error: "invalid_address",
        message: "地址格式不正确：TRON 地址以 T 开头，共 34 位字符。",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.TRONGRID_API_KEY;

  try {
    const response = await fetch(`${TRONGRID_URL}/wallet/getaccountresource`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // Optional: a key only lifts the public rate limit. Without one the
        // endpoint still works, so this app never depends on it to function.
        ...(apiKey ? { "TRON-PRO-API-KEY": apiKey } : {}),
      },
      body: JSON.stringify({ address, visible: true }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (response.status === 429) {
      // The shared public node throttles bursts. Distinct from "upstream is
      // down" — the customer should be told to simply try again.
      return NextResponse.json(
        { ok: false, error: "rate_limited", message: "查询太频繁，请等几秒后重试。" },
        { status: 429 },
      );
    }

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "upstream", message: "链上查询暂时不可用，请稍后重试。" },
        { status: 502 },
      );
    }

    const data = (await response.json()) as AccountResource;

    const energyLimit = num(data.EnergyLimit);
    const energyUsed = num(data.EnergyUsed);

    // An address that has never been activated answers with an empty object —
    // that is "no resources", not an error.
    const activated =
      energyLimit > 0 || num(data.NetLimit) > 0 || num(data.freeNetLimit) > 0;

    return NextResponse.json({
      ok: true,
      address,
      /** Available energy — the number the customer is here for. */
      energy: Math.max(0, energyLimit - energyUsed),
      energyLimit,
      energyUsed,
      activated,
      checkedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "unreachable", message: "无法连接链上节点，请稍后重试。" },
      { status: 504 },
    );
  }
}
