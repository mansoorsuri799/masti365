import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.domain} — how we handle analytics and contact emails.`,
  alternates: { canonical: absoluteUrl(SITE.routes.privacy) },
};

export default function PrivacyPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 space-y-6 text-gray-300 leading-relaxed">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />
      <h1 className="text-4xl font-bold text-accent">Privacy Policy</h1>
      <p>Last updated: 4 August 2026</p>
      <p>
        {SITE.domain} provides informational guides about the Masti 365 Android APK. We aim to collect as little personal data as possible.
      </p>
      <h2 className="text-2xl font-semibold text-white">Information we may process</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Email and message content if you contact {SITE.email}</li>
        <li>Basic analytics such as page views if Google Analytics is enabled</li>
        <li>Standard server logs (IP, user agent) for security</li>
      </ul>
      <h2 className="text-2xl font-semibold text-white">How we use information</h2>
      <p>We use contact emails to reply to support requests and analytics to improve page performance. We do not sell personal information.</p>
      <h2 className="text-2xl font-semibold text-white">Third parties</h2>
      <p>
        The Masti 365 mobile app is separate from this website. Payments you make inside the app are processed by the app and wallet providers (for example JazzCash or EasyPaisa), not by {SITE.domain}.
      </p>
      <h2 className="text-2xl font-semibold text-white">Contact</h2>
      <p>
        Privacy questions:{" "}
        <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
          {SITE.email}
        </a>
      </p>
    </article>
  );
}
