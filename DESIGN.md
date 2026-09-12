---
name: "能量快租"
description: "面向中文用户的 TRON 能量按需租赁展示与人工下单入口。"
typography:
  display:
    fontFamily: "modern system sans with tight tracking and strong weight"
  body:
    fontFamily: "system sans with open line-height"
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

**No visual direction has been committed for 能量快租 yet.** The project is still on the starter's placeholder palette — shadcn's default neutral, every colour zero-chroma — so it is deliberately NOT listed above as a token set to respect. Treat this project as greenfield: decide the world, then write the palette into `globals.css`, and this file will state it from the next turn onward.

## Colors

| Token | Value |
| background | near-black wine red |
| surface | dark charcoal red |
| text / muted | soft white / dusty rose gray |
| border | low-contrast red gray |
| primary | signal red |
| accent | ember red |
| success / warning / danger | signal red with muted supporting tones |

## Typography

- Headings: modern system sans with tight tracking and strong weight
- Body: system sans with open line-height
- Data labels: compact system monospace

- Display: `modern system sans with tight tracking and strong weight`
- Body: `system sans with open line-height`
- Mono: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`

## Layout

- Radius / shadow / spacing rhythm: 10px cards, 14px feature panels, restrained glow, generous vertical sections.
- Shared components: Button, Input, Label, card-like sections, native disclosure FAQ.

## Shapes

Radii: `sm` calc(var(--radius) * 0.6), `md` calc(var(--radius) * 0.8), `lg` 0.625rem, `xl` calc(var(--radius) * 1.4), `2xl` calc(var(--radius) * 1.8), `3xl` calc(var(--radius) * 2.2), `4xl` calc(var(--radius) * 2.6)

## Do's and Don'ts

- Voice: 中文、直接、可信，不夸大收益；先讲清楚费用逻辑，再告诉用户下一步。

- Do load faces through Fontsource, not `next/font/google`.
- Do write the direction's palette into `globals.css` as the token block; keep the token NAMES, replace the values.
- Don't use gradient text, or a purple/violet gradient as the brand signal.
- Don't use bounce or elastic easing; real objects decelerate smoothly.
