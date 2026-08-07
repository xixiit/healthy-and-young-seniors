# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Screenshot:** `docs/design-references/healthyandyoungseniors.godaddysites.com/desktop-full.png` (section right below header, ~y=250 to y=1050), `docs/design-references/healthyandyoungseniors.godaddysites.com/mobile-full.png`
- **Interaction model:** static (no scroll/hover/click behaviors)

## DOM Structure
```
<section className="relative w-full">
  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0,0,0,.29), rgba(0,0,0,.29)), url(/images/hero-golf-cart-couple.jpg)"}} />
  <div className="relative mx-auto max-w-[900px] px-6 py-32 text-center">
    <h2>Welcome to</h2>
    <h1>Healthy and Young Seniors</h1>
    <p>Our mission is to help seniors be at their best health by inspiring a healthy lifestyle.</p>
  </div>
</section>
```

## Computed Styles

### Background image container
- Image: `/images/hero-golf-cart-couple.jpg` (downloaded from stock/ea74cd99...)
- Overlay: `linear-gradient(rgba(0,0,0,0.29), rgba(0,0,0,0.29))` on top of the image (flat 29% black scrim, not a gradient fade)
- background-size: cover, background-position: center
- Section height: intrinsic to content padding (~800px tall at 1440px viewport per screenshot: from y≈250 to y≈1050)

### Eyebrow "Welcome to" (h2)
- fontFamily: Poppins, arial, sans-serif
- fontSize: 16px
- fontWeight: 400
- lineHeight: 20px
- letterSpacing: 2px
- color: rgb(247,247,247) → `#f7f7f7` (note: was measured on generic h2 selector — same as eyebrow style used elsewhere; visually it's small, semi-transparent white, all-caps per screenshot "WELCOME TO")
- textTransform: uppercase
- textAlign: center

### Main heading "Healthy and Young Seniors" (h1)
- fontFamily: Adamina, serif
- fontSize: 54px
- fontWeight: 400
- lineHeight: 64.8px
- letterSpacing: 1px
- color: rgb(247,247,247) → `#f7f7f7`
- textTransform: uppercase
- textAlign: center
- margin-bottom: 16px
- Wraps to 2 lines at ~900px content width ("HEALTHY AND" / "YOUNG SENIORS" per screenshot — actual wrap point depends on container width, let it wrap naturally)

### Mission paragraph
- fontFamily: Poppins, arial, sans-serif
- fontSize: 16px
- fontWeight: 400
- lineHeight: 24px
- color: rgb(247,247,247) → `#f7f7f7`
- textAlign: center
- max-width: ~660px, centered

## States & Behaviors
N/A — fully static section, no hover/scroll/click behavior observed.

## Assets
- Background: `/images/hero-golf-cart-couple.jpg` (already downloaded to `public/images/`)

## Text Content (verbatim)
- Eyebrow: "Welcome to"
- Heading: "Healthy and Young Seniors"
- Paragraph: "Our mission is to help seniors be at their best health by inspiring a healthy lifestyle."

## Responsive Behavior
- **Desktop (1440px):** as described, generous vertical padding (~128px top/bottom), content centered, max-width ~900px.
- **Tablet (768px):** same centered layout, reduce padding proportionally, heading font-size can scale down slightly (e.g. `text-4xl md:text-5xl lg:text-[54px]`) to avoid overflow — use Tailwind responsive text sizing, exact px only required at desktop per screenshot fidelity.
- **Mobile (390px):** heading wraps to 3 lines ("HEALTHY AND" / "YOUNG" / "SENIORS" per mobile screenshot), reduce heading to ~text-3xl/4xl, reduce section padding to ~48px vertical, paragraph max-width full minus 24px gutters.
