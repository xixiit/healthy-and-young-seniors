# Design Tokens — healthyandyoungseniors.godaddysites.com

## Fonts (Google Fonts, confirmed via body classes `x-fonts-adamina x-fonts-poppins x-fonts-libre-baskerville`)
| Role | Family | Fallback | Used for |
|---|---|---|---|
| Display serif | **Adamina** | serif | Hero h1, quote h3, "My Blog" h2 |
| Body / UI | **Poppins** (weights 400, 600) | arial, sans-serif | nav links, paragraphs, card titles (h4), buttons, footer |
| Secondary serif | **Libre Baskerville** | Georgia, serif | Site title / logo heading (h3 in nav) |

## Colors
| Token | Value | Usage |
|---|---|---|
| brand blue | `#53a5e4` (rgb(83,165,228)) | Quote banner bg, "Social media" label, links (footer, "Continue Reading"), theme-color |
| near-black | `#161616` (rgb(22,22,22)) | Nav bg, Social/Footer bg |
| off-white heading | `#f7f7f7` (rgb(247,247,247)) | Hero h1 |
| light gray heading | `#e2e2e2` (rgb(226,226,226)) | Site title in nav, "WELCOME TO" eyebrow |
| muted gray | `#7f8080` (rgb(127,128,128)) | small eyebrow text |
| dark card text | `#1b1b1b` (rgb(27,27,27)) | blog card titles |
| card date gray | `#919191` approx (rgb(145,145,145)) | body/date text |
| footer copyright gray | `#a9a9a9` (rgb(169,169,169)) | copyright line |
| mobile drawer bg | `#f2f2f2` approx | mobile nav drawer |
| overlay black (hero) | rgba(0,0,0,0.29) | hero image scrim |
| overlay black (quote/blog/cards) | rgba(0,0,0,0.24) | blog section + card image scrims |

## Typography scale (computed)
| Element | font-size | weight | line-height | letter-spacing | transform |
|---|---|---|---|---|---|
| h1 (hero) | 54px | 400 | 64.8px | 1px | uppercase |
| h2 ("My Blog" / eyebrow) | 28px (My Blog) / 16px (eyebrow "Welcome to") | 400 | 35px / 20px | 1px / 2px | uppercase |
| h3 (site title / quote) | 37px (site title) / 28px (quote) | 400 | 37px / 35px | 1px | none / uppercase |
| h4 (card title) | 22px | 400 | 24.75px | 0.99px | none |
| p (body) | 16px | 400 (600 for some emphasized paragraphs) | 24px | normal | none |
| nav link | 14px | 400 | 24px | ~3px | uppercase |
| "All Posts" category link | 16px | 600 | normal | normal | none |
| copyright | 12px | 400 | 18px | ~1px | uppercase |

## Spacing
- Section vertical padding: `40px 0` (quote, blog, footer sections); nav padding `32px 0`.
- Content max-width: ~1112–1160px centered within full-bleed sections (1440px viewport → ~164px side gutters at desktop).

## Border radius / shadows
- No border-radius or box-shadow observed on cards, buttons, or containers (flat design throughout — GoDaddy WSB "Bay" or similar flat theme).

## Images (full-resolution source URLs)
| Image | URL | Natural size | Usage |
|---|---|---|---|
| Hero background | `https://img1.wsimg.com/isteam/stock/ea74cd9997758b598b2adbc7720d9b59ae037928da57a8130b43a8f4eac6791b/:/rs=w:1535,m` | ~1535w | Hero full-bleed bg, 29% black overlay |
| Quote banner photo | `https://img1.wsimg.com/isteam/stock/11041/:/cr=t:0%25,l:0%25,w:100%25,h:100%25` | 1160x772 | Quote section right-side image (real `<img>`, not bg) |
| Blog section background | `https://img1.wsimg.com/isteam/stock/86928/:/rs=w:1535,m` | ~1535w | Blog section full-bleed bg, 24% black overlay |
| Card: Why Bees Are Called Worker Bees | `https://img1.wsimg.com/isteam/stock/22306/:/rs=w:245` | thumb | Blog card bg |
| Card: Saving on Prescriptions | `https://img1.wsimg.com/isteam/stock/11399/:/rs=w:245` | thumb | Blog card bg |
| Card: A pristine vagina... | `https://img1.wsimg.com/isteam/ip/c6883304-bce4-4b99-88a8-6977ca5ced55/60228h-01-enus.png/:/rs=w:245` | thumb | Blog card bg |
| Card: Truth About Microplastics | `https://img1.wsimg.com/isteam/ip/c6883304-bce4-4b99-88a8-6977ca5ced55/turtle-plastic-sollution-1140x640-1.jpg/:/rs=w:245` | thumb | Blog card bg |
| Card: Interview Sean Lanier Holmes | `https://img1.wsimg.com/isteam/ip/c6883304-bce4-4b99-88a8-6977ca5ced55/20240617_135606.jpg/:/rs=w:245` | thumb | Blog card bg |
| Card: Interview 3 Hand Stephen | `https://img1.wsimg.com/isteam/ip/c6883304-bce4-4b99-88a8-6977ca5ced55/Stephen%20with%20Guitar%20Edited.jpg/:/rs=w:245` | thumb | Blog card bg |
| Card: Interview Ural Thomas | `https://img1.wsimg.com/isteam/ip/c6883304-bce4-4b99-88a8-6977ca5ced55/IMG_20231211_141735_673-01%20(1).jpeg/:/rs=w:245` | thumb | Blog card bg |
| Favicon source | `https://img1.wsimg.com/isteam/ip/static/pwa-app/logo-default.png` (multiple sizes via `/:/rs=w:N,h:N,m`) | up to 180x180 | favicon/apple-touch-icon — this is GoDaddy's generic placeholder logo, not a custom site logo |

Request `:/rs=w:1600,m` (or higher) on the stock/ URLs when downloading for full quality instead of the in-page-optimized sizes.

## Icons
- Facebook and Instagram social icons: simple circle-outline glyphs (white stroke on black bg), standard "social link" icon style — recreate as inline SVG (Lucide `Facebook`/`Instagram` icons are a close match) rather than extracting from the page (site doesn't expose inline `<svg>` for these; they render via a font/icon web component).
- Carousel arrows: simple chevron/caret paths (`<path>` inside inline `<svg>`), white fill — recreate as Lucide `ChevronLeft`/`ChevronRight`.
- Hamburger icon: 3-line hamburger, white/black depending on context — Lucide `Menu`.
- Close icon (drawer): Lucide `X`.

## Meta / SEO
- Title: "Healthy and Young Seniors"
- Description: "Our mission is to help seniors be at their best health by inspiring a healthy lifestyle."
- theme-color: `#53a5e4`
- OG image: `https://img1.wsimg.com/isteam/stock/ea74cd9997758b598b2adbc7720d9b59ae037928da57a8130b43a8f4eac6791b` (same as hero photo)
