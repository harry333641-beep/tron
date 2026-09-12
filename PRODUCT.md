<!-- Generated from .project/PROJECT.md by the engine — do not run `impeccable init`, which would interview a user who isn't here. Edit .project/PROJECT.md; this file is regenerated from it. -->
# 波场能量购买与租赁

**Platform:** Responsive web — Next.js, React, Tailwind. shadcn/ui and lucide are installed and available; the direction decides whether they fit or whether this surface needs its own vocabulary.
**Task mode:** Operate (pass as `--mode operate` to any script)

## What this is

面向中文用户的波场 Energy 套餐购买与 TRX 转入式能量租赁入口，用深色交易终端完成选择、付款和到账后的转账。

## What it enables

让用户选择 65,000 或 131,000 Energy 套餐，将对应 TRX 转入固定收款地址，约 3 秒收到能量，并在 1 小时内完成 USDT TRC-20 转账。

## Primary user

需要进行 TRC-20 USDT 转账、希望减少 TRX 手续费的个人用户和小型商家。

## What exists today

深色交易终端风格的中文购买页：深海蓝黑背景、蓝紫主操作、青色状态信息、红色 TRX 强调。 - 主兑换卡清晰展示“你发送 TRX / 你收到 Energy”，支持 65,000 Energy / 2 TRX 与 131,000 Energy / 4 TRX 两档选择。 - 深色收款地址与一键复制，包含约 3 秒到账、到账后 1 小时有效的提示。 - “对方地址没有 USDT 时选择 131,000”的重要提醒。 - 三步购买说明、FAQ、Telegram 客服与安全边界说明。 - 客服链接与 TRON 收款地址存储在服务端，可由管理员 Telegram 机器人指令更新并立即同步到购买页。

## Brand commitments & durable constraints

用户不需要提供自己的钱包地址，只需向页面收款地址转入对应 TRX。 - 当前是人工履约展示站，不伪造自动付款、自动到账或链上结果。 - 不索要私钥或助记词，不托管用户资产。 - 收款地址与套餐价格上线前必须由业务方确认。

- **This project already HAS a committed visual world — do NOT offer a design picker.** `.project/DESIGN_SYSTEM.md` records a direction someone decided on, and the code, tokens and components are built around it. Read it, inherit it, and make the requested change inside it. Dealing six alternative worlds here offers to throw away a working design system nobody asked you to replace.
- **Tailoring is not redesigning.** "Make it about my business", new copy, a different logo, swapped imagery, a brand colour — all of that lands INSIDE the committed world. Change what was asked for and leave the direction alone.
- **The one exception is an explicit, whole-app redesign** — the user asking for a different look outright, not merely a change that happens to be large. Then the direction is open again and the picker applies. When they name the new direction themselves, that is the decision: pin it and build, still without a picker.
- The user's own words always outrank the roll. A direction, palette, face or reference they named is pinned; the roll only decides what they left open.
- Two review rounds is the budget, then ship and report open items honestly under the reviewer's own verdict — never announce a table with open findings as a pass.
- Web fonts load through Fontsource, never `next/font/google` — this sandbox has no Google egress, so the fetch hangs at compile and the preview renders blank.
- No AI-builder badge, watermark, or attribution anywhere in the product.
- Decisions recorded in `.project/` (ledger, DESIGN_SYSTEM.md) are commitments; contradict one only when the user asks.

## Positioning

面向中文用户的波场 Energy 套餐购买与 TRX 转入式能量租赁入口，用深色交易终端完成选择、付款和到账后的转账。

## Operating Context

Responsive web, built unattended in one pass. Task mode: Operate.

## Evidence on Hand

深色交易终端风格的中文购买页：深海蓝黑背景、蓝紫主操作、青色状态信息、红色 TRX 强调。 - 主兑换卡清晰展示“你发送 TRX / 你收到 Energy”，支持 65,000 Energy / 2 TRX 与 131,000 Energy / 4 TRX 两档选择。 - 深色收款地址与一键复制，包含约 3 秒到账、到账后 1 小时有效的提示。 - “对方地址没有 USDT 时选择 131,000”的重要提醒。 - 三步购买说明、FAQ、Telegram 客服与安全边界说明。 - 客服链接与 TRON 收款地址存储在服务端，可由管理员 Telegram 机器人指令更新并立即同步到购买页。

## Product Principles

- Clarity of the task beats decoration; the interface earns attention only where the product does.
- Say what is true: no invented prices, customers, benchmarks or capabilities the product does not have.
