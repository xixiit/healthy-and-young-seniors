import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact | Healthy and Young Seniors",
  description: "Get in touch with Healthy and Young Seniors.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact"
        description="We'd love to hear from you. Reach out and follow along on social media."
      />
      <section className="py-16 text-center">
        <div className="mx-auto flex max-w-[500px] flex-col items-center gap-6 px-6">
          <p className="font-sans text-base leading-6 text-foreground">
            The best way to reach Healthy and Young Seniors is through our
            social channels below.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=100091460731653"
              aria-label="Facebook Social Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="size-8 text-brand-blue" />
            </a>
            <a
              href="https://www.instagram.com/healthyyoungseniors?igshid=ZDdkNTZiNTM="
              aria-label="Instagram Social Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="size-8 text-brand-blue" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
