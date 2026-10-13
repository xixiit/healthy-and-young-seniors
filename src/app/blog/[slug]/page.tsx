import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-posts";
import { getBlogContent } from "@/lib/blog-content";
import { toTitleCase } from "@/lib/utils";
import type { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: toTitleCase(post.title) };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = getBlogContent(slug);

  return (
    <main>
      {/* Hero banner */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <Image
            src="/images/blog-section-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/[0.24]" />
        </div>
        <div className="relative mx-auto max-w-[1160px] px-6">
          <h1 className="text-center font-heading text-[28px] font-normal uppercase leading-[35px] tracking-[1px] text-white">
            My Blog
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[860px] px-6 py-12">
        <Link
          href="/#blog"
          className="mb-8 inline-block font-sans text-base text-brand-blue hover:underline"
        >
          ← All Posts
        </Link>

        <h2 className="mb-4 font-heading text-[32px] font-normal uppercase leading-tight tracking-[1px] text-[#1b1b1b]">
          {post.title.toUpperCase()}
        </h2>

        <p className="mb-8 font-sans text-sm text-[#919191]">
          {post.date}
          {post.categories.length > 0 && (
            <> | {post.categories[0]}</>
          )}
        </p>

        <div className="relative mb-10 aspect-video w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 860px) 860px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          {content?.paragraphs.map((para: string, i: number) => (
            <p key={i} className="font-sans text-base leading-relaxed text-[#1b1b1b]">
              {para}
            </p>
          ))}
          {!content && (
            <p className="font-sans text-base text-[#919191]">
              Content coming soon.
            </p>
          )}
        </div>

        <div className="mt-12">
          <Link
            href="/#blog"
            className="font-sans text-base text-brand-blue hover:underline"
          >
            ← All Posts
          </Link>
        </div>
      </section>
    </main>
  );
}
