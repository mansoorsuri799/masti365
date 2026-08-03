import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${SITE.domain} guides about Masti 365 APK downloads and real-money play.`,
  alternates: { canonical: absoluteUrl(SITE.routes.disclaimer) },
};

export default function DisclaimerPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 space-y-6 text-gray-300 leading-relaxed">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Disclaimer" }]} />
      <h1 className="text-4xl font-bold text-accent">Disclaimer</h1>
      <p>
        Content on {SITE.domain} is for general information about downloading and using Masti 365 on Android. It is not financial, legal, or gambling advice.
      </p>
      <p>
        Real-money games involve risk of loss. Play only with money you can afford to lose and follow the laws that apply where you live. Bonus percentages, withdrawal times, and payment options can change inside the live app without notice on this site.
      </p>
      <p>
        We are not responsible for third-party APK mirrors, social-media download links, or losses from incorrect wallet transfers. Prefer the download flows documented on this domain and verify every payment detail yourself.
      </p>
      <p>
        Questions:{" "}
        <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
          {SITE.email}
        </a>
      </p>
    </article>
  );
}
