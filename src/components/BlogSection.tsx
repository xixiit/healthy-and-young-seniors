"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { blogPosts } from "@/lib/blog-posts";
import type { BlogPost, BlogCategory } from "@/types/blog";

type CategoryFilter = "All Posts" | BlogCategory;

const CATEGORIES: CategoryFilter[] = [
  "All Posts",
  "Facts That Can Save You Money",
  "Fun Facts",
  "HAYS: Healthy Choices",
  "Interview Exclusives",
  "Products We L♡ve",
];

function getVisibleCount(width: number): number {
  if (width >= 1024) return 5;
  if (width >= 768) return 3;
  return 1;
}

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All Posts");
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    function handleResize() {
      setVisibleCount(getVisibleCount(window.innerWidth));
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredPosts: BlogPost[] =
    activeCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.categories.includes(activeCategory as BlogCategory));

  const maxIndex = Math.max(0, filteredPosts.length - visibleCount);
  // Derived (not stored) so resizing or filtering never leaves index out of range,
  // without needing to sync state from an effect.
  const clampedIndex = Math.min(index, maxIndex);

  function handleCategoryClick(category: CategoryFilter) {
    setActiveCategory(category);
    setIndex(0);
  }

  function handlePrev() {
    setIndex(Math.max(0, clampedIndex - 1));
  }

  function handleNext() {
    setIndex(Math.min(maxIndex, clampedIndex + 1));
  }

  const canGoPrev = clampedIndex > 0;
  const canGoNext = clampedIndex < maxIndex;

  return (
    <section id="blog" className="relative py-10">
      <div className="absolute inset-0">
        <Image
          src="/images/blog-section-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/[0.24]" />
      </div>
      <div className="relative mx-auto max-w-[1160px] px-6">
        <h2 className="mb-14 text-center font-heading text-[28px] font-normal uppercase leading-[35px] tracking-[1px] text-white">
          My Blog
        </h2>
        <nav>
          <ul className="flex flex-wrap justify-center gap-6">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  className={cn(
                    "font-sans text-base text-white transition-opacity hover:opacity-80",
                    activeCategory === category ? "font-semibold" : "font-normal"
                  )}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="relative mt-14">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={cn(
              "absolute left-0 top-1/2 z-10 -translate-y-1/2 p-2 text-white transition-opacity",
              !canGoPrev && "cursor-not-allowed opacity-30"
            )}
          >
            <ChevronLeft size={32} />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${clampedIndex * (100 / visibleCount)}%)` }}
            >
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} visibleCount={visibleCount} />
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Next slide"
            onClick={handleNext}
            disabled={!canGoNext}
            className={cn(
              "absolute right-0 top-1/2 z-10 -translate-y-1/2 p-2 text-white transition-opacity",
              !canGoNext && "cursor-not-allowed opacity-30"
            )}
          >
            <ChevronRight size={32} />
          </button>
          <p className="mt-4 text-center text-sm text-white lg:hidden">
            {filteredPosts.length === 0 ? 0 : clampedIndex + 1} / {filteredPosts.length}
          </p>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, visibleCount }: { post: BlogPost; visibleCount: number }) {
  return (
    <div className="flex-shrink-0 px-2" style={{ width: `${100 / visibleCount}%` }}>
      <div className="flex h-full flex-col bg-white">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <p className="font-sans text-sm text-[#919191]">{post.date}</p>
          <h4 className="font-sans text-[22px] font-normal leading-[24.75px] tracking-[0.99px] text-[#1b1b1b]">
            {post.title}
          </h4>
          <span className="cursor-pointer font-sans text-base text-brand-blue">
            Continue Reading
          </span>
        </div>
      </div>
    </div>
  );
}
