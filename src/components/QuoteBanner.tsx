import Image from "next/image"

interface QuoteBannerProps {
  /** Set when this is the first prominent image on the page (e.g. /about),
   * so Next.js loads it eagerly instead of flagging it as an unmarked LCP. */
  priority?: boolean;
}

export function QuoteBanner({ priority }: QuoteBannerProps = {}) {
  return (
    <section id="about" className="bg-brand-blue py-10">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-[28px] font-normal uppercase leading-[35px] tracking-[1px] text-black">
            &ldquo;Add Years to your life and life to your years!&rdquo;🌲
          </h2>
          <hr className="my-4 w-12 border-t border-black" />
          <p className="font-sans text-base font-normal leading-6 text-black">
            Every day is a beginning for new growth.
          </p>
        </div>
        <Image
          src="/images/quote-beach-walk.jpg"
          alt=""
          width={1160}
          height={772}
          priority={priority}
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  )
}
