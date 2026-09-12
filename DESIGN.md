---
name: "workspace"
description: "Build a Chinese-language TRX energy rental (TRON能量租赁) showcase website for a beginner seller starting with manual order fulfillment. Pages/sections: 首页 hero explaining what TRX energy rental is and why it saves TRON fees (对比直接质押/燃烧TRX); 租赁价格表 (per-day energy packages, e.g. 32,000 / 65,000 / 131,000 energy tiers with daily prices in TRX, editable); 如何下单 section with step-by-step instructions (1. 联系客服/Telegram 2. 提供接收能量的钱包地址 3. 支付TRX 4. 1-2分钟内收到能量); 常见问题 FAQ (什么是能量, 为什么租赁比直接烧TRX便宜, 能量多久到账, 如何续租); 关于我们/信誉说明 (承诺1-2分钟到账, 7x12小时服务, Telegram客服按钮突出显示); 简单的下单表单 (钱包地址 + 所需能量档位 + 联系方式, 提交后提示去Telegram付款确认). Style: crypto/fintech look, dark theme with TRON red (#E50914-ish) or red/black accent, clean, trustworthy, mobile-responsive, Chinese copy."
typography:
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, \"Liberation Mono\", monospace"
rounded:
  sm: "calc(var(--radius) * 0.6)"
  md: "calc(var(--radius) * 0.8)"
  lg: "0.625rem"
  xl: "calc(var(--radius) * 1.4)"
  2xl: "calc(var(--radius) * 1.8)"
  3xl: "calc(var(--radius) * 2.2)"
  4xl: "calc(var(--radius) * 2.6)"
---

<!-- Generated from .project/DESIGN_SYSTEM.md + app/globals.css by the engine. Tokens above are normative and mirror the CSS; edit the CSS and DESIGN_SYSTEM.md, not this file. -->

## Overview

**No visual direction has been committed for workspace yet.** The project is still on the starter's placeholder palette — shadcn's default neutral, every colour zero-chroma — so it is deliberately NOT listed above as a token set to respect. Treat this project as greenfield: decide the world, then write the palette into `globals.css`, and this file will state it from the next turn onward.

## Colors

| Token | Value |

## Typography

- Headings:
- Body:

- Mono: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`

## Layout

- Radius / shadow / spacing rhythm:
- Shared components:

## Shapes

Radii: `sm` calc(var(--radius) * 0.6), `md` calc(var(--radius) * 0.8), `lg` 0.625rem, `xl` calc(var(--radius) * 1.4), `2xl` calc(var(--radius) * 1.8), `3xl` calc(var(--radius) * 2.2), `4xl` calc(var(--radius) * 2.6)

## Do's and Don'ts

- Do load faces through Fontsource, not `next/font/google`.
- Do write the direction's palette into `globals.css` as the token block; keep the token NAMES, replace the values.
- Don't use gradient text, or a purple/violet gradient as the brand signal.
- Don't use bounce or elastic easing; real objects decelerate smoothly.
