# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx` (includes both the "Social media" block and the copyright/links block — they share the same black background and are visually one contiguous region)
- **Screenshot:** `docs/design-references/healthyandyoungseniors.godaddysites.com/desktop-full.png` (bottom ~300px)
- **Interaction model:** static (plain links, no hover states captured beyond default link color)

## DOM Structure
```
<footer className="bg-brand-black">
  <section className="py-10 text-center">
    <h2>Social media</h2>
    <div className="flex justify-center gap-6 mt-6">
      <a href="https://www.facebook.com/profile.php?id=100091460731653" aria-label="Facebook Social Link"><Facebook /></a>
      <a href="https://www.instagram.com/healthyyoungseniors?igshid=ZDdkNTZiNTM=" aria-label="Instagram Social Link"><Instagram /></a>
    </div>
  </section>
  <div className="border-t border-white/10 py-8 px-6 flex flex-col items-center gap-4 text-center">
    <p>Copyright © 2025 Healthy and Young Seniors - All Rights Reserved.</p>
    <ul className="flex flex-wrap justify-center gap-6">
      <li><a href="#">Current + Upcoming Events</a></li>
      <li><a href="#">PRODUCTS WE LOVE!</a></li>
      <li><a href="#">weekly motivation</a></li>
    </ul>
  </div>
</footer>
```

## Computed Styles

### Footer background
- backgroundColor: rgb(22,22,22) → `#161616` (same as header)

### "Social media" heading (h2)
- fontFamily: Poppins; fontSize: 16px; fontWeight: 400; lineHeight: 22.4px; letterSpacing: 2px
- color: rgb(83,165,228) → `#53a5e4` (brand blue); textTransform: uppercase

### Social icon links
- Circular icons, white stroke/fill on transparent bg, ~24-32px size, `Facebook`/`Instagram` from `lucide-react` (close visual match — source uses a hosted icon font, not inline SVG).

### Copyright text
- fontFamily: Poppins; fontSize: 12px; fontWeight: 400; lineHeight: 18px; letterSpacing: ~1px
- color: rgb(169,169,169) → `#a9a9a9`; textTransform: uppercase

### Footer link list (Current + Upcoming Events / Products We Love! / weekly motivation)
- fontFamily: Poppins; fontSize: 16px; fontWeight: 400
- color: rgb(83,165,228) → `#53a5e4` (brand blue)
- Plain text links, horizontal row, centered, wraps on mobile.

### "Powered by GoDaddy" line
- Present on the source site next to copyright. **Omit or replace** — this is GoDaddy platform attribution, not part of the site owner's real content. Do not reproduce the GoDaddy link/logo; simplest is to drop this line entirely.

## States & Behaviors
N/A — static footer, no hover/scroll/click behavior beyond standard link navigation.

## Assets
- Icons: `lucide-react` `Facebook`, `Instagram`

## Text Content (verbatim)
- "Social media"
- "Copyright © 2025 Healthy and Young Seniors - All Rights Reserved."
- Footer links: "Current + Upcoming Events", "PRODUCTS WE LOVE!", "weekly motivation" (all `#` hrefs — target pages out of scope for this single-page clone)

## Responsive Behavior
- **Desktop (1440px):** as described, everything centered within max-width container.
- **Tablet/Mobile:** same centered stacked layout already works at all widths (content is naturally narrow/centered) — footer link list wraps to 2 lines on mobile if needed.
