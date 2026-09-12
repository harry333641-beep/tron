<!-- OWNER: Design / Build · READERS: Build, Landing, SEO -->
# Design System

## Direction
深夜交易终端：深海蓝黑网格背景、半透明深色面板、蓝紫主操作、青色状态提示和红色 TRX 对比色。页面围绕一个兑换卡片组织，不使用米白纸张或粗黑偏移阴影。

## Palette
| Token | Value |
|-------|-------|
| background | deep navy black |
| surface | translucent midnight blue |
| text / muted | cool white / blue gray |
| border | low-contrast blue gray |
| primary | electric indigo blue |
| accent | cyan aqua |
| destructive | signal red for TRX and warnings |
| success / warning | cyan confirmation / red caution |

## Typography
- Headings: heavy system sans with tight tracking and compact line breaks.
- Body: system sans with quiet, high-contrast labels.
- Data labels: compact monospace for wallet addresses and transaction values.

## Tokens & primitives
- Radius / shadow / spacing rhythm: 10–18px rounded panels, thin blue borders, soft indigo glow around active controls.
- Shared components: Button, native disclosure FAQ, dark exchange card, package selector, copy-address row, status pills.
- Responsive rule: the main exchange card stays narrow and centered; supporting steps and FAQ stack below it on mobile.

## Voice & tone
中文、短句、像交易工具一样直接；不要求用户提供地址，不索要私钥，明确到账与有效期。

## Operational UI
- 页脚明确说明客服链接与收款地址由 Telegram 机器人维护。
- 购买页按钮始终从服务端配置读取客服链接与收款地址，不在浏览器端写死运营配置。
