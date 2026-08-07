# Page Topology — healthyandyoungseniors.godaddysites.com

Single-page site (GoDaddy Website Builder / "WSB" platform, blog homepage). One route: `/`.

## Excluded from clone (not real site content)
- **GoDaddy promo banner** (top strip: "Try Airo AI Builder | Start for free") — third-party platform ad injected by GoDaddy on free-tier sites, not part of the site owner's design.
- **Shoutbox chat widget** (bottom-right bubble, iframe) — third-party live-chat plugin, no equivalent needed for a static clone.
- **"Account" / "Sign In" / "My Account"** items in the mobile drawer — GoDaddy member-account system; out of scope per project defaults (no auth).

## Sections, top to bottom

1. **Header / Nav** — sticky? NO (confirmed static, not position:sticky — scrolls away with page). Black bg `#161616`. Site title "Healthy and Young Seniors" (serif) centered, nav links row (desktop) / hamburger drawer (mobile, breakpoint ~992px). Small user/account icon top-right (desktop only, decorative — not functional in clone).
2. **Hero** — full-bleed background photo (senior couple, golf cart) with dark overlay (29% black), overlaid text: "WELCOME TO" (small caps) / "HEALTHY AND YOUNG SENIORS" (large serif h1) / mission paragraph. Flows immediately under nav (both live inside the same black-background image container).
3. **Quote / Motivation banner** — solid blue `#53a5e4` background, two-column: left = quote heading + divider + subtext, right = photo (people walking on rocks with dog).
4. **Blog section** — full-bleed background photo (group of seniors) with dark overlay (24% black). "MY BLOG" heading, category filter nav (pill-style text links), horizontal card carousel (click arrows, left/right), pagination indicator on mobile ("1 / N"). Cards: image, date, title, "Continue Reading" link.
5. **Social media** — black bg, "SOCIAL MEDIA" label (blue, small caps) + Facebook/Instagram circular icon links.
6. **Footer** — black bg (same section as Social media, contiguous), copyright line, "Powered by GoDaddy" (replace/omit attribution per clone), footer link list (Current + Upcoming Events, Products We Love!, weekly motivation).

## Layout
- No CSS grid; content is centered with a max-width container (~1112–1160px content width inside 1440px viewport, i.e. ample side gutters).
- No sticky elements, no scroll-snap, no parallax, no smooth-scroll library detected.
- No dark/light theme toggle.
- z-index layers: mobile drawer overlay > chat widget > page content (drawer and chat both excluded/out of scope except drawer, which we replicate).

## Interaction model per section
- Header nav: **click**-driven mobile drawer toggle (hamburger). Desktop nav links are plain anchors, no dropdowns.
- Hero: static, no animation observed on load or scroll.
- Quote banner: static.
- Blog carousel: **click**-driven (left/right arrow buttons shift by one card). NOT scroll-driven — verified by scrolling past it with no auto-change, then confirmed arrows shift the visible card window. Card count per view: 5 @ desktop (1440px), 3 @ tablet (768px), 1 @ mobile (390px) with "X / N" pager text.
- Social/Footer: static, plain links.

## Responsive breakpoints (observed)
- Nav collapses from horizontal links to hamburger+drawer somewhere between 768px and 1024px (drawer confirmed active at 768px, full nav confirmed active at 1024px). Treat **992px** as the breakpoint (standard WSB/Bootstrap-style lg breakpoint).
- Blog carousel visible-card count: 5 (≥1280px-ish) / 3 (tablet ~768px) / 1 (mobile ~390px). Use standard Tailwind breakpoints: `lg:` 5 cards, `md:` 3 cards, base 1 card.
- Hero/Quote/Blog sections stack their two-column content to single column below ~768px (quote banner image moves under text; hero text remains centered/full-width at all sizes since it was already single block).
