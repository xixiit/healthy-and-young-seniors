import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { QuoteBanner } from "@/components/QuoteBanner";

export const metadata: Metadata = {
  title: "About | Healthy and Young Seniors",
  description:
    "Our mission is to help seniors be at their best health by inspiring a healthy lifestyle.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About Us"
        description="Our mission is to help seniors be at their best health by inspiring a healthy lifestyle."
      />
      <QuoteBanner />
    </main>
  );
}
