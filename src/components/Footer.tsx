import { FacebookIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-black">
      <section className="py-10 text-center">
        <h2 className="font-sans text-base font-normal uppercase tracking-[2px] leading-[22.4px] text-brand-blue">
          Social media
        </h2>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.facebook.com/profile.php?id=100091460731653"
            aria-label="Facebook Social Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="size-6 text-white" />
          </a>
          <a
            href="https://www.instagram.com/healthyyoungseniors?igshid=ZDdkNTZiNTM="
            aria-label="Instagram Social Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="size-6 text-white" />
          </a>
        </div>
      </section>
      <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-4 border-t border-white/10 px-6 py-8 text-center">
        <p className="font-sans text-xs font-normal uppercase tracking-[1px] leading-[18px] text-[#a9a9a9]">
          Copyright © 2025 Healthy and Young Seniors - All Rights Reserved.
        </p>
        <ul className="flex flex-wrap justify-center gap-6">
          <li>
            <a
              href="/events"
              className="font-sans text-base font-normal text-gray-300 transition-colors hover:text-white"
            >
              Current + Upcoming Events
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="font-sans text-base font-normal text-gray-300 transition-colors hover:text-white"
            >
              PRODUCTS WE LOVE!
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-sans text-base font-normal text-gray-300 transition-colors hover:text-white"
            >
              weekly motivation
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
