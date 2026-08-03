import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Masti 365 Support",
  description: `Contact the ${SITE.name} guide team at ${SITE.email} for help with download pages, privacy, or content questions.`,
  alternates: { canonical: absoluteUrl(SITE.routes.contact) },
};

export default function Contact() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact Us" }]} />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-lg text-gray-400">We are here to help with site and guide questions.</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8 space-y-6 text-gray-300 leading-relaxed">
          <p>
            Use this page if you need help with content on {SITE.domain} — including{" "}
            <Link href="/" className="text-accent hover:underline font-semibold">
              Masti 365
            </Link>{" "}
            download guides,{" "}
            <Link href={SITE.routes.about} className="text-accent hover:underline font-semibold">
              About Us
            </Link>
            , or the{" "}
            <Link href={SITE.routes.privacy} className="text-accent hover:underline font-semibold">
              privacy policy
            </Link>
            .
          </p>

          <div className="border-2 border-accent/40 rounded-xl p-6 text-center">
            <p className="text-sm text-gray-400 mb-2">Email</p>
            <a href={`mailto:${SITE.email}`} className="text-accent text-xl font-semibold hover:underline">
              {SITE.email}
            </a>
          </div>

          <p>
            For in-app wallet tickets (deposits, withdrawals, bonuses), use the live chat inside the Masti 365 Android app — agents there can see your account ID directly.
          </p>
        </div>
      </div>
    </div>
  );
}
