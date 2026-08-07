# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/healthyandyoungseniors.godaddysites.com/desktop-full.png` (top ~250px), `docs/design-references/healthyandyoungseniors.godaddysites.com/mobile-menu-open2.png` (mobile drawer open state)
- **Interaction model:** click-driven (mobile hamburger opens/closes a slide-in drawer)

## DOM Structure
```
<header className="bg-brand-black">
  <div className="mx-auto max-w-[1160px] px-6 py-8">
    <nav className="flex items-center justify-between lg:block">
      {/* mobile: hamburger button (visible <lg) */}
      <button className="lg:hidden" aria-label="Toggle navigation">/* Menu icon */</button>
      <Link href="/" className="block text-center">
        <h3>Healthy and Young Seniors</h3>
      </Link>
      {/* desktop nav row */}
      <nav className="hidden lg:flex justify-center gap-8 mt-6">
        {navLinks.map(...)}
      </nav>
    </nav>
  </div>
  {/* mobile drawer, conditionally rendered/animated */}
</header>
```

## Computed Styles (exact values from getComputedStyle)

### Header container
- backgroundColor: rgb(22, 22, 22) → `#161616`
- padding: 32px 0 (vertical); nav inner content padding 0
- width: full-bleed, content centered, effective content max-width ~1160px

### Site title (h3, "Healthy and Young Seniors")
- fontFamily: "Libre Baskerville", Georgia, serif
- fontSize: 37px
- fontWeight: 400
- lineHeight: 37px
- letterSpacing: 1px
- color: rgb(226, 226, 226) → `#e2e2e2`
- textAlign: center
- Wraps to 2 lines at desktop width ("Healthy and Young" / "Seniors") — it's a single heading that wraps naturally, not two elements.

### Nav links (Home, Blogs, About, Contact, Gallery, Current + Upcoming Events, Products We Love!)
- fontFamily: Poppins, arial, sans-serif
- fontSize: 14px
- fontWeight: 400
- lineHeight: 24px
- letterSpacing: ~3px (2.996px)
- color: rgb(226, 226, 226) → `#e2e2e2`
- textTransform: uppercase
- Active link ("Home" on `/`): 1px solid bottom border, color rgb(94,94,94) `#5e5e5e` — implement as `border-b border-[#5e5e5e] pb-1` on the active nav item only.
- Layout: horizontal flex row, centered, gap ~32px, wraps to 2 lines on desktop (7 items don't fit one line at 1440px — matches screenshot: "HOME BLOGS ABOUT CONTACT GALLERY CURRENT+UPCOMING EVENTS PRODUCTS WE LOVE!" all on one row at 1440px actually — verify against screenshot: yes, single row, ample width at 1440px, uses gap ~32-40px).

## States & Behaviors

### Mobile drawer (click-driven)
- **Trigger:** click hamburger button (visible below 992px breakpoint)
- **State A (closed):** drawer not rendered / translated off-screen left / hidden
- **State B (open):** drawer slides in from left, covers ~85% of viewport width, light gray background (`#f2f2f2`), full viewport height, contains:
  - Close "×" button top-right
  - Vertical list of the same nav links, left-aligned, black text, uppercase, letter-spaced. "Home" bold (active state), others font-weight 400.
  - Below nav links: thin divider, small gray "Account" label, then "Sign In" (out of scope — render as a disabled/inert link or omit entirely per no-auth scope; if included, style identically to nav links but muted).
- **Transition:** slide-in from left, ease transition ~250-300ms (exact timing not measurable from static extraction — use `transition-transform duration-300 ease-out`).
- **Implementation approach:** React `useState` open/closed boolean, conditionally render drawer with `translate-x` CSS transition, backdrop click also closes it.

### Responsive
- **Desktop (≥1024px / lg):** hamburger hidden, full horizontal nav link row visible, centered under site title.
- **Tablet (768px) / Mobile (390px):** hamburger visible top-left, nav link row hidden, drawer used instead.
- Breakpoint: 992px→ use Tailwind `lg:` (1024px) as closest standard breakpoint.

## Assets
- No icons to extract — use `lucide-react`: `Menu` (hamburger), `X` (close), `User` (decorative account icon, desktop only, top-right of header — small, muted, non-functional, optional to include).

## Text Content (verbatim)
- Site title: "Healthy and Young Seniors"
- Nav links: Home (`/`), Blogs (`/blogs`), About (`/about`), Contact (`/contact`), Gallery (`/gallery`), Current + Upcoming Events (`/current-+-upcoming-events`), Products We Love! (`/products-we-love`)
- All routes except `/` (home) can be inert `#` links or `Link` to nonexistent routes — this is a single-page clone; only `/` needs to render. Keep hrefs as `#` to avoid 404s, EXCEPT keep `/` for the home/logo link.

## Responsive Behavior
- **Desktop (1440px):** horizontal nav, all 7 links in one row, centered, no hamburger.
- **Tablet (768px):** hamburger + drawer.
- **Mobile (390px):** hamburger + drawer (drawer near full width).
- **Breakpoint:** ~992px, implement with Tailwind `lg:`.
