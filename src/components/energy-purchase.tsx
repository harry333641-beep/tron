"use client";

import { useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Copy,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  WalletCards,
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
};

const packages: PackageOption[] = [
  { energy: "65,000", price: "2", label: "对方地址已有 USDT", note: "普通转账推荐" },
  { energy: "131,000", price: "4", label: "对方地址没有 USDT", note: "余额为 0 时推荐" },
];

const faqs = [
  ["连接钱包安全吗？", "本服务不要求连接钱包。你只需向页面展示的收款地址转入对应 TRX，不会索要私钥或助记词。"],
  ["什么时候发送 USDT？", "通常约 3 秒收到能量。确认能量到账后，请在 1 小时有效期内完成 USDT TRC-20 转账。"],
  ["为什么没有 USDT 要选 131,000？", "对方地址没有 USDT 余额时，交易通常会消耗更多网络资源，建议选择 131,000 Energy。"],
  ["需要多久能完成？", "页面展示的是人工履约流程，到账时间通常约 3 秒，遇到链上拥堵或人工确认延迟请联系 Telegram 客服。"],
  ["这项服务需要 KYC 吗？", "当前购买流程不要求提交额外身份材料，但请仅使用你本人可控制的钱包进行转账。"],
];

function StatusPill({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1.5 text-xs font-bold text-muted-foreground">{icon}{children}</span>;
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[10px] font-black uppercase tracking-[0.24em] text-muted-foreground">{children}</p>;
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
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-50 [background-image:linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="pointer-events-none fixed left-1/2 top-[-20rem] -z-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <header className="relative z-10 border-b border-border/80 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <button type="button" onClick={() => scrollTo("top")} className="flex min-w-0 items-center gap-3 text-left">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_0_24px_var(--primary-glow)]"><Zap size={18} fill="currentColor" strokeWidth={2.5} /></span>
            <span className="min-w-0"><span className="block truncate text-sm font-black tracking-tight">波场能量柜台</span><span className="mt-0.5 block truncate text-[10px] font-medium tracking-[0.16em] text-muted-foreground">TRON ENERGY DESK</span></span>
          </button>
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <button type="button" onClick={() => scrollTo("faq")} className="hidden text-xs font-bold text-muted-foreground transition-colors hover:text-foreground sm:block">工作原理 · FAQ</button>
            <Button type="button" variant="outline" size="sm" onClick={() => window.open(config.telegramUrl, "_blank", "noopener,noreferrer")} className="gap-2 rounded-lg border-border bg-card/70 text-xs font-bold hover:border-primary hover:bg-primary/10"><MessageCircle size={14} />联系客服</Button>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-5xl px-5 pb-10 pt-12 sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2"><span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" /><SectionEyebrow>FAST · SIMPLE · NON-CUSTODIAL</SectionEyebrow><span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" /></div>
          <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-[-0.06em] sm:text-6xl">兑换 <span className="text-accent">USDT</span> <span className="text-muted-foreground">↔</span> <span className="text-destructive">TRX</span><br /><span className="text-foreground">与能量租赁</span></h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">即使你的钱包中没有足够 TRX，也可以先租用 Energy 完成 USDT 转账。无需连接钱包，不托管资产。</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2"><StatusPill icon={<Clock3 size={14} className="text-accent" />}>约 3 秒到账</StatusPill><StatusPill icon={<ShieldCheck size={14} className="text-accent" />}>不连接钱包</StatusPill><StatusPill icon={<WalletCards size={14} className="text-accent" />}>人工确认</StatusPill></div>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-card/90 p-3 shadow-[0_24px_80px_var(--panel-shadow)] backdrop-blur sm:p-4">
          <div className="flex rounded-xl border border-border bg-background/75 p-1">
            <Button type="button" variant="ghost" className="h-10 flex-1 rounded-lg bg-muted/80 text-sm font-bold text-foreground shadow-sm hover:bg-muted">↔&nbsp; 兑换</Button>
            <Button type="button" variant="ghost" onClick={() => scrollTo("steps")} className="h-10 flex-1 rounded-lg text-sm font-bold text-muted-foreground hover:bg-muted/60 hover:text-foreground"><Zap size={14} />&nbsp; 租赁能量</Button>
          </div>

          <div className="mt-5 px-2 sm:px-4">
            <div className="flex items-center justify-between"><SectionEyebrow>你发送</SectionEyebrow><span className="text-[10px] font-bold text-muted-foreground">选择套餐金额</span></div>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-4 focus-within:border-primary/80 focus-within:ring-4 focus-within:ring-primary/10">
              <span className="min-w-0 flex-1 text-2xl font-black tracking-tight">{selected.price}</span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/80 px-3 py-2 text-xs font-black"><span className="grid size-5 place-items-center rounded-full bg-accent text-accent-foreground">₮</span> TRX</span>
            </div>

            <div className="relative z-10 mx-auto -my-2 grid size-9 place-items-center rounded-xl border border-primary/60 bg-card text-primary shadow-[0_0_20px_var(--primary-glow)]"><ArrowDown size={16} /></div>

            <div className="flex items-center justify-between"><SectionEyebrow>你收到</SectionEyebrow><span className="text-[10px] font-bold text-muted-foreground">Energy 租赁额度</span></div>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-4"><span className="min-w-0 flex-1 text-2xl font-black tracking-tight">{selected.energy}</span><span className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/80 px-3 py-2 text-xs font-black"><Zap size={15} className="text-primary" fill="currentColor" /> Energy</span></div>

            <div className="mt-4 flex items-center justify-between rounded-lg border border-border/80 bg-muted/35 px-4 py-3 text-xs"><span className="text-muted-foreground">当前方案</span><span className="font-mono font-bold text-foreground">{selected.energy} Energy ≈ {selected.price} TRX</span></div>

            <Button type="button" onClick={() => scrollTo("steps")} className="mt-4 h-12 w-full rounded-xl bg-primary font-black text-primary-foreground shadow-[0_12px_28px_var(--primary-glow)] transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary/90">↓&nbsp; 查看转入地址</Button>
          </div>

          <div className="mt-5 border-t border-border px-2 pt-5 sm:px-4">
            <div className="flex items-center justify-between gap-3"><SectionEyebrow>选择能量档位</SectionEyebrow><span className="text-[10px] font-bold text-muted-foreground">点击切换</span></div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {packages.map((item) => {
                const active = item.energy === selected.energy;
                return <Button key={item.energy} type="button" variant="ghost" onClick={() => setSelectedEnergy(item.energy)} className={`h-auto min-w-0 justify-start rounded-xl border p-3 text-left transition-colors ${active ? "border-primary bg-primary/10 text-foreground shadow-[0_0_20px_var(--primary-glow)]" : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:bg-primary/5"}`}><span className="min-w-0 flex-1"><span className="flex items-center gap-2 text-sm font-black"><span className={active ? "text-primary" : "text-foreground"}>{item.price} TRX</span><span className="truncate text-xs font-bold">· {item.energy} Energy</span></span><span className="mt-1 block truncate text-[11px]">{item.label} · {item.note}</span></span>{active && <Check size={16} className="shrink-0 text-primary" strokeWidth={2.5} />}</Button>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="steps" className="relative z-10 border-y border-border bg-card/35">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="flex items-end justify-between gap-4"><div><SectionEyebrow>HOW IT WORKS</SectionEyebrow><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">三步完成能量租赁</h2></div><span className="hidden text-xs font-mono text-muted-foreground sm:block">NO WALLET CONNECTION</span></div>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5"><span className="text-sm font-mono font-bold text-primary">01</span><h3 className="mt-4 font-black">选择 Energy 档位</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">对方地址有 USDT 选 65,000；余额为 0 选 131,000。</p></div>
            <div className="rounded-xl border border-border bg-card p-5"><span className="text-sm font-mono font-bold text-primary">02</span><h3 className="mt-4 font-black">转入套餐对应 TRX</h3><div className="mt-2 flex items-center gap-2 text-sm leading-6 text-muted-foreground"><span className="truncate font-mono text-foreground">{config.receivingAddress}</span><button type="button" onClick={copyAddress} className="shrink-0 text-primary hover:text-accent" aria-label="复制收款地址">{copied ? <Check size={15} /> : <Copy size={15} />}</button></div></div>
            <div className="rounded-xl border border-border bg-card p-5"><span className="text-sm font-mono font-bold text-primary">03</span><h3 className="mt-4 font-black">到账后完成 USDT</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">通常约 3 秒到账，到账后 1 小时内完成转账。</p></div>
          </div>
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm leading-6 text-destructive"><CircleHelp size={17} className="mt-1 shrink-0" /><p><span className="font-black">重要：</span>如果对方地址的 USDT 余额为 0，请优先选择 131,000 Energy，避免能量不足。</p></div>
        </div>
      </section>

      <section id="faq" className="relative z-10 mx-auto grid max-w-5xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div><SectionEyebrow>FAQ / SAFETY</SectionEyebrow><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">常见问题</h2><p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">透明展示服务边界：只提供能量租赁入口，不托管资产，不索要私钥。</p><Button type="button" onClick={() => window.open(config.telegramUrl, "_blank", "noopener,noreferrer")} variant="outline" className="mt-6 gap-2 rounded-lg border-border bg-card font-bold hover:border-primary hover:bg-primary/10"><MessageCircle size={16} />联系 Telegram 客服 <ArrowUpRight size={15} /></Button></div>
        <div className="min-w-0 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/65">
          {faqs.map(([question, answer], index) => <details key={question} className="group px-5 py-4"><summary className="flex cursor-pointer list-none items-center gap-3 text-sm font-bold [&::-webkit-details-marker]:hidden"><span className="font-mono text-xs text-primary">0{index + 1}</span><span className="min-w-0 flex-1">{question}</span><ChevronDown size={17} className="shrink-0 text-muted-foreground transition-transform duration-200 ease-out group-open:rotate-180" /></summary><p className="pb-1 pl-8 pt-3 text-sm leading-6 text-muted-foreground">{answer}</p></details>)}
        </div>
      </section>

      <footer className="relative z-10 border-t border-border bg-card/60">
        <div className="mx-auto flex max-w-5xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between"><div><p className="text-sm font-black">波场能量柜台</p><p className="mt-1 text-xs text-muted-foreground">人工确认 · 非托管 · 仅服务 TRC-20 转账</p></div><div className="flex flex-wrap items-center gap-4 text-xs font-bold text-muted-foreground"><button type="button" onClick={() => window.open(config.telegramUrl, "_blank", "noopener,noreferrer")} className="inline-flex items-center gap-1.5 hover:text-primary">Telegram <ExternalLink size={13} /></button><button type="button" onClick={() => scrollTo("faq")} className="hover:text-primary">服务说明</button><button type="button" onClick={() => scrollTo("top")} className="hover:text-primary">返回顶部</button></div></div>
      </footer>
    </main>
  );
}
