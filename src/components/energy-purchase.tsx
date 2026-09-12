"use client";

import { useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Copy,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type ServiceConfig = {
  telegramUrl: string;
  receivingAddress: string;
};

type PackageOption = {
  energy: string;
  price: string;
  label: string;
  note: string;
  tone: "paper" | "blush";
};

const packages: PackageOption[] = [
  {
    energy: "65,000",
    price: "2",
    label: "对方地址已有 USDT",
    note: "适合普通一笔 TRC-20 转账",
    tone: "paper",
  },
  {
    energy: "131,000",
    price: "4",
    label: "对方地址没有 USDT",
    note: "余额为 0 时优先选择这一档",
    tone: "blush",
  },
];

const faqs = [
  [
    "需要提供我的钱包地址吗？",
    "不需要。你只需向页面提供的收款地址转入套餐对应的 TRX，不需要连接钱包，也不会索要私钥或助记词。",
  ],
  [
    "什么时候发送 USDT？",
    "确认能量到账后，请在 1 小时有效期内完成 USDT TRC-20 转账。当前页面展示的是人工履约流程，不会伪造自动到账结果。",
  ],
  [
    "为什么没有 USDT 要选 131,000？",
    "对方地址没有 USDT 余额时，交易通常会消耗更多网络资源。为了减少转账失败，建议选择 131,000 Energy。",
  ],
  [
    "转入后多久能看到能量？",
    "通常约 3 秒到账。链上拥堵或人工确认时可能会有波动，如超过预期时间请通过 Telegram 联系客服。",
  ],
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-destructive">
      <span className="h-2 w-2 rounded-full bg-destructive" />
      {children}
    </div>
  );
}

function StepNumber({ children }: { children: ReactNode }) {
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-foreground bg-foreground text-sm font-black text-primary">
      {children}
    </span>
  );
}

export function EnergyPurchase({ config }: { config: ServiceConfig }) {
  const [selectedEnergy, setSelectedEnergy] = useState(packages[0].energy);
  const [copied, setCopied] = useState(false);
  const selected = packages.find((item) => item.energy === selectedEnergy) ?? packages[0];

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(config.receivingAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main id="top" className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-2 bg-primary" />
      <header className="relative z-10 border-b-2 border-foreground/15 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
          <button type="button" onClick={() => scrollTo("top")} className="group flex min-w-0 items-center gap-3 text-left">
            <span className="grid size-12 shrink-0 place-items-center rounded-[1.1rem] border-2 border-foreground bg-primary shadow-[4px_4px_0_var(--foreground)] transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
              <Zap size={25} fill="currentColor" strokeWidth={2.5} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[11px] font-black uppercase tracking-[0.18em] text-destructive">Energy desk / 01</span>
              <span className="mt-1 block truncate text-base font-black sm:text-lg">波场能量柜台</span>
            </span>
          </button>
          <div className="flex shrink-0 items-center gap-3">
            <button type="button" onClick={() => scrollTo("faq")} className="hidden text-sm font-bold text-muted-foreground transition-colors hover:text-foreground sm:block">常见问题</button>
            <Button type="button" onClick={() => window.open(config.telegramUrl, "_blank", "noopener,noreferrer")} size="sm" className="gap-2 rounded-lg border-2 border-foreground bg-card font-black shadow-[3px_3px_0_var(--foreground)] hover:bg-primary">
              <MessageCircle size={15} strokeWidth={2.5} />
              <span className="hidden sm:inline">联系客服</span>
              <span className="sm:hidden">客服</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(520px,1.05fr)] lg:gap-20">
          <div className="min-w-0">
            <SectionLabel>核心服务 / TRON ENERGY</SectionLabel>
            <h1 className="mt-5 max-w-2xl text-[clamp(3.25rem,7vw,6.6rem)] font-black leading-[0.9] tracking-[-0.085em]">
              让每一笔
              <br />
              <span className="text-destructive">USDT 转账</span>
              <br />
              更省 TRX。
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">选择需要的 Energy 套餐，转入对应 TRX，约 3 秒收到能量。到账后，在 1 小时内完成 USDT TRC-20 转账。</p>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 border-y-2 border-foreground py-5 sm:flex sm:flex-wrap sm:gap-5">
              <div className="flex items-center gap-2 text-sm font-black"><Clock3 size={18} className="text-destructive" />约 3 秒到账</div>
              <div className="flex items-center gap-2 text-sm font-black"><Sparkles size={18} className="text-destructive" />到账后 1 小时有效</div>
              <div className="flex items-center gap-2 text-sm font-black"><ShieldCheck size={18} className="text-destructive" />不连接钱包</div>
            </div>
            <div className="mt-10 hidden items-center gap-3 text-sm font-black text-muted-foreground lg:flex">
              <span className="grid size-8 place-items-center rounded-full bg-foreground text-primary">↓</span>
              向下完成购买步骤
            </div>
          </div>

          <aside className="min-w-0 rounded-[1.5rem] border-2 border-foreground bg-card p-5 shadow-[8px_8px_0_var(--foreground)] sm:p-7">
            <div className="flex items-start justify-between gap-4 border-b-2 border-foreground pb-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-destructive">ORDER CARD / 01</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">选择 Energy 套餐</h2>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-foreground bg-primary"><Zap size={20} fill="currentColor" /></span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {packages.map((item) => {
                const isSelected = item.energy === selected.energy;
                return (
                  <Button
                    key={item.energy}
                    type="button"
                    variant="ghost"
                    onClick={() => setSelectedEnergy(item.energy)}
                    className={`group h-auto min-w-0 items-stretch justify-start rounded-xl border-2 border-foreground p-0 text-left shadow-[3px_3px_0_var(--foreground)] transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-inherit ${item.tone === "blush" ? "bg-destructive/10" : "bg-background"} ${isSelected ? "ring-4 ring-primary ring-offset-2 ring-offset-card" : "opacity-75 hover:opacity-100"}`}
                  >
                    <span className="flex min-w-0 flex-1 flex-col gap-3 p-4 sm:p-5">
                      <span className="flex items-baseline justify-between gap-2">
                        <span className="text-4xl font-black tracking-[-0.06em]">{item.price}</span>
                        <span className="text-base font-black text-destructive">TRX</span>
                      </span>
                      <span className="text-lg font-black leading-tight text-destructive">{item.energy} Energy</span>
                      <span className="text-sm font-bold leading-6 text-muted-foreground">{item.label}</span>
                      <span className="border-t border-foreground/20 pt-3 text-xs font-medium leading-5 text-muted-foreground">{item.note}</span>
                    </span>
                    <span className={`flex w-9 shrink-0 items-start justify-center pt-4 ${isSelected ? "text-foreground" : "text-transparent"}`}><Check size={18} strokeWidth={3} /></span>
                  </Button>
                );
              })}
            </div>

            <div className="mt-7 rounded-xl border-2 border-foreground bg-foreground p-5 text-primary-foreground sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">STEP 02 / 转入 TRX</p>
                  <p className="mt-2 text-sm font-bold text-primary-foreground/70">向下方地址转入本次套餐金额</p>
                </div>
                <span className="text-3xl font-black tracking-[-0.06em] text-primary">{selected.price} TRX</span>
              </div>
              <div className="mt-5 flex min-w-0 items-center gap-3 rounded-lg border-2 border-primary/70 bg-foreground/80 p-3 sm:p-4">
                <code className="min-w-0 flex-1 truncate font-mono text-sm font-bold tracking-tight text-primary-foreground sm:text-base">{config.receivingAddress}</code>
                <Button type="button" size="sm" onClick={copyAddress} className="shrink-0 gap-2 rounded-lg border-2 border-foreground bg-primary font-black text-primary-foreground shadow-[2px_2px_0_var(--background)] hover:bg-primary/80">
                  {copied ? <Check size={15} strokeWidth={3} /> : <Copy size={15} strokeWidth={2.5} />}
                  <span className="hidden sm:inline">{copied ? "已复制" : "复制"}</span>
                </Button>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-lg border-2 border-primary bg-primary/30 px-4 py-3 text-sm font-bold leading-6">
              <Zap size={18} className="mt-1 shrink-0 text-destructive" fill="currentColor" />
              <p>如果对方地址的 USDT 余额为 0，请选择 <span className="text-destructive">131,000 Energy</span>，避免能量不足导致转账失败。</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="steps" className="border-y-2 border-foreground bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          <div className="flex gap-4 border-b-2 border-foreground/15 py-8 lg:border-b-0 lg:border-r-2 lg:pr-8"><StepNumber>1</StepNumber><div><p className="text-xs font-black uppercase tracking-[0.18em] text-destructive">Choose</p><h3 className="mt-2 text-lg font-black">选择能量套餐</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">有 USDT 选 65,000；没有 USDT 选 131,000。</p></div></div>
          <div className="flex gap-4 border-b-2 border-foreground/15 py-8 lg:border-b-0 lg:border-r-2 lg:px-8"><StepNumber>2</StepNumber><div><p className="text-xs font-black uppercase tracking-[0.18em] text-destructive">Transfer</p><h3 className="mt-2 text-lg font-black">转入对应 TRX</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">复制页面收款地址，转入准确的套餐金额。</p></div></div>
          <div className="flex gap-4 py-8 lg:pl-8"><StepNumber>3</StepNumber><div><p className="text-xs font-black uppercase tracking-[0.18em] text-destructive">Finish</p><h3 className="mt-2 text-lg font-black">到账后完成 USDT</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">约 3 秒收到能量，1 小时内完成转账。</p></div></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-24">
        <div>
          <SectionLabel>使用说明 / FAQ</SectionLabel>
          <h2 className="mt-5 max-w-sm text-4xl font-black leading-[0.98] tracking-[-0.06em] sm:text-5xl">先看清楚，<br /><span className="text-destructive">再开始转。</span></h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">我们只提供能量租赁入口，不托管资产，也不会向你索要私钥或助记词。</p>
          <Button type="button" onClick={() => window.open(config.telegramUrl, "_blank", "noopener,noreferrer")} className="mt-7 gap-2 rounded-lg border-2 border-foreground bg-primary font-black text-primary-foreground shadow-[4px_4px_0_var(--foreground)] hover:bg-primary/80"><MessageCircle size={17} />需要帮助？联系 Telegram</Button>
        </div>
        <div id="faq" className="min-w-0 divide-y-2 divide-foreground/15 border-y-2 border-foreground">
          {faqs.map(([question, answer], index) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center gap-4 text-base font-black sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="font-mono text-sm text-destructive">0{index + 1}</span>
                <span className="min-w-0 flex-1">{question}</span>
                <ChevronDown size={20} className="shrink-0 transition-transform duration-200 ease-out group-open:rotate-180" />
              </summary>
              <p className="max-w-2xl pb-1 pl-10 pt-4 text-sm leading-7 text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t-2 border-foreground bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div><p className="text-lg font-black text-primary">波场能量柜台</p><p className="mt-2 text-sm text-background/65">人工确认服务 · 不托管资产 · 不索要私钥</p></div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-background/75"><button type="button" onClick={() => window.open(config.telegramUrl, "_blank", "noopener,noreferrer")} className="inline-flex items-center gap-2 hover:text-primary">Telegram <ExternalLink size={14} /></button><button type="button" onClick={() => scrollTo("faq")} className="hover:text-primary">服务说明</button><button type="button" onClick={() => scrollTo("top")} className="inline-flex items-center gap-2 hover:text-primary">返回顶部 <ArrowRight size={14} /></button></div>
        </div>
      </footer>
    </main>
  );
}
