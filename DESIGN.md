---
name: "波场能量购买与租赁"
description: "面向中文用户的波场 Energy 套餐购买与 TRX 转入式能量租赁入口，用深色交易终端完成选择、付款和到账后的转账。"
colors:
  background: "oklch(0.12 0.025 255)"
  foreground: "oklch(0.96 0.015 255)"
  card: "oklch(0.16 0.032 252)"
  card-foreground: "oklch(0.96 0.015 255)"
  popover: "oklch(0.17 0.035 252)"
  popover-foreground: "oklch(0.96 0.015 255)"
  primary: "oklch(0.68 0.2 262)"
  primary-foreground: "oklch(0.99 0.005 255)"
  secondary: "oklch(0.19 0.035 250)"
  secondary-foreground: "oklch(0.9 0.02 255)"
  muted: "oklch(0.18 0.03 252)"
  muted-foreground: "oklch(0.64 0.035 255)"
  accent: "oklch(0.76 0.16 195)"
  accent-foreground: "oklch(0.11 0.02 250)"
  destructive: "oklch(0.64 0.22 24)"
  border: "oklch(0.3 0.045 252)"
  input: "oklch(0.23 0.04 252)"
  ring: "oklch(0.68 0.2 262)"
  sidebar-ring: "oklch(0.68 0.2 262)"
  sidebar-border: "oklch(0.3 0.045 252)"
  sidebar-accent: "oklch(0.2 0.04 252)"
  sidebar-primary-foreground: "oklch(0.99 0.005 255)"
  sidebar-primary: "oklch(0.68 0.2 262)"
  sidebar-foreground: "oklch(0.96 0.015 255)"
typography:
  display:
    fontFamily: "heavy system sans with tight tracking and compact line breaks."
  body:
    fontFamily: "system sans with quiet, high-contrast labels."
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace"
rounded:
  sm: "calc(var(--radius) * 0.6)"
  md: "calc(var(--radius) * 0.8)"
  lg: "0.75rem"
  xl: "calc(var(--radius) * 1.4)"
  2xl: "calc(var(--radius) * 1.8)"
  3xl: "calc(var(--radius) * 2.2)"
  4xl: "calc(var(--radius) * 2.6)"
---

<!-- Generated from .project/DESIGN_SYSTEM.md + app/globals.css by the engine. Tokens above are normative and mirror the CSS; edit the CSS and DESIGN_SYSTEM.md, not this file. -->

## Overview

深夜交易终端：深海蓝黑网格背景、半透明深色面板、蓝紫主操作、青色状态提示和红色 TRX 对比色。页面围绕一个兑换卡片组织，不使用米白纸张或粗黑偏移阴影。

## Colors

| Token | Value |
| background | deep navy black |
| surface | translucent midnight blue |
| text / muted | cool white / blue gray |
| border | low-contrast blue gray |
| primary | electric indigo blue |
| accent | cyan aqua |
| destructive | signal red for TRX and warnings |
| success / warning | cyan confirmation / red caution |

Declared in `globals.css` as `--color-*` and mirrored in the frontmatter. Use the token, never a raw hex.

## Typography

- Headings: heavy system sans with tight tracking and compact line breaks.
- Body: system sans with quiet, high-contrast labels.
- Data labels: compact monospace for wallet addresses and transaction values.

- Display: `heavy system sans with tight tracking and compact line breaks.`
- Body: `system sans with quiet, high-contrast labels.`
- Mono: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`

## Layout

- Radius / shadow / spacing rhythm: 10–18px rounded panels, thin blue borders, soft indigo glow around active controls.
- Shared components: Button, native disclosure FAQ, dark exchange card, package selector, copy-address row, status pills.
- Responsive rule: the main exchange card stays narrow and centered; supporting steps and FAQ stack below it on mobile.

## Shapes

Radii: `sm` calc(var(--radius) * 0.6), `md` calc(var(--radius) * 0.8), `lg` 0.75rem, `xl` calc(var(--radius) * 1.4), `2xl` calc(var(--radius) * 1.8), `3xl` calc(var(--radius) * 2.2), `4xl` calc(var(--radius) * 2.6)

## Do's and Don'ts

- Voice: 中文、短句、像交易工具一样直接；不要求用户提供地址，不索要私钥，明确到账与有效期。

- Do load faces through Fontsource, not `next/font/google`.
- Don't introduce a colour or radius that isn't a token above.
- Don't use gradient text, or a purple/violet gradient as the brand signal.
- Don't use bounce or elastic easing; real objects decelerate smoothly.
