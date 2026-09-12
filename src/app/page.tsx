"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Copy,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const telegramUrl = "https://t.me/trx_energy_service";
const receivingAddress = "TKq3aBWoYxziQ1gUHN2VcfzW3ej7u88888";

const packages = [
  { energy: "65,000", price: "2", label: "对方地址已有 USDT", accent: "bg-card" },
  { energy: "131,000", price: "4", label: "对方地址没有 USDT", accent: "bg-destructive/10" },
];

const faqs = [
  ["需要提供我的钱包地址吗？", "不需要。你只需向页面提供的收款地址转入套餐对应的 TRX，不需要连接钱包，也不会索要私钥。"],
  ["什么时候发送 USDT？", "确认能量到账后，请在 1 小时有效期内完成 USDT TRC-20 转账。"],
  ["为什么没有 USDT 要选 131,000？", "收款地址没有 USDT 余额时，交易通常会消耗更多网络资源，建议选择 131,000 Energy。"],
];

export default function Home() {
  const [selectedEnergy, setSelectedEnergy] = useState(packages[0].energy);
  const [copied, setCopied] = useState(false);
  const selected = packages.find((item) => item.energy === selectedEnergy) ?? packages[0];

  async function copyAddress() {
    await navigator.clipboard.writeText(receivingAddress);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <header className="border-b-2 border-foreground bg-background"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10"><button type="button" onClick={() => scrollTo("top")} className="flex items-center gap-3 text-left"><span className="grid size-11 place-items-center rounded-2xl border-2 border-foreground bg-primary text-primary-foreground shadow-[4px_4px_0_var(--foreground)]"><Zap size={23} fill="currentColor" strokeWidth={2.5} /></span><span><span className="block text-xs font-black tracking-[0.16em] text-destructive">核心服务</span><span className="mt-0.5 block text-base font-black">USDT 转账能量方案</span></span></button><div className="flex items-center gap-3"><button type="button" onClick={() => scrollTo("faq")} className="hidden text-sm font-bold text-muted-foreground hover:text-foreground sm:block">常见问题</button><Button type="button" onClick={() => window.open(telegramUrl, "_blank", "noopener,noreferrer")} size="sm" className="gap-2 rounded-lg border-2 border-foreground bg-primary font-black text-primary-foreground shadow-[3px_3px_0_var(--foreground)]"><MessageCircle size={15} /> 联系客服</Button></div></div></header>

      <section id="top" className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14"><div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16"><div><p className="text-sm font-black text-destructive">USDT 转账省费方案 / 01</p><h1 className="mt-3 max-w-2xl text-5xl font-black leading-[1.03] tracking-[-0.06em] sm:text-6xl">少烧 TRX，<br /><span className="text-destructive">转账更轻松。</span></h1><p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">每次转 USDT 前，先补足刚好够用的 Energy。选择套餐、转入对应 TRX，约 3 秒收到能量，到账后马上完成 USDT 转账。</p><div className="mt-8 flex flex-wrap gap-2"><span className="rounded-full border border-emerald-700/25 bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-800">约 3 秒到账</span><span className="rounded-full border border-emerald-700/25 bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-800">到账后 1 小时有效</span><span className="rounded-full border border-foreground/20 bg-card px-3 py-1.5 text-xs font-bold text-muted-foreground">不连接钱包</span></div><div className="mt-12 grid max-w-lg grid-cols-3 border-y-2 border-foreground py-5"><Stat value="2 / 4" label="TRX 参考价" /><Stat value="65k / 131k" label="Energy 档位" /><Stat value="7×12" label="客服时段" /></div></div>

        <aside className="min-w-0 rounded-2xl border-2 border-foreground bg-card p-5 shadow-[6px_6px_0_var(--foreground)] sm:p-6"><div className="flex items-start justify-between border-b-2 border-foreground pb-5"><div><p className="text-xs font-black tracking-[0.16em] text-destructive">ORDER DESK</p><h2 className="mt-1 text-2xl font-black">本次购买确认</h2></div><span className="grid size-10 place-items-center rounded-xl border-2 border-foreground bg-primary"><Zap size={19} fill="currentColor" /></span></div><div className="space-y-4 pt-5"><p className="text-sm font-black">1. 选择 Energy 套餐</p>{packages.map((item) => <button key={item.energy} type="button" onClick={() => setSelectedEnergy(item.energy)} className={`flex w-full min-w-0 items-center justify-between gap-3 rounded-xl border-2 border-foreground px-4 py-4 text-left shadow-[3px_3px_0_var(--foreground)] transition-transform hover:-translate-y-0.5 ${selectedEnergy === item.energy ? item.accent : "bg-background"}`}><span className="min-w-0"><span className="block truncate text-xl font-black text-foreground">{item.energy} Energy</span><span className="mt-1 block truncate text-xs font-medium text-muted-foreground">{item.label}</span></span><span className="flex shrink-0 items-baseline gap-1"><span className="text-2xl font-black text-destructive">{item.price}</span><span className="text-xs font-bold text-destructive">TRX</span></span></button>)}<div className="mt-5 rounded-xl bg-secondary p-4"><div className="flex items-center justify-between text-sm"><span className="font-bold text-muted-foreground">当前选择</span><span className="font-black text-foreground">{selected.energy} Energy</span></div><div className="mt-2 flex items-center justify-between text-sm"><span className="font-bold text-muted-foreground">应转入</span><span className="font-black text-destructive">{selected.price} TRX</span></div></div></div></aside></div></section>

      <section className="border-y-2 border-foreground bg-foreground text-background"><div className="mx-auto grid max-w-7xl gap-7 px-5 py-7 sm:grid-cols-3 sm:px-8 lg:px-10"><DarkFact icon={<ShieldCheck size={19} />} title="只要公开信息" text="不需要钱包地址、私钥或助记词" /><DarkFact icon={<Clock3 size={19} />} title="收到就能用" text="能量到账后 1 小时内完成 USDT 转账" /><DarkFact icon={<MessageCircle size={19} />} title="有人协助" text="遇到地址或套餐问题可联系人工客服" /></div></section>

      <section id="payment" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"><div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center"><div><p className="text-sm font-black text-destructive">TRON ENERGY DESK / 02</p><h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">2. 转入 TRX，等待能量到账</h2><p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">确认套餐后，向右侧收款地址转入 <span className="font-black text-destructive">{selected.price} TRX</span>。不用质押、不用连接钱包，到账后即可转 USDT。</p><div className="mt-8 space-y-3"><CheckLine text="收款地址固定，不需要填写你的地址" /><CheckLine text="通常约 3 秒到账" /><CheckLine text="到账后 1 小时内发送 USDT" /></div></div><div className="min-w-0 rounded-2xl border-2 border-foreground bg-foreground p-5 text-background shadow-[6px_6px_0_var(--primary)] sm:p-7"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div className="min-w-0"><p className="text-xs font-bold text-primary">能量租赁收款地址（TRON）</p><p className="mt-3 break-all font-mono text-xl font-black tracking-tight sm:text-2xl">{receivingAddress}</p></div><Button type="button" onClick={copyAddress} className="h-12 shrink-0 gap-2 rounded-xl border-2 border-foreground bg-primary font-black text-primary-foreground shadow-[3px_3px_0_var(--background)]">{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "已复制" : "一键复制"}</Button></div><div className="mt-6 flex flex-wrap gap-2"><span className="rounded-lg bg-primary/20 px-3 py-2 text-xs font-bold text-primary">⚡ 约 3 秒到账</span><span className="rounded-lg bg-primary/20 px-3 py-2 text-xs font-bold text-primary">◷ 1 小时有效</span><span className="rounded-lg bg-primary/20 px-3 py-2 text-xs font-bold text-primary">→ 到账后转 USDT</span></div></div></div></section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10"><div className="rounded-2xl border-2 border-primary bg-primary/20 px-5 py-5 shadow-[4px_4px_0_var(--primary)] sm:px-7"><p className="text-sm leading-7 text-foreground"><strong>重要提示：</strong>如果对方地址的 USDT 余额为 0，转账通常需要约两倍 Energy，请选择 <strong>131,000 Energy / 4 TRX</strong> 套餐。</p></div></section>

      <section id="faq" className="border-t-2 border-foreground bg-secondary"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-black text-destructive">TRON ENERGY DESK / 03</p><h2 className="mt-2 text-4xl font-black tracking-[-0.06em]">常见问题</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">第一次购买也可以照着步骤完成，遇到问题直接联系客服。</p></div><div className="mt-10 grid gap-3 lg:grid-cols-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border-2 border-foreground bg-card px-5 shadow-[3px_3px_0_var(--foreground)]"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-black [&::-webkit-details-marker]:hidden"><span>{question}</span><ChevronDown size={17} className="shrink-0 transition-transform group-open:rotate-180" /></summary><p className="pb-5 text-sm leading-7 text-muted-foreground">{answer}</p></details>)}</div></div></section>

      <footer className="border-t-2 border-foreground bg-background"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><div><p className="font-black">波场能量购买与租赁</p><p className="mt-1 text-xs text-muted-foreground">按需购买 Energy · 到账后 1 小时内完成 USDT 转账</p></div><Button type="button" onClick={() => window.open(telegramUrl, "_blank", "noopener,noreferrer")} className="gap-2 rounded-lg border-2 border-foreground bg-primary font-black text-primary-foreground shadow-[3px_3px_0_var(--foreground)]"><ExternalLink size={15} /> Telegram 客服</Button></div></footer>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="min-w-0"><p className="truncate text-xl font-black text-foreground">{value}</p><p className="mt-1 text-xs font-medium text-muted-foreground">{label}</p></div>;
}

function CheckLine({ text }: { text: string }) {
  return <div className="flex items-center gap-3 text-sm text-muted-foreground"><span className="grid size-5 place-items-center rounded-full bg-primary text-primary-foreground"><Check size={12} strokeWidth={3} /></span>{text}</div>;
}

function DarkFact({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="flex gap-3"><span className="grid size-10 place-items-center rounded-lg border-2 border-background bg-primary text-primary-foreground">{icon}</span><div><p className="text-sm font-black">{title}</p><p className="mt-1 text-xs leading-5 text-background/65">{text}</p></div></div>;
}
