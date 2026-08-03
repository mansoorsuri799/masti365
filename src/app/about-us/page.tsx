import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Masti 365 — Pakistani Earning Game Guide Site",
  description:
    "About masti365app.com.pk: independent guides for downloading Masti 365, JazzCash deposits, withdrawals, and safer play in Pakistan.",
  alternates: { canonical: absoluteUrl(SITE.routes.about) },
};

export default function AboutPage() {
  return (
    <article className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About Us" }]} />
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <Image
          src={SITE.logo}
          alt="About Masti 365"
          width={180}
          height={180}
          className="object-contain"
          priority
        />
        <div className="space-y-6 text-gray-300 leading-relaxed max-w-3xl">
          <h1 className="text-4xl font-bold text-white">
            About <span className="text-accent">Masti 365</span> on {SITE.domain}
          </h1>
          <p>
            We publish practical Android guides for players searching for Masti 365 APK information in Pakistan. Our focus is clear install steps, JazzCash/EasyPaisa wallet help, and honest notes about bonuses and risk.
          </p>
          <p>
            This site is an informational download and how-to hub. Game rules, offers, and payout timing are controlled inside the live app and can change. Always verify amounts and terms on your own device before depositing.
          </p>
          <p>
            Questions about our pages? Visit{" "}
            <Link href={SITE.routes.contact} className="text-accent hover:underline">
              Contact Us
            </Link>{" "}
            or email {SITE.email}.
          </p>
        </div>
      </div>
    </article>
  );
}
