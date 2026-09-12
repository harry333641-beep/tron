"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Copy,
  ExternalLink,
  Info,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  WalletCards,
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
    note: "标准 USDT 转账 · 1 小时有效",
    tag: "标准",
    featured: true,
  },
  {
    energy: "131,000",
    price: "4.4",
    note: "收款方无 U · 1 小时有效",
    tag: "加倍能量",
    featured: false,
  },
];

const faqs = [
  {
    question: "什么是 TRON 能量？",
    answer:
      "能量（Energy）是 TRON 网络执行智能合约时消耗的资源。一次 USDT 转账通常消耗 65,000 能量；如果收款方地址没有 USDT，所需能量会加倍到 131,000。",
  },
  {
    question: "为什么租能量比直接烧 TRX 便宜？",
    answer:
      "直接发起交易时，钱包会按网络资源价格燃烧 TRX。租赁能量是把资源按需分配给你的钱包，用完即止，不需要长期质押或锁定资金，所以更适合偶尔或集中转账。",
  },
  {
    question: "能量多久可以到账？",
    answer:
      "人工确认订单和付款后，通常 1–2 分钟内完成能量委托。网络拥堵或维护时可能会有延迟，客服会在 Telegram 里同步进度。",
  },
  {
    question: "可以续租或重复购买吗？",
    answer:
      "可以。每笔能量有效 1 小时，使用或失效后直接发起下一笔订单即可；如果你有固定地址和频率，也可以在 Telegram 里和客服约定长期方案。",
  },
];

export default function Home() {
  const [wallet, setWallet] = useState("");
  const [contact, setContact] = useState("");
  const [selectedEnergy, setSelectedEnergy] = useState(packages[0].energy);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-0 w-screen max-w-full overflow-hidden opacity-50" aria-hidden="true">
        <div className="absolute left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-[-10rem] top-[32rem] h-[24rem] w-[24rem] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="能量快租首页">
            <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_28px_color-mix(in_oklab,var(--primary)_35%,transparent)]">
              <Zap size={19} strokeWidth={2.5} fill="currentColor" />
            </span>
            <span>
              <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-primary">TRON / ENERGY</span>
              <span className="block text-sm font-semibold tracking-tight text-foreground">能量快租</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#pricing">价格套餐</a>
            <a className="transition-colors hover:text-foreground" href="#steps">下单流程</a>
            <a className="transition-colors hover:text-foreground" href="#faq">常见问题</a>
          </nav>

          <Button type="button" size="sm" onClick={() => window.open(telegramUrl, "_blank", "noopener,noreferrer")} className="gap-2 rounded-full px-4 shadow-[0_0_22px_color-mix(in_oklab,var(--primary)_25%,transparent)]">
            <MessageCircle size={15} /> 联系客服
          </Button>
        </div>
      </header>

      <section id="top" className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-22 pt-18 sm:px-8 md:pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-30">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1.5 text-xs text-primary">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            TRON 网络资源 · 人工快速处理
          </div>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[5.25rem]">
            不用质押，<span className="text-primary">按需租能量。</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            一次 USDT 转账通常消耗 65,000 能量；如果收款方没有 USDT，需要准备 131,000 能量。少烧 TRX、不锁资金，人工确认后通常 1–2 分钟到账。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button type="button" size="lg" onClick={() => { window.location.hash = "order"; }} className="h-12 gap-2 rounded-lg px-5 text-sm font-semibold shadow-[0_0_30px_color-mix(in_oklab,var(--primary)_28%,transparent)]">
              立即提交订单 <ArrowRight size={17} />
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={() => { window.location.hash = "pricing"; }} className="h-12 rounded-lg border-border bg-transparent px-5 text-sm">
              查看价格套餐
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/70 pt-5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Clock3 size={14} className="text-primary" /> 1–2 分钟处理</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck size={14} className="text-primary" /> 人工核验地址</span>
            <span className="inline-flex items-center gap-2"><LockKeyhole size={14} className="text-primary" /> 不托管私钥</span>
          </div>
        </div>

        <div className="relative mx-auto min-w-0 w-full max-w-md overflow-hidden lg:ml-auto">
          <div className="absolute -inset-8 rounded-[2rem] border border-primary/10 bg-primary/5 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-border bg-secondary/55 px-5 py-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">Energy request</p>
                <p className="mt-1 text-sm font-medium text-foreground">快速估算本次成本</p>
              </div>
              <span className="rounded-md border border-primary/25 bg-primary/10 px-2 py-1 font-mono text-[10px] text-primary">LIVE</span>
            </div>
            <div className="space-y-5 p-5 sm:p-6">
              <div className="rounded-xl border border-primary/25 bg-primary/7 p-4">
                <div className="flex items-end justify-between">
                  <span className="text-xs text-muted-foreground">当前选择</span>
                  <span className="font-mono text-3xl font-semibold tracking-tight text-foreground">{selectedEnergy}</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full w-2/3 rounded-full bg-primary" /></div>
                <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground"><span>ENERGY</span><span>1 DAY</span></div>
              </div>
              <div className="grid gap-2">
                {packages.map((item) => (
                  <button
                    key={item.energy}
                    type="button"
                    onClick={() => setSelectedEnergy(item.energy)}
                    className={`flex min-w-0 items-center justify-between rounded-lg border px-3.5 py-3 text-left transition-colors ${selectedEnergy === item.energy ? "border-primary/70 bg-primary/10" : "border-border bg-background/30 hover:border-primary/35"}`}
                  >
                    <span className="min-w-0 truncate text-sm text-foreground">{item.energy} <span className="text-muted-foreground">能量</span></span>
                    <span className="shrink-0 font-mono text-sm font-semibold text-primary">{item.price} TRX</span>
                  </button>
                ))}
              </div>
              <div className="flex items-start gap-2 rounded-lg bg-secondary/70 p-3 text-xs leading-5 text-muted-foreground">
                <Info size={14} className="mt-0.5 shrink-0 text-primary" />
                价格按每笔转账计算，能量 1 小时内有效，最终以客服确认时的实时报价为准。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-border/70 bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-7 sm:grid-cols-3 sm:px-8 lg:px-10">
          {[
            ["更省", "按需付费，不用长期质押 TRX"],
            ["更快", "人工盯单，通常 1–2 分钟处理"],
            ["更稳", "发单前核对地址，避免转错"],
          ].map(([title, text]) => (
            <div key={title} className="flex items-start gap-3">
              <Check size={17} className="mt-0.5 shrink-0 text-primary" strokeWidth={2.5} />
              <div><p className="text-sm font-semibold text-foreground">{title}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">01 / Pricing</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">按一次转账选择能量</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">以下为每笔参考价。收款方地址状态不同，所需能量可能不同，联系客服即可确认。</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.energy} className={`relative overflow-hidden rounded-xl border p-6 ${item.featured ? "border-primary/65 bg-primary/8 shadow-[0_0_36px_color-mix(in_oklab,var(--primary)_12%,transparent)]" : "border-border bg-card"}`}>
              {item.featured && <div className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-1 font-mono text-[9px] font-bold tracking-[0.16em] text-primary-foreground">POPULAR</div>}
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{item.tag}</p>
              <p className="mt-7 font-mono text-4xl font-semibold tracking-[-0.06em] text-foreground">{item.energy}</p>
              <p className="mt-1 text-sm text-muted-foreground">Energy / 笔 · 1 小时有效</p>
              <div className="my-7 h-px bg-border" />
              <div className="flex items-end gap-2"><span className="font-mono text-3xl font-semibold text-primary">{item.price}</span><span className="mb-1 font-mono text-xs text-muted-foreground">TRX / TX</span></div>
              <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
              <Button type="button" variant={item.featured ? "default" : "outline"} onClick={() => { setSelectedEnergy(item.energy); window.location.hash = "order"; }} className="mt-7 w-full rounded-lg">选择这个档位 <ArrowRight size={15} /></Button>
            </article>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground"><Sparkles size={14} className="text-primary" /> 套餐价格可根据你的实际业务需要调整，人工报价后再付款。</div>
      </section>

      <section id="steps" className="relative z-10 border-y border-border/70 bg-card/60">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <div className="max-w-xl"><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">02 / How it works</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">四步完成一次能量租赁</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">第一次使用也不复杂。你只需要准备接收能量的钱包地址，剩下的交给客服人工处理。</p></div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {[
              ["01", "联系人工客服", "通过 Telegram 告诉我们你要租能量。"],
              ["02", "提供钱包地址", "发送接收能量的 TRON（T 开头）地址。"],
              ["03", "支付 TRX", "客服确认价格后，按指引完成支付。"],
              ["04", "能量到账", "通常 1–2 分钟完成委托，客服回传结果。"],
            ].map(([number, title, text]) => (
              <div key={number} className="bg-background p-6 sm:p-7"><span className="font-mono text-xs text-primary">{number}</span><h3 className="mt-10 text-base font-semibold text-foreground">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="relative z-10 mx-auto grid max-w-7xl scroll-mt-20 gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div className="lg:pt-5"><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">03 / Start an order</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">先提交需求，付款前人工确认</h2><p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">我们不会自动扣款。提交后，客服会在 Telegram 里确认档位、价格和收款信息，核对无误再操作。</p><div className="mt-8 space-y-4">{["不需要连接钱包", "不需要提供私钥或助记词", "地址和套餐由人工二次核对"].map((text) => <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground"><span className="grid size-5 place-items-center rounded-full bg-primary/15 text-primary"><Check size={12} strokeWidth={3} /></span>{text}</div>)}</div></div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-5 shadow-xl shadow-black/10 sm:p-7">
          <div className="flex items-center justify-between border-b border-border pb-5"><div><p className="text-base font-semibold text-foreground">提交租赁需求</p><p className="mt-1 text-xs text-muted-foreground">提交后跳转 Telegram 完成付款确认</p></div><WalletCards size={22} className="text-primary" /></div>
          {submitted ? (
            <div className="py-12 text-center"><span className="mx-auto grid size-12 place-items-center rounded-full bg-primary/15 text-primary"><Check size={24} /></span><h3 className="mt-5 text-lg font-semibold text-foreground">需求已记录</h3><p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted-foreground">请点击下方按钮联系人工客服，发送你的钱包地址和套餐，我们会确认价格后安排。</p><Button type="button" onClick={() => window.open(telegramUrl, "_blank", "noopener,noreferrer")} className="mt-6 gap-2 rounded-lg">去 Telegram 确认 <ExternalLink size={15} /></Button><button type="button" onClick={() => setSubmitted(false)} className="mt-4 block w-full text-xs text-muted-foreground underline-offset-4 hover:underline">返回修改信息</button></div>
          ) : (
            <div className="space-y-5 pt-6">
              <div className="space-y-2"><Label htmlFor="wallet">接收能量的钱包地址</Label><Input id="wallet" required value={wallet} onChange={(event) => setWallet(event.target.value)} placeholder="请输入 TRON 地址（T 开头）" className="h-11 border-border bg-background" /><p className="text-xs text-muted-foreground">只需要公开钱包地址，绝不会索要私钥。</p></div>
              <div className="space-y-2"><Label>本次转账所需能量</Label><div className="grid grid-cols-3 gap-2">{packages.map((item) => <button key={item.energy} type="button" onClick={() => setSelectedEnergy(item.energy)} className={`min-w-0 rounded-lg border px-2 py-3 text-center transition-colors ${selectedEnergy === item.energy ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}><span className="block truncate font-mono text-xs">{item.energy}</span><span className="mt-1 block text-[10px]">{item.price} TRX</span></button>)}</div></div>
              <div className="space-y-2"><Label htmlFor="contact">联系方式</Label><Input id="contact" required value={contact} onChange={(event) => setContact(event.target.value)} placeholder="Telegram 用户名或其他联系方式" className="h-11 border-border bg-background" /></div>
              <Button type="submit" size="lg" className="mt-2 h-12 w-full gap-2 rounded-lg">提交需求并联系 Telegram <ArrowRight size={16} /></Button>
              <p className="text-center text-[11px] leading-5 text-muted-foreground">提交即表示你了解：这是人工报价服务，付款前会再次核对收款信息。</p>
            </div>
          )}
        </form>
      </section>

      <section id="faq" className="relative z-10 border-t border-border/70 bg-secondary/25">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"><div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">04 / FAQ</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">下单前，先看这里</h2><p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">把最常见的问题说清楚，第一次租能量也能放心开始。</p></div><div className="space-y-2">{faqs.map((faq) => <details key={faq.question} className="group rounded-xl border border-border bg-card px-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden"><span>{faq.question}</span><ChevronDown size={17} className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-muted-foreground">{faq.answer}</p></details>)}</div></div>
      </section>

      <footer className="relative z-10 border-t border-border/70"><div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10"><div><a href="#top" className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground"><Zap size={16} fill="currentColor" /></span><span className="text-sm font-semibold text-foreground">能量快租</span></a><p className="mt-3 text-xs leading-5 text-muted-foreground">TRON 能量按需租赁 · 人工确认 · 7×12 小时服务</p></div><div className="flex flex-col items-start gap-3 md:items-end"><a href={telegramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Telegram 客服 <ExternalLink size={14} /></a><p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">TRON ENERGY / 2026</p></div></div></footer>
    </main>
  );
}
