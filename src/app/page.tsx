"use client";

import { useState } from "react";
import {
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
  {
    price: "2",
    energy: "65,000",
    label: "对方地址已有 USDT 时选择此项",
    featured: false,
  },
  {
    price: "4",
    energy: "131,000",
    label: "对方地址没有 USDT 时选择此项",
    featured: true,
  },
];

const faqs = [
  ["为什么不需要提供我的钱包地址？", "你只需要把 TRX 转入页面提供的收款地址，我们会根据你选择的档位把能量委托到对应的转账服务流程中，不需要你连接钱包或提交私钥。"],
  ["什么时候可以发送 USDT？", "看到能量到账后，请在 1 小时有效期内完成 USDT TRC-20 转账，避免能量失效。"],
  ["为什么收款方没有 USDT 要选择 131,000？", "收款方地址没有 USDT 余额时，交易通常需要更多网络资源，因此按两倍 Energy 准备更稳妥。"],
  ["转入 TRX 后多久可以收到能量？", "页面提示的常规处理时间约为 3 秒；网络拥堵或维护时可能稍有延迟，异常情况可以直接联系 Telegram 客服。"],
];

export default function Home() {
  const [selectedEnergy, setSelectedEnergy] = useState(packages[0].energy);
  const [copied, setCopied] = useState(false);

  const selectedPackage = packages.find((item) => item.energy === selectedEnergy) ?? packages[0];

  async function copyAddress() {
    await navigator.clipboard.writeText(receivingAddress);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <header className="border-b-2 border-foreground/90 bg-background"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10"><button type="button" onClick={() => scrollToSection("top")} className="flex items-center gap-3 text-left"><span className="grid size-11 place-items-center rounded-[1.15rem] border-2 border-foreground bg-primary text-primary-foreground shadow-[4px_4px_0_var(--foreground)]"><Zap size={23} fill="currentColor" strokeWidth={2.5} /></span><span><span className="block text-xs font-bold tracking-[0.16em] text-destructive">核心服务</span><span className="mt-0.5 block text-base font-black tracking-tight text-foreground">波场能量购买与租赁</span></span></button><div className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground sm:flex"><button type="button" onClick={() => scrollToSection("guide")} className="hover:text-foreground">使用说明</button><button type="button" onClick={() => scrollToSection("faq")} className="hover:text-foreground">常见问题</button><Button type="button" size="sm" onClick={() => window.open(telegramUrl, "_blank", "noopener,noreferrer")} className="gap-2 rounded-lg border-2 border-foreground bg-primary font-bold text-primary-foreground shadow-[3px_3px_0_var(--foreground)] hover:bg-primary/90"><MessageCircle size={15} /> 客服</Button></div></div></header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-20 lg:pt-14"><div className="max-w-3xl"><p className="text-sm font-bold text-destructive">核心服务</p><h1 className="mt-2 text-4xl font-black leading-tight tracking-[-0.05em] text-foreground sm:text-6xl">波场能量购买与租赁</h1><p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">选择所需的能量套餐，并按套餐金额支付 TRX</p></div><div className="mt-12 space-y-9"><StepBadge number="1" title="选择 Energy（能量）套餐" /><div className="grid gap-5 lg:grid-cols-2">{packages.map((item) => <button key={item.energy} type="button" onClick={() => setSelectedEnergy(item.energy)} className={`group min-w-0 rounded-[1.25rem] border-2 border-foreground p-5 text-left shadow-[5px_5px_0_var(--foreground)] transition-transform hover:-translate-y-0.5 ${selectedEnergy === item.energy ? (item.featured ? "bg-destructive/10" : "bg-secondary") : "bg-card"}`}><div className="flex items-start justify-between gap-4"><div className="flex items-baseline gap-2"><span className="text-4xl font-black leading-none text-foreground">{item.price}</span><span className="font-bold text-destructive">TRX</span></div><span className={`grid size-6 place-items-center rounded-full border-2 border-foreground ${selectedEnergy === item.energy ? "bg-primary" : "bg-background"}`}>{selectedEnergy === item.energy && <Check size={14} strokeWidth={3} />}</span></div><p className="mt-3 text-lg font-black text-destructive">{item.energy} Energy（能量）</p><p className="mt-2 text-sm text-muted-foreground">{item.label}</p></button>)}</div>

        <div id="guide" className="space-y-6"><StepBadge number="2" title="向下方地址转入对应 TRX" /><p className="pl-0 text-sm leading-7 text-muted-foreground sm:pl-10">向下方租赁收款地址转入所选套餐对应的 TRX，能量约 3 秒后自动到账。到账后在有效期内发送 USDT TRC20，即可免除对应的 TRX 手续费。</p><div className="rounded-[1.25rem] border-2 border-foreground bg-foreground p-5 text-background shadow-[5px_5px_0_var(--primary)] sm:p-6"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div className="min-w-0"><p className="text-xs text-primary">能量租赁收款地址（TRON）</p><p className="mt-2 break-all font-mono text-xl font-bold tracking-tight sm:text-2xl">{receivingAddress}</p></div><Button type="button" onClick={copyAddress} className="h-14 shrink-0 gap-2 rounded-xl border-2 border-foreground bg-primary px-5 font-black text-primary-foreground shadow-[3px_3px_0_var(--background)] hover:bg-primary/90"><span>{copied ? <Check size={18} /> : <Copy size={18} />}</span>{copied ? "已复制" : "一键复制"}</Button></div></div><div className="flex flex-wrap justify-center gap-2 sm:pl-10"><span className="rounded-lg border border-emerald-700/25 bg-emerald-100 px-3 py-2 text-xs font-medium text-emerald-800">⚡ 约 3 秒到账</span><span className="rounded-lg border border-emerald-700/25 bg-emerald-100 px-3 py-2 text-xs font-medium text-emerald-800">◷ 到账后 1 小时有效</span><span className="rounded-lg border border-emerald-700/25 bg-emerald-100 px-3 py-2 text-xs font-medium text-emerald-800">→ 到账后再转 USDT</span></div><p className="text-center text-base font-black text-destructive">请在能量到账后的 1 小时内完成转账。</p><div className="rounded-xl border-2 border-primary bg-primary/20 px-4 py-4 text-sm leading-6 text-foreground"><strong>重要：</strong> 如果对方地址的 USDT 余额为 0，转账需要约两倍 Energy（能量），请选择 131,000 Energy（能量）套餐。</div></div></div></section>

      <section className="border-y-2 border-foreground/90 bg-secondary"><div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-10"><TrustItem icon={<Clock3 size={19} />} title="快速到账" text="通常约 3 秒收到能量" /><TrustItem icon={<ShieldCheck size={19} />} title="按需选择" text={`当前选择 ${selectedPackage.energy} Energy`} /><TrustItem icon={<MessageCircle size={19} />} title="人工客服" text="7×12 小时协助处理" /></div></section>

      <section id="faq" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-bold text-destructive">常见问题</p><h2 className="mt-2 text-3xl font-black tracking-[-0.05em] text-foreground sm:text-4xl">下单前先看这里</h2><p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">把套餐、地址和有效时间说清楚，第一次购买也能直接操作。</p></div><div className="space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border-2 border-foreground bg-card px-5 shadow-[3px_3px_0_var(--foreground)]"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm font-bold text-foreground [&::-webkit-details-marker]:hidden"><span>{question}</span><ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" /></summary><p className="pb-5 text-sm leading-7 text-muted-foreground">{answer}</p></details>)}</div></div></section>

      <footer className="border-t-2 border-foreground/90 bg-foreground text-background"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><div><p className="font-black">波场能量购买与租赁</p><p className="mt-1 text-xs text-background/65">按套餐转入 TRX · 到账后 1 小时内完成 USDT 转账</p></div><Button type="button" onClick={() => window.open(telegramUrl, "_blank", "noopener,noreferrer")} className="gap-2 rounded-lg border-2 border-background bg-primary font-bold text-primary-foreground hover:bg-primary/90">联系 Telegram 客服 <ExternalLink size={15} /></Button></div></footer>
    </main>
  );
}

function StepBadge({ number, title }: { number: string; title: string }) {
  return <div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-full bg-foreground text-sm font-black text-background">{number}</span><h2 className="text-lg font-black text-foreground sm:text-xl">{title}</h2></div>;
}

function TrustItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-lg border-2 border-foreground bg-primary text-primary-foreground">{icon}</span><div><p className="text-sm font-black text-foreground">{title}</p><p className="mt-1 text-xs text-muted-foreground">{text}</p></div></div>;
}
