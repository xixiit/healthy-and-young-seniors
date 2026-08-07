# Behaviors — healthyandyoungseniors.godaddysites.com

## Scroll sweep
- No header shrink/appearance change on scroll (header is not sticky; it scrolls away normally).
- No elements animate into view on scroll (no fade-up/stagger observed).
- No scroll-snap containers.
- No parallax layers.
- No smooth-scroll library (native scroll behavior).

## Click sweep
- **Hamburger icon** (mobile/tablet, <992px): opens a left-aligned slide-in drawer (~85% viewport width, light gray `#f2f2f2`-ish bg, black text) with a close "×" top-right. Contains vertical nav link list (Home bold/underlined as active state, others regular weight, all uppercase letter-spaced). Below links: "Account" divider label (small, gray) then "Sign In" / "My Account" — these are GoDaddy member-account links, excluded from clone scope (no auth).
- **Blog carousel arrows** (left `‹` / right `›`, white icon, positioned at vertical-center of card row, semi-transparent hit area): clicking shifts the visible card window by one card. Cards appear to loop/wrap (DOM shows first few post entries duplicated at the end of the list — a clone-buffer pattern typical of infinite carousels).
- **Category filter links** ("All Posts", "Facts That Can Save You Money", "Fun Facts", "HAYS: Healthy Choices", "Interview Exclusives", "Products We L♡ve"): navigate to `?blogcategory=...` filtered view (server-rendered, not a client-side filter). For the clone, implement as simple filter pills that filter the local post array client-side (functional equivalent, mock data).
- **"Continue Reading"** on each card: links to a full blog post page (`/f/<slug>`). Out of scope to build individual post pages — link can be inert or point to `#` in the clone (real backend/CMS is out of scope per project defaults).

## Hover sweep
- Nav links: no visible color transition captured (links already light gray/white on black; standard browser default, no custom hover CSS detected beyond the active-state underline on the current page's nav item).
- Blog cards: no hover elevation/scale observed in static extraction (GoDaddy WSB cards are largely static; treat as flat, no hover lift, to match source fidelity — a subtle `hover:opacity` or `hover:shadow` is acceptable minimal polish but not required for pixel match).
- "Continue Reading" / footer links: standard blue link color `rgb(83,165,228)` / `#53a5e4`, matches the brand blue used elsewhere.

## Responsive sweep (1440 / 768 / 390)
- **1440px (desktop):** Full horizontal nav, 5 blog cards visible in carousel, quote banner two-column (text left, image right).
- **768px (tablet):** Nav collapses to hamburger + drawer. Blog carousel shows 3 cards. Quote banner remains two-column but narrower (image still to the right, per screenshot) — confirm at build time; fall back to stacking if content overflows.
- **390px (mobile):** Hamburger + drawer (full nav list, drawer nearly full width). Blog carousel shows 1 card with "1 / N" pager text below the card. Quote banner stacks: heading/divider/subtext on top, image below, full width.
- Breakpoint for nav collapse: ~992px (Tailwind `lg`).

## No time-driven behavior
- No auto-playing carousel — the blog carousel only advances on click.
- No countdown timers, live data, or cycling content detected.
