"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  ExternalLink,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const telegramUrl = "https://t.me/trx_energy_service";

const packages = [
  {
    energy: "65,000",
    price: "2.2",
    title: "标准转账",
    detail: "一次 USDT 转账",
    featured: true,
  },
  {
    energy: "131,000",
    price: "4.4",
    title: "无 U 加倍",
    detail: "收款方没有 USDT",
    featured: false,
  },
];

const faqs = [
  {
    question: "为什么一次 USDT 转账需要 65,000 能量？",
    answer:
      "TRC-20 USDT 转账需要调用智能合约，通常会消耗约 65,000 Energy。能量不足时，钱包会改为燃烧 TRX 支付网络费用。",
  },
  {
    question: "为什么收款方没有 USDT 要 131,000 能量？",
    answer:
      "当收款地址没有 USDT 余额时，交易执行会需要更多网络资源，所以通常按 131,000 Energy 准备，避免转账中途因能量不足失败。",
  },
  {
    question: "2.2 TRX 是买断价格吗？",
    answer:
      "不是。2.2 TRX 是一次标准 USDT 转账的参考租赁价格，能量在 1 小时内有效。付款前客服会根据地址状态和实时情况再次确认。",
  },
  {
    question: "我需要提供私钥或连接钱包吗？",
    answer:
      "不需要。你只需提供接收能量的 TRON 钱包地址，我们不会索要私钥、助记词，也不会要求连接钱包。",
  },
];

export default function Home() {
  const [selectedEnergy, setSelectedEnergy] = useState(packages[0].energy);
  const [wallet, setWallet] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedPackage = packages.find((item) => item.energy === selectedEnergy) ?? packages[0];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function jumpTo(id: string) {
    window.location.hash = id;
  }

  return (
    <main className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-0 w-screen max-w-full overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 -top-32 size-[34rem] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute -right-40 top-[38rem] size-[28rem] rounded-full bg-primary/6 blur-[130px]" />
      </div>

      <header className="relative z-10 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <button type="button" onClick={() => jumpTo("top")} className="flex items-center gap-3 text-left">
            <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_24px_color-mix(in_oklab,var(--primary)_30%,transparent)]"><Zap size={18} fill="currentColor" /></span>
            <span><span className="block font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-primary">ENERGY DESK</span><span className="block text-sm font-semibold tracking-tight text-foreground">能量快租</span></span>
          </button>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"><button type="button" onClick={() => jumpTo("pricing")} className="transition-colors hover:text-foreground">套餐价格</button><button type="button" onClick={() => jumpTo("how-it-works")} className="transition-colors hover:text-foreground">怎么下单</button><button type="button" onClick={() => jumpTo("faq")} className="transition-colors hover:text-foreground">常见问题</button></nav>
          <Button type="button" size="sm" onClick={() => window.open(telegramUrl, "_blank", "noopener,noreferrer")} className="gap-2 rounded-full px-4"><MessageCircle size={15} /> 联系客服</Button>
        </div>
      </header>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl scroll-mt-20 gap-12 px-5 pb-20 pt-14 sm:px-8 md:pt-20 lg:grid-cols-[1fr_0.92fr] lg:gap-20 lg:px-10 lg:pb-24">
        <div className="flex flex-col justify-center">
          <div className="mb-7 flex items-center gap-3 text-xs text-muted-foreground"><span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 py-1.5 text-primary"><span className="size-1.5 animate-pulse rounded-full bg-primary" /> 人工服务在线</span><span className="font-mono tracking-[0.12em]">TRON / TRC-20</span></div>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.03] tracking-[-0.06em] text-foreground sm:text-6xl lg:text-[5.4rem]">转 USDT 之前，<span className="text-primary">先省下 TRX。</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">一次转账通常只需要 65,000 能量。按笔租、1 小时有效，不用质押，不用连接钱包，客服确认后通常 1–2 分钟处理。</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button type="button" size="lg" onClick={() => jumpTo("order")} className="h-12 gap-2 rounded-lg px-5">开始下单 <ArrowRight size={17} /></Button><Button type="button" variant="outline" size="lg" onClick={() => jumpTo("pricing")} className="h-12 rounded-lg border-border bg-transparent px-5">先看价格</Button></div>
          <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-border/70 py-5"><div><p className="font-mono text-xl font-semibold text-foreground">1–2<span className="ml-1 text-xs font-normal text-muted-foreground">分钟</span></p><p className="mt-1 text-xs text-muted-foreground">常规处理时间</p></div><div className="border-l border-border/70 pl-4"><p className="font-mono text-xl font-semibold text-foreground">1<span className="ml-1 text-xs font-normal text-muted-foreground">小时</span></p><p className="mt-1 text-xs text-muted-foreground">能量有效期</p></div><div className="border-l border-border/70 pl-4"><p className="font-mono text-xl font-semibold text-foreground">7×12</p><p className="mt-1 text-xs text-muted-foreground">客服服务时段</p></div></div>
        </div>

        <div className="relative min-w-0 overflow-hidden lg:pt-2">
          <div className="absolute -inset-5 rounded-[2rem] border border-primary/10 bg-primary/5 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/25">
            <div className="flex items-center justify-between border-b border-border bg-secondary/45 px-5 py-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">QUICK QUOTE</p><p className="mt-1 text-sm font-medium text-foreground">一分钟选好本次用量</p></div><span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/8 px-2.5 py-1 font-mono text-[10px] text-primary"><span className="size-1.5 rounded-full bg-primary" /> OPEN</span></div>
            <div className="space-y-5 p-5 sm:p-6">
              <div className="grid grid-cols-2 gap-3"><div className="rounded-xl border border-border bg-background/35 p-4"><p className="text-xs text-muted-foreground">一次标准转账</p><p className="mt-2 font-mono text-2xl font-semibold text-foreground">65,000</p><p className="mt-1 text-xs text-muted-foreground">Energy</p></div><div className="rounded-xl border border-primary/35 bg-primary/8 p-4"><p className="text-xs text-primary">本次参考价</p><p className="mt-2 font-mono text-2xl font-semibold text-foreground">{selectedPackage.price}</p><p className="mt-1 text-xs text-muted-foreground">TRX / 笔</p></div></div>
              <div className="space-y-2">{packages.map((item) => <button key={item.energy} type="button" onClick={() => setSelectedEnergy(item.energy)} className={`flex min-w-0 w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-colors ${selectedEnergy === item.energy ? "border-primary/70 bg-primary/10" : "border-border bg-background/25 hover:border-primary/35"}`}><span className="min-w-0"><span className="block truncate text-sm font-medium text-foreground">{item.title}</span><span className="mt-1 block truncate text-xs text-muted-foreground">{item.energy} Energy · {item.detail}</span></span><span className="shrink-0 pl-3 font-mono text-sm font-semibold text-primary">{item.price} TRX</span></button>)}</div>
              <div className="flex items-start gap-2 rounded-xl bg-secondary/70 p-3 text-xs leading-5 text-muted-foreground"><Clock3 size={14} className="mt-0.5 shrink-0 text-primary" /> 能量从委托完成起计时，1 小时内有效；付款前以人工报价为准。</div>
              <Button type="button" onClick={() => jumpTo("order")} className="h-11 w-full gap-2 rounded-lg">提交钱包地址 <ArrowDownRight size={16} /></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-border/70 bg-secondary/25"><div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:grid-cols-3 sm:px-8 lg:px-10"><div className="flex gap-3"><Zap size={18} className="mt-0.5 shrink-0 text-primary" /><div><p className="text-sm font-semibold text-foreground">按笔计费</p><p className="mt-1 text-xs leading-5 text-muted-foreground">不用为了偶尔转账长期质押 TRX。</p></div></div><div className="flex gap-3"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-primary" /><div><p className="text-sm font-semibold text-foreground">付款前核对</p><p className="mt-1 text-xs leading-5 text-muted-foreground">客服确认地址与档位后再付款。</p></div></div><div className="flex gap-3"><LockKeyhole size={18} className="mt-0.5 shrink-0 text-primary" /><div><p className="text-sm font-semibold text-foreground">不碰私钥</p><p className="mt-1 text-xs leading-5 text-muted-foreground">只接收公开钱包地址，不连接钱包。</p></div></div></div></section>

      <section id="pricing" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10"><div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">01 / Select energy</p><h2 className="mt-3 max-w-md text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">不是套餐越大越好，是刚好够用。</h2></div><div className="max-w-xl text-sm leading-7 text-muted-foreground">标准 USDT 转账通常按 65,000 能量计算；收款方没有 USDT 时，按 131,000 能量准备。两档都按每笔计价，能量自委托完成起 1 小时有效。</div></div><div className="mt-10 grid gap-4 md:grid-cols-2">{packages.map((item) => <article key={item.energy} className={`relative overflow-hidden rounded-2xl border p-6 sm:p-7 ${item.featured ? "border-primary/65 bg-primary/8 shadow-[0_0_36px_color-mix(in_oklab,var(--primary)_12%,transparent)]" : "border-border bg-card"}`}>{item.featured && <span className="absolute right-5 top-5 rounded-full bg-primary px-2.5 py-1 font-mono text-[9px] font-bold tracking-[0.16em] text-primary-foreground">STANDARD</span>}<p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{item.title}</p><div className="mt-8 flex items-end justify-between gap-4"><div><p className="font-mono text-4xl font-semibold tracking-[-0.06em] text-foreground">{item.energy}</p><p className="mt-1 text-sm text-muted-foreground">Energy / 笔</p></div><div className="text-right"><p className="font-mono text-3xl font-semibold text-primary">{item.price}</p><p className="mt-1 font-mono text-[10px] text-muted-foreground">TRX / TX</p></div></div><div className="my-7 h-px bg-border" /><p className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={15} className="text-primary" /> {item.detail}</p><p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><Clock3 size={15} className="text-primary" /> 1 小时有效</p><Button type="button" variant={item.featured ? "default" : "outline"} onClick={() => { setSelectedEnergy(item.energy); jumpTo("order"); }} className="mt-8 w-full rounded-lg">选择 {item.energy} 能量 <ArrowRight size={15} /></Button></article>)}</div></section>

      <section id="how-it-works" className="relative z-10 border-y border-border/70 bg-card/55"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">02 / How it works</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">把能量租赁做成四个动作</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">不连接钱包、不交私钥，人工确认后再付款，适合第一次使用。</p></div><div className="mt-12 grid overflow-hidden rounded-2xl border border-border md:grid-cols-4">{[["01", "发起咨询", "在 Telegram 说明要转账的地址和数量。"], ["02", "提交地址", "发送 T 开头的 TRON 收款钱包地址。"], ["03", "确认付款", "客服确认档位、价格和收款信息。"], ["04", "完成转账", "能量到账后，在 1 小时内完成 USDT 转账。"]].map(([number, title, text]) => <div key={number} className="border-b border-border bg-background p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:p-7"><span className="font-mono text-xs text-primary">{number}</span><h3 className="mt-12 text-base font-semibold text-foreground">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></section>

      <section id="order" className="relative z-10 mx-auto grid max-w-7xl scroll-mt-20 gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"><div className="lg:pt-5"><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">03 / Place an order</p><h2 className="mt-3 max-w-md text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">把地址留给我们，付款前先核对。</h2><p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">提交只是需求登记，不会自动扣款。人工客服会在 Telegram 里确认地址状态、能量档和最终价格。</p><div className="mt-9 space-y-4"><div className="flex items-start gap-3"><Wallet size={18} className="mt-0.5 text-primary" /><p className="text-sm leading-6 text-muted-foreground">钱包地址只用于接收能量委托</p></div><div className="flex items-start gap-3"><CircleHelp size={18} className="mt-0.5 text-primary" /><p className="text-sm leading-6 text-muted-foreground">地址有无 USDT 不确定时，客服会帮你判断档位</p></div><div className="flex items-start gap-3"><Clock3 size={18} className="mt-0.5 text-primary" /><p className="text-sm leading-6 text-muted-foreground">付款后通常 1–2 分钟完成处理</p></div></div></div><form onSubmit={handleSubmit} className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-xl shadow-black/10 sm:p-7"><div className="flex items-center justify-between border-b border-border pb-5"><div><p className="text-base font-semibold text-foreground">登记本次转账需求</p><p className="mt-1 text-xs text-muted-foreground">客服会在 Telegram 里完成付款确认</p></div><span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><MessageCircle size={19} /></span></div>{submitted ? <div className="py-12 text-center"><span className="mx-auto grid size-12 place-items-center rounded-full bg-primary/15 text-primary"><Check size={24} /></span><h3 className="mt-5 text-lg font-semibold text-foreground">需求已提交</h3><p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted-foreground">接下来请去 Telegram 发送钱包地址，我们会确认 65,000 或 131,000 能量档和最终价格。</p><Button type="button" onClick={() => window.open(telegramUrl, "_blank", "noopener,noreferrer")} className="mt-6 gap-2 rounded-lg">去 Telegram 确认 <ExternalLink size={15} /></Button><button type="button" onClick={() => setSubmitted(false)} className="mt-4 block w-full text-xs text-muted-foreground underline-offset-4 hover:underline">返回修改信息</button></div> : <div className="space-y-5 pt-6"><div className="space-y-2"><Label htmlFor="wallet">接收能量的钱包地址</Label><Input id="wallet" required value={wallet} onChange={(event) => setWallet(event.target.value)} placeholder="请输入 TRON 地址（T 开头）" className="h-11 border-border bg-background" /><p className="text-xs text-muted-foreground">只需公开地址，不要填写私钥或助记词。</p></div><div className="space-y-2"><Label>本次需要的能量</Label><div className="grid gap-2 sm:grid-cols-2">{packages.map((item) => <button key={item.energy} type="button" onClick={() => setSelectedEnergy(item.energy)} className={`min-w-0 rounded-xl border px-3 py-3 text-left transition-colors ${selectedEnergy === item.energy ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`}><span className="flex items-center justify-between gap-2"><span className="truncate font-mono text-xs text-foreground">{item.energy}</span><span className="shrink-0 font-mono text-xs text-primary">{item.price} TRX</span></span><span className="mt-1 block truncate text-[10px] text-muted-foreground">{item.title} · 1 小时有效</span></button>)}</div></div><div className="space-y-2"><Label htmlFor="contact">联系方式</Label><Input id="contact" required value={contact} onChange={(event) => setContact(event.target.value)} placeholder="Telegram 用户名或其他联系方式" className="h-11 border-border bg-background" /></div><Button type="submit" size="lg" className="h-12 w-full gap-2 rounded-lg">提交需求并联系 Telegram <ArrowRight size={16} /></Button><p className="text-center text-[11px] leading-5 text-muted-foreground">提交后人工确认，不会自动扣款。</p></div>}</form></section>

      <section id="faq" className="relative z-10 border-t border-border/70 bg-secondary/25"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10"><div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">04 / FAQ</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">还有几个问题？</h2><p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">把第一次租能量最容易担心的事情，提前说明白。</p></div><div className="space-y-2">{faqs.map((faq) => <details key={faq.question} className="group rounded-xl border border-border bg-card px-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden"><span>{faq.question}</span><ChevronDown size={17} className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-muted-foreground">{faq.answer}</p></details>)}</div></div></section>

      <footer className="relative z-10 border-t border-border/70"><div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10"><div><button type="button" onClick={() => jumpTo("top")} className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground"><Zap size={16} fill="currentColor" /></span><span className="text-sm font-semibold text-foreground">能量快租</span></button><p className="mt-3 text-xs leading-5 text-muted-foreground">TRON 能量按笔租赁 · 人工确认 · 7×12 小时服务</p></div><div className="flex flex-col items-start gap-3 md:items-end"><button type="button" onClick={() => window.open(telegramUrl, "_blank", "noopener,noreferrer")} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Telegram 客服 <ExternalLink size={14} /></button><p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">TRON ENERGY / 2026</p></div></div></footer>
    </main>
  );
}
