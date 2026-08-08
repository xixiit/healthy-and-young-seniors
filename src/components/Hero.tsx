import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-golf-cart-couple.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/[0.29]" />
      </div>
      <div className="relative mx-auto max-w-[900px] px-6 py-12 text-center md:py-20 lg:py-32">
        <p className="text-base leading-5 font-normal tracking-[2px] text-[#f7f7f7] uppercase">
          Welcome to
        </p>
        <h1 className="mb-4 font-heading text-3xl leading-tight font-normal tracking-[1px] text-[#f7f7f7] uppercase md:text-4xl lg:text-[54px] lg:leading-[64.8px]">
          Healthy and Young Seniors
        </h1>
        <p className="mx-auto max-w-[660px] text-base leading-6 font-normal text-[#f7f7f7]">
          Our mission is to help seniors be at their best health by inspiring
          a healthy lifestyle.
        </p>
      </div>
    </section>
  );
}
