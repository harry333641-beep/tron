<!-- OWNER: Design / Build · READERS: Build, Landing, SEO -->
# Design System

## Direction
米白收据纸上的能量柜台：页面像一张可操作的业务单据，选择卡、深色收款地址模块和红色业务重点组成清晰的购买路径。

## Palette
| Token | Value |
|-------|-------|
| background | warm paper cream |
| surface | soft cream cards |
| text / muted | near-black / warm gray |
| border | near-black heavy outline |
| primary | signal yellow |
| accent | service red |
| success / warning / danger | mint confirmation / yellow warning / red emphasis |

## Typography
- Headings: heavy system sans with compact tracking and oversized editorial breaks.
- Body: system sans with generous line-height.
- Data labels: compact monospace for wallet addresses and transaction values.

## Tokens & primitives
- Radius / shadow / spacing rhythm: 12–24px rounded cards, 2px dark outlines, hard offset shadows for key controls.
- Shared components: Button, native disclosure FAQ, bordered package cards, copy-address panel, numbered steps.
- Responsive rule: the desktop view uses a two-column purchase moment; mobile stacks the action path in order.

## Voice & tone
中文、步骤化、直接说明动作；不要求用户提供地址，不索要私钥，明确到账与有效期。

## Operational UI
- 页脚明确说明客服链接与收款地址由 Telegram 机器人维护。
- 购买页按钮始终从服务端配置读取客服链接与收款地址，不在浏览器端写死运营配置。
