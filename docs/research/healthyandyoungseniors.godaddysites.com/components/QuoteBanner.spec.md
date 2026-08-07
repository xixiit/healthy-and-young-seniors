# QuoteBanner Specification

## Overview
- **Target file:** `src/components/QuoteBanner.tsx`
- **Screenshot:** `docs/design-references/healthyandyoungseniors.godaddysites.com/desktop-full.png` (blue section, ~y=1050 to y=1483)
- **Interaction model:** static

## DOM Structure
```
<section className="bg-brand-blue py-10">
  <div className="mx-auto max-w-[1160px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <div>
      <h3>"Add Years to your life and life to your years!"🌲</h3>
      <hr />
      <p>Every day is a beginning for new growth.</p>
    </div>
    <img src="/images/quote-beach-walk.jpg" alt="" className="w-full h-auto" />
  </div>
</section>
```

## Computed Styles

### Section container
- backgroundColor: rgb(83,165,228) → `#53a5e4`
- padding: 40px 0 (vertical)
- content max-width: ~1160px, two-column grid on desktop, single column stacked on mobile

### Quote heading (h3)
- fontFamily: Adamina, serif
- fontSize: 28px
- fontWeight: 400
- lineHeight: 35px
- letterSpacing: 1px
- color: rgb(0,0,0) → `#000000`
- textTransform: uppercase
- margin-bottom: 24px (includes the divider spacing)
- Contains a trailing 🌲 emoji (literal, not an icon)

### Divider
- Simple `<hr>` / thin horizontal rule, short width (~48px per screenshot), dark/black, positioned left-aligned under the heading, margin ~16-24px vertical.

### Subtext paragraph
- fontFamily: Poppins, arial, sans-serif
- fontSize: 16px
- fontWeight: 400
- lineHeight: 24px
- color: rgb(0,0,0) → `#000000`

### Image (right column)
- src: `/images/quote-beach-walk.jpg` (real `<img>`, not CSS background — natural 1160×772)
- Displayed at ~530px width on desktop (per screenshot), `object-fit: cover`, no border-radius, no shadow.

## States & Behaviors
N/A — static section.

## Assets
- `/images/quote-beach-walk.jpg` (downloaded)

## Text Content (verbatim)
- Heading: `"Add Years to your life and life to your years!"🌲`
- Subtext: "Every day is a beginning for new growth."

## Responsive Behavior
- **Desktop (1440px):** two columns, text left / image right, vertically centered, image ~530px wide.
- **Tablet (768px):** per tablet screenshot, still shows image at right at reduced width — keep two-column grid down to `md:`, only stack below `md`.
- **Mobile (390px):** stacks to single column — heading/divider/subtext first, image below, both full width minus 24px gutters, image height auto (maintain aspect ratio).
