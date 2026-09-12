<!-- Generated from .project/PROJECT.md by the engine — do not run `impeccable init`, which would interview a user who isn't here. Edit .project/PROJECT.md; this file is regenerated from it. -->
# 能量快租

**Platform:** Responsive web — Next.js, React, Tailwind. shadcn/ui and lucide are installed and available; the direction decides whether they fit or whether this surface needs its own vocabulary.
**Task mode:** Operate (pass as `--mode operate` to any script)

## What this is

面向中文用户的 TRON 能量按需租赁展示与人工下单入口。

## What it enables

让第一次接触 TRON 能量租赁的用户快速理解省费逻辑、选择套餐，并通过 Telegram 完成人工确认与付款。

## Primary user

需要进行 TRC-20 转账、希望降低 TRX 网络费用的个人用户和小型商家。

## What exists today

中文单页展示站，包含 TRON 能量租赁的费用说明与直接燃烧 TRX 的对比逻辑。 - 32,000 / 65,000 / 131,000 能量套餐与 1 天参考价格展示，可在页面数据中调整。 - 四步人工下单流程、钱包地址与联系方式表单、提交后的 Telegram 确认引导。 - FAQ、1–2 分钟到账说明、7×12 小时服务说明与多处 Telegram 客服入口。 - 深色红黑金融终端风格，适配手机与桌面宽度。

## Brand commitments & durable constraints

当前是人工履约展示站，不伪造自动付款、自动到账或链上结果。 - 价格为可编辑参考价，付款前必须由客服再次确认。 - 不索要私钥或助记词，不托管用户资产。 - 保持中文、直接、可信的业务语气与红黑视觉系统。

- **This project already HAS a committed visual world — do NOT offer a design picker.** `.project/DESIGN_SYSTEM.md` records a direction someone decided on, and the code, tokens and components are built around it. Read it, inherit it, and make the requested change inside it. Dealing six alternative worlds here offers to throw away a working design system nobody asked you to replace.
- **Tailoring is not redesigning.** "Make it about my business", new copy, a different logo, swapped imagery, a brand colour — all of that lands INSIDE the committed world. Change what was asked for and leave the direction alone.
- **The one exception is an explicit, whole-app redesign** — the user asking for a different look outright, not merely a change that happens to be large. Then the direction is open again and the picker applies. When they name the new direction themselves, that is the decision: pin it and build, still without a picker.
- The user's own words always outrank the roll. A direction, palette, face or reference they named is pinned; the roll only decides what they left open.
- Two review rounds is the budget, then ship and report open items honestly under the reviewer's own verdict — never announce a table with open findings as a pass.
- Web fonts load through Fontsource, never `next/font/google` — this sandbox has no Google egress, so the fetch hangs at compile and the preview renders blank.
- No AI-builder badge, watermark, or attribution anywhere in the product.
- Decisions recorded in `.project/` (ledger, DESIGN_SYSTEM.md) are commitments; contradict one only when the user asks.

## Positioning

面向中文用户的 TRON 能量按需租赁展示与人工下单入口。

## Operating Context

Responsive web, built unattended in one pass. Task mode: Operate.

## Evidence on Hand

中文单页展示站，包含 TRON 能量租赁的费用说明与直接燃烧 TRX 的对比逻辑。 - 32,000 / 65,000 / 131,000 能量套餐与 1 天参考价格展示，可在页面数据中调整。 - 四步人工下单流程、钱包地址与联系方式表单、提交后的 Telegram 确认引导。 - FAQ、1–2 分钟到账说明、7×12 小时服务说明与多处 Telegram 客服入口。 - 深色红黑金融终端风格，适配手机与桌面宽度。

## Product Principles

- Clarity of the task beats decoration; the interface earns attention only where the product does.
- Say what is true: no invented prices, customers, benchmarks or capabilities the product does not have.
