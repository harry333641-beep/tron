"use client";

import { useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
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

type EnergyTier = {
  price: string;
  energy: string;
  label: string;
};

const energyTiers: EnergyTier[] = [
  { price: "2", energy: "6.5K", label: "65,000 Energy" },
  { price: "4", energy: "131K", label: "131,000 Energy" },
];

const checkItems = [
  ["确认从哪个地址发款", "Energy（能量）会发放到实际支付 TRX 的地址，因此请使用接下来要发送 USDT 的同一地址付款。"],
  ["复制平台租赁地址", "从页面租赁区复制平台地址，核对无误后从准备发送 USDT 的同一地址转入对应 TRX。"],
  ["到账后再发送 USDT", "付款后通常约 3 秒能量到账。输入付款地址查询可用能量；确认本次租赁到账时，还需核对该地址的链上能量委托记录。确认有足够能量后再发送 USDT TRC20。"],
  ["到账后 1 小时内完成转账", "租到的能量自到账起有效 1 小时，请在有效期内完成转账。网络会自动使用地址中可用的能量，无需手动开启。"],
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
  const [selectedTier, setSelectedTier] = useState(energyTiers[0]);
  const [copied, setCopied] = useState(false);

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
          <div className="px-2 py-4 sm:px-4">
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground"><WalletCards size={14} />收款地址 <span className="text-foreground/80">(点击复制)</span></div>
            <div className="mt-4 flex min-w-0 items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
              <span className="min-w-0 flex-1 truncate text-center font-mono text-sm font-bold text-accent sm:text-base">{config.receivingAddress}</span>
              <Button type="button" variant="ghost" size="icon" onClick={copyAddress} aria-label="复制收款地址" className="size-9 shrink-0 rounded-lg bg-muted/80 text-accent hover:bg-primary/15 hover:text-accent">{copied ? <Check size={18} strokeWidth={2.5} /> : <Copy size={18} />}</Button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-accent/20 bg-accent/5 px-3 py-2 text-center text-xs font-bold text-accent"><Zap size={15} fill="currentColor" />向此地址转账 {selectedTier.price} TRX 即刻自动到账 {selectedTier.energy} 能量</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {energyTiers.map((tier) => {
                const isSelected = tier.price === selectedTier.price;
                return <Button key={tier.price} type="button" variant="ghost" aria-pressed={isSelected} onClick={() => setSelectedTier(tier)} className={`h-auto min-w-0 rounded-lg border px-3 py-2.5 text-center transition-colors ${isSelected ? "border-primary bg-primary/15 text-foreground shadow-[0_0_18px_var(--primary-glow)]" : "border-border bg-background/70 text-muted-foreground hover:border-primary/50 hover:bg-primary/5"}`}><span className="block text-xs font-black">{tier.price} TRX {isSelected && <Check size={13} className="ml-1 inline text-primary" strokeWidth={2.5} />}</span><span className="mt-1 block truncate text-[11px] font-bold text-accent">{tier.label}</span></Button>;
              })}
            </div>
            <div className="my-5 border-t border-border" />
            <Button type="button" onClick={() => window.open(config.telegramUrl, "_blank", "noopener,noreferrer")} className="h-12 w-full gap-2 rounded-xl bg-accent font-black text-accent-foreground shadow-[0_12px_28px_var(--primary-glow)] transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent/90"><ArrowUpRight size={19} strokeWidth={2.5} />前往TG机器人自助租赁</Button>
          </div>
        </div>
      </section>

      <section id="steps" className="relative z-10 border-y border-border bg-card/35">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="max-w-2xl"><SectionEyebrow>BEFORE YOU SEND</SectionEyebrow><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">转 USDT 前的 4 项检查</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">按顺序确认付款地址、到账状态和有效时间，避免能量发放到错误地址。</p></div>
          <div className="relative mt-8 max-w-3xl">
            <div className="absolute bottom-6 left-[17px] top-6 w-px bg-border" />
            <div className="relative space-y-3">
              {checkItems.map(([title, description], index) => <div key={title} className="relative flex gap-4 rounded-xl border border-border bg-card p-4 sm:p-5"><span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full border border-primary/40 bg-card font-mono text-sm font-bold text-primary shadow-[0_0_0_5px_var(--background)]">{index + 1}</span><div className="min-w-0"><div className="flex items-center gap-2"><CheckCircle2 size={16} className="shrink-0 text-accent" /><h3 className="font-black">{title}</h3></div><p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p></div></div>)}
            </div>
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
