import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Gallery | Healthy and Young Seniors",
  description: "Moments and highlights from the Healthy and Young Seniors community.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHeader
        title="Gallery"
        description="Moments and highlights from the Healthy and Young Seniors community."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-[1160px] grid-cols-2 gap-4 px-6 sm:grid-cols-3 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="relative aspect-square overflow-hidden bg-muted"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
