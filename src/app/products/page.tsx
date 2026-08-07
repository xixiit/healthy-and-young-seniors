import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Products We L♡ve | Healthy and Young Seniors",
  description: "Our favorite finds for healthy, vibrant living.",
};

export default function ProductsPage() {
  const products = blogPosts.filter((post) =>
    post.categories.includes("Products We L♡ve")
  );

  return (
    <main>
      <PageHeader
        title="Products We L♡ve"
        description="Our favorite finds for healthy, vibrant living."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((post) => (
            <div key={post.slug} className="flex flex-col bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <p className="font-sans text-sm text-[#919191]">{post.date}</p>
                <h4 className="font-sans text-[22px] font-normal leading-[24.75px] tracking-[0.99px] text-[#1b1b1b]">
                  {post.title}
                </h4>
              </div>
            </div>
          ))}
          {products.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground">
              No products yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
