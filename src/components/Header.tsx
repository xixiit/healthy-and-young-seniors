"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types/blog";

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/#blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Current + Upcoming Events", href: "/events" },
  { label: "Products We Love!", href: "/products" },
];

export function Header() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => setIsDrawerOpen(false);
  const isActive = (href: string) => href === pathname;

  return (
    <header className="bg-brand-black">
      <div className="mx-auto max-w-[1160px] px-6 py-8">
        <nav className="flex items-center justify-between lg:block">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden text-[#e2e2e2]"
            aria-label="Toggle navigation"
          >
            <Menu className="h-6 w-6" />
          </button>

          <Link href="/" prefetch={false} className="block text-center">
            <h3 className="font-[family-name:var(--font-libre-baskerville)] text-[37px] font-normal leading-[37px] tracking-[1px] text-[#e2e2e2]">
              Healthy and Young Seniors
            </h3>
          </Link>

          <nav className="hidden lg:flex justify-center gap-8 mt-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                prefetch={false}
                className={cn(
                  "font-sans text-[14px] font-normal leading-[24px] tracking-[3px] uppercase text-[#e2e2e2]",
                  isActive(link.href) && "border-b border-[#5e5e5e] pb-1"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </nav>
      </div>

      {/* Mobile drawer backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-out lg:hidden",
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 h-full w-[85%] max-w-[360px] bg-[#f2f2f2] transition-transform duration-300 ease-out lg:hidden",
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="flex justify-end px-6 pt-6">
          <button
            type="button"
            onClick={closeDrawer}
            className="text-black"
            aria-label="Close navigation"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col items-start gap-5 px-6 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={false}
              onClick={closeDrawer}
              className={cn(
                "font-sans text-[14px] leading-[24px] tracking-[3px] uppercase text-black",
                isActive(link.href) ? "font-semibold" : "font-normal"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t border-black/10 px-6 pt-6">
          <span className="text-xs text-gray-400">Account</span>
          <div className="mt-3">
            <Link
              href="#"
              prefetch={false}
              onClick={closeDrawer}
              className="font-sans text-[14px] font-normal leading-[24px] tracking-[3px] uppercase text-gray-400 pointer-events-none"
              aria-disabled="true"
              tabIndex={-1}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
