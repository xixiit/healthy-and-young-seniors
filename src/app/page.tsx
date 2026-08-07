import { Hero } from "@/components/Hero";
import { QuoteBanner } from "@/components/QuoteBanner";
import { BlogSection } from "@/components/BlogSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuoteBanner />
      <BlogSection />
    </main>
  );
}
