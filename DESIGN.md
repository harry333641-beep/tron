---
name: "波场能量购买与租赁"
description: "面向中文用户的波场 Energy 套餐购买与 TRX 转入式能量租赁入口。"
colors:
  background: "oklch(0.985 0.014 92)"
  foreground: "oklch(0.16 0.012 45)"
  card: "oklch(0.995 0.01 92)"
  card-foreground: "oklch(0.16 0.012 45)"
  popover: "oklch(0.995 0.01 92)"
  popover-foreground: "oklch(0.16 0.012 45)"
  primary: "oklch(0.84 0.17 92)"
  primary-foreground: "oklch(0.16 0.012 45)"
  secondary: "oklch(0.94 0.025 88)"
  secondary-foreground: "oklch(0.2 0.015 45)"
  muted: "oklch(0.94 0.025 88)"
  muted-foreground: "oklch(0.46 0.025 45)"
  accent: "oklch(0.92 0.08 88)"
  accent-foreground: "oklch(0.16 0.012 45)"
  destructive: "oklch(0.56 0.2 28)"
  border: "oklch(0.16 0.012 45)"
  input: "oklch(0.76 0.025 88)"
  ring: "oklch(0.56 0.2 28)"
  sidebar-ring: "oklch(0.56 0.2 28)"
  sidebar-border: "oklch(0.16 0.012 45)"
  sidebar-accent: "oklch(0.92 0.08 88)"
  sidebar-primary-foreground: "oklch(0.16 0.012 45)"
  sidebar-primary: "oklch(0.84 0.17 92)"
  sidebar-foreground: "oklch(0.16 0.012 45)"
typography:
  display:
    fontFamily: "heavy system sans with compact tracking"
  body:
    fontFamily: "system sans with generous line-height"
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

米白收据纸上的能量柜台：黑色粗描边、黄色闪电标识、红色业务重点和可复制的深色收款地址模块。

## Colors

| Token | Value |
| background | warm paper cream |
| surface | soft cream cards |
| text / muted | near-black / warm gray |
| border | near-black heavy outline |
| primary | signal yellow |
| accent | service red |
| success / warning / danger | mint confirmation / yellow warning / red emphasis |

Declared in `globals.css` as `--color-*` and mirrored in the frontmatter. Use the token, never a raw hex.

## Typography

- Headings: heavy system sans with compact tracking
- Body: system sans with generous line-height
- Data labels: compact monospace for wallet addresses and transaction values

- Display: `heavy system sans with compact tracking`
- Body: `system sans with generous line-height`
- Mono: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`

## Layout

- Radius / shadow / spacing rhythm: 12–20px rounded cards, 2px dark outlines, hard offset shadows for key controls.
- Shared components: Button, native disclosure FAQ, bordered package cards, copy-address panel.

## Shapes

Radii: `sm` calc(var(--radius) * 0.6), `md` calc(var(--radius) * 0.8), `lg` 0.75rem, `xl` calc(var(--radius) * 1.4), `2xl` calc(var(--radius) * 1.8), `3xl` calc(var(--radius) * 2.2), `4xl` calc(var(--radius) * 2.6)

## Do's and Don'ts

- Voice: 中文、步骤化、直接说明动作；不要求用户提供地址，不索要私钥，明确到账与有效期。

- Do load faces through Fontsource, not `next/font/google`.
- Don't introduce a colour or radius that isn't a token above.
- Don't use gradient text, or a purple/violet gradient as the brand signal.
- Don't use bounce or elastic easing; real objects decelerate smoothly.
