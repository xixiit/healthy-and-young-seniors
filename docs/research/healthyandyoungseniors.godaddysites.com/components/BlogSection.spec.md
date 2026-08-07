# BlogSection Specification

## Overview
- **Target file:** `src/components/BlogSection.tsx` (may create a small internal `BlogCard` sub-component in the same file — keep it simple, no need for a separate file)
- **Screenshot:** `docs/design-references/healthyandyoungseniors.godaddysites.com/blog-section-scrolled.png` (desktop), `docs/design-references/healthyandyoungseniors.godaddysites.com/tablet-full.png` (tablet, shows 3 cards), `docs/design-references/healthyandyoungseniors.godaddysites.com/mobile-full.png` (mobile, shows 1 card + pager)
- **Interaction model:** click-driven carousel (arrows shift visible card window by 1) + click-driven category filter (client-side array filter)

## Data source
Import `blogPosts` from `@/lib/blog-posts` (already created, 7 real posts with slug/date/title/image/categories). Category filter pills come from the fixed list below (not derived from data, to match source order exactly).

## DOM Structure
```
<section className="relative py-10">
  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0,0,0,.24), rgba(0,0,0,.24)), url(/images/blog-section-bg.jpg)"}} />
  <div className="relative mx-auto max-w-[1160px] px-6">
    <h2>My Blog</h2>
    <nav> {/* category pills */}
      <ul className="flex flex-wrap justify-center gap-6">
        <li><button>All Posts</button></li>
        <li><button>Facts That Can Save You Money</button></li>
        <li><button>Fun Facts</button></li>
        <li><button>HAYS: Healthy Choices</button></li>
        <li><button>Interview Exclusives</button></li>
        <li><button>Products We L♡ve</button></li>
      </ul>
    </nav>
    <div className="relative mt-14">
      <button aria-label="Previous"><ChevronLeft /></button>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300" style={{transform: `translateX(-${index * (100/visibleCount)}%)`}}>
          {filteredPosts.map(post => <BlogCard key={post.slug} post={post} />)}
        </div>
      </div>
      <button aria-label="Next"><ChevronRight /></button>
      <p className="lg:hidden text-center text-white mt-4">{index+1} / {filteredPosts.length}</p>
    </div>
  </div>
</section>
```

## Computed Styles

### Section container
- Background: `linear-gradient(rgba(0,0,0,0.24), rgba(0,0,0,0.24)), url(/images/blog-section-bg.jpg)`, bg-cover/center, 24% black scrim
- padding: 40px 0 vertical
- content max-width: ~1160px

### "My Blog" heading (h2)
- fontFamily: Adamina, serif; fontSize: 28px; fontWeight: 400; lineHeight: 35px; letterSpacing: 1px
- color: rgb(255,255,255) → white; textTransform: uppercase; textAlign: center
- margin-bottom: 56px

### Category pills (nav links/buttons)
- fontFamily: Poppins; fontSize: 16px (default) — "All Posts" active state fontWeight 600, others 400
- color: white; no background/border (plain text pills, active = bold, not a filled pill button)
- layout: horizontal flex row, centered, wraps on small screens, gap ~24-32px

### Blog card
- Fixed-width card, white background, no border-radius, no shadow (flat)
- Card image area: aspect ratio ~1:1 to 4:3 (per screenshot ~245×230), `background-image` with 24% black scrim OR plain `<img>` — implement as `<img>` with `object-cover` for simplicity + real image, no need for the scrim on cards (scrim barely visible on thumbnails, optional polish)
- Below image, white padding block (~16px) containing:
  - **Date** (p): fontFamily Poppins, fontSize ~14px, color muted gray `#919191`
  - **Title** (h4): fontFamily Poppins, fontSize 22px, fontWeight 400, lineHeight 24.75px, letterSpacing 0.99px, color `#1b1b1b`, 2-line clamp
  - **"Continue Reading"** (link/button): fontFamily Poppins, fontSize 16px, color `#53a5e4` (brand blue), no underline by default
- Card width: ~211-245px so that 5 fit across ~1160px container with gaps at desktop.

### Carousel arrows
- White chevron icons (`lucide-react` `ChevronLeft`/`ChevronRight`), positioned vertically centered at the left/right edge of the card row, no visible button background (transparent hit area), ~40px click target.

## States & Behaviors

### Category filter (click-driven)
- **Trigger:** click a category pill
- **Behavior:** filters `blogPosts` array client-side to posts whose `categories` includes the clicked category ("All Posts" shows all). Resets carousel index to 0 on filter change.
- **Active state:** clicked pill becomes fontWeight 600 (matches "All Posts" default active style in source), others revert to 400.

### Carousel (click-driven)
- **Trigger:** click left/right arrow button
- **State A → B:** `index` state increments/decrements by 1, clamped so the last card is fully visible (no overscroll past the end) — do NOT implement infinite loop/wrap (the source's apparent duplicate DOM entries are an implementation artifact, not a required UX feature for this clone).
- **Transition:** `transform: translateX(...)` with `transition-transform duration-300 ease-out` on the flex track.
- **Visible card count:** 5 at `lg:` (≥1024px), 3 at `md:` (≥768px), 1 below `md`.
- **Mobile pager:** below `lg`, show `"{index + 1} / {filteredPosts.length}"` text centered under the carousel, white text, small font.

## Assets
- 7 card images already downloaded to `public/images/blog/` (see `src/lib/blog-posts.ts` for exact paths).
- Section background: `/images/blog-section-bg.jpg`
- Icons: `lucide-react` `ChevronLeft`, `ChevronRight`

## Text Content (verbatim)
- Heading: "My Blog"
- Category pills: All Posts, Facts That Can Save You Money, Fun Facts, HAYS: Healthy Choices, Interview Exclusives, Products We L♡ve
- Post dates/titles: see `src/lib/blog-posts.ts` (verbatim from live site)
- Card CTA: "Continue Reading" (link — since individual post pages are out of scope, make it a visually-styled `<span>` or `#`-href link, not a real route)

## Responsive Behavior
- **Desktop (1440px):** 5 cards visible, arrows visible, no pager text.
- **Tablet (768px):** 3 cards visible.
- **Mobile (390px):** 1 card visible, pager text shown below carousel ("{n} / {total}").
- **Breakpoints:** Tailwind `md:` (768px) → 3 cards, `lg:` (1024px) → 5 cards, base → 1 card.
