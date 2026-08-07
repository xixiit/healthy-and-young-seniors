import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Current + Upcoming Events | Healthy and Young Seniors",
  description: "Current and upcoming events from Healthy and Young Seniors.",
};

export default function EventsPage() {
  return (
    <main>
      <PageHeader
        title="Current + Upcoming Events"
        description="No events are scheduled at this time. Check back soon, or follow us on social media for the latest updates."
      />
    </main>
  );
}
