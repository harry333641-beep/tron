"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Loader2,
  Search,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type QueryResult = {
  address: string;
  energy: number;
  energyLimit: number;
  energyUsed: number;
  activated: boolean;
  checkedAt: string;
};

/** Same shape the API route enforces, so an obvious typo never leaves the browser. */
const ADDRESS_PATTERN = /^T[1-9A-HJ-NP-Za-km-z]{33}$/;

function relativeTime(from: number, now: number) {
  const seconds = Math.max(0, Math.floor((now - from) / 1000));
  if (seconds < 5) return "刚刚";
  if (seconds < 60) return `${seconds} 秒前`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} 分钟前`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} 小时前`;
  return `${Math.floor(hours / 24)} 天前`;
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-muted-foreground">
      {children}
    </p>
  );
}

function ResultRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border/70 py-3 last:border-b-0">
      <span className="shrink-0 text-xs font-bold text-muted-foreground">{label}</span>
      <span className="min-w-0 truncate text-right text-sm font-bold">{children}</span>
    </div>
  );
}

export function EnergyQuery() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QueryResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [now, setNow] = useState(0);

  // The "查询时间" keeps itself honest — it counts up while the result sits on screen.
  useEffect(() => {
    if (!result) return;
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [result]);

  async function runQuery(event: React.FormEvent) {
    event.preventDefault();
    const value = address.trim();

    if (!value) {
      setError("请输入 TRON 地址。");
      setResult(null);
      return;
    }
    if (!ADDRESS_PATTERN.test(value)) {
      setError("地址格式不正确：TRON 地址以 T 开头，共 34 位字符。");
      setResult(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/energy?address=${encodeURIComponent(value)}`, {
        cache: "no-store",
      });
      const data = (await response.json()) as Partial<QueryResult> & {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !data.ok) {
        setError(data.message ?? "查询失败，请稍后重试。");
        setResult(null);
        return;
      }

      setResult(data as QueryResult);
    } catch {
      setError("网络异常，请检查网络后重试。");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  async function copyAddress() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  const checkedAtMs = result ? new Date(result.checkedAt).getTime() : 0;

  return (
    <section id="energy" className="relative z-10 border-y border-border bg-card/35">
      <div className="mx-auto max-w-2xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="text-center">
          <SectionEyebrow>ENERGY LOOKUP</SectionEyebrow>
          <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            🔎 地址可用能量查询
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            输入 TRON 地址，查询当前可用的能量（Energy）。查询结果不代表某笔租赁已到账。
          </p>
        </div>

        <form onSubmit={runQuery} className="mt-7 flex flex-col gap-3 sm:flex-row">
          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-colors focus-within:border-primary focus-within:shadow-[0_0_18px_var(--primary-glow)]">
            <Search size={16} className="shrink-0 text-muted-foreground" />
            <input
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="请输入 TRON 地址"
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              aria-label="TRON 地址"
              className="min-w-0 flex-1 bg-transparent font-mono text-sm text-foreground outline-none placeholder:font-sans placeholder:text-muted-foreground"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="h-12 shrink-0 gap-2 rounded-xl bg-accent px-7 font-black text-accent-foreground shadow-[0_10px_24px_var(--primary-glow)] transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent/90 disabled:opacity-60 sm:h-auto"
          >
            {loading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Search size={18} strokeWidth={2.5} />
            )}
            {loading ? "查询中" : "🔎 查询"}
          </Button>
        </form>

        {error && (
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm leading-6 text-destructive">
            <AlertTriangle size={17} className="mt-1 shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {result && (
          <div className="mt-5 rounded-2xl border border-border bg-card/90 p-5 shadow-[0_24px_80px_var(--panel-shadow)] backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                <Zap size={14} className="text-accent" fill="currentColor" />
                查询结果
              </span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold ${
                  result.energy > 0
                    ? "border-accent/30 bg-accent/10 text-accent"
                    : "border-destructive/30 bg-destructive/10 text-destructive"
                }`}
              >
                {result.energy > 0 ? (
                  <CheckCircle2 size={13} strokeWidth={2.5} />
                ) : (
                  <AlertTriangle size={13} strokeWidth={2.5} />
                )}
                {result.energy > 0 ? "有可用能量" : "暂无可用能量"}
              </span>
            </div>

            <div className="mt-4">
              <ResultRow label="查询地址">
                <span className="inline-flex min-w-0 items-center gap-2">
                  <span className="min-w-0 truncate font-mono text-xs font-bold text-accent sm:text-sm">
                    {result.address}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={copyAddress}
                    aria-label="复制查询地址"
                    className="size-7 shrink-0 rounded-md bg-muted/80 text-accent hover:bg-primary/15 hover:text-accent"
                  >
                    {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} />}
                  </Button>
                </span>
              </ResultRow>

              <ResultRow label="可用能量（Energy）">
                <span className="font-mono text-2xl font-black text-accent sm:text-3xl">
                  {result.energy.toLocaleString("en-US")}
                </span>
              </ResultRow>

              <ResultRow label="查询时间">
                <span className="font-mono text-xs text-muted-foreground">
                  {relativeTime(checkedAtMs, now)}
                </span>
              </ResultRow>
            </div>

            <div className="mt-4 space-y-1.5 rounded-xl border border-border bg-background/70 px-4 py-3 text-[11px] leading-5 text-muted-foreground">
              <p>
                能量上限 <span className="font-mono font-bold text-foreground/80">{result.energyLimit.toLocaleString("en-US")}</span>
                {" · "}
                已消耗 <span className="font-mono font-bold text-foreground/80">{result.energyUsed.toLocaleString("en-US")}</span>
              </p>
              {!result.activated && (
                <p className="text-destructive">
                  该地址尚未在链上激活，需要先转入少量 TRX 或 USDT 完成激活。
                </p>
              )}
              <p>本结果仅为该地址此刻的链上能量快照，不代表某笔租赁已到账。确认到账请核对链上委托记录。</p>
            </div>

            <Button
              type="button"
              onClick={() => window.open("https://tronscan.org/#/address/" + result.address + "/resources", "_blank", "noopener,noreferrer")}
              variant="outline"
              className="mt-3 h-10 w-full gap-2 rounded-lg border-border bg-background/70 text-xs font-bold hover:border-primary hover:bg-primary/10"
            >
              在 Tronscan 查看链上委托记录
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
