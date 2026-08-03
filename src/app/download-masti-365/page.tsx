import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadButton from "@/components/DownloadButton";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download Masti 365 APK Free for Android | Latest 2026",
  description:
    "Download Masti 365 APK free for Android in Pakistan. Latest V3.3.4, 42MB, JazzCash & EasyPaisa ready. Safe install steps included.",
  alternates: { canonical: absoluteUrl(SITE.routes.download) },
  openGraph: {
    title: "Download Masti 365 APK Free for Android",
    description: "Free Masti 365 APK download with step-by-step Android install guide for Pakistan.",
    url: absoluteUrl(SITE.routes.download),
    images: [{ url: absoluteUrl(SITE.logo), width: 512, height: 512, alt: "Download Masti 365" }],
  },
};

export default function DownloadPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: SITE.name,
        operatingSystem: SITE.requiredOs,
        applicationCategory: "GameApplication",
        offers: { "@type": "Offer", price: SITE.price, priceCurrency: SITE.priceCurrency },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: SITE.ratingValue,
          bestRating: "5",
          ratingCount: SITE.ratingCount,
        },
        downloadUrl: SITE.downloadUrl,
        softwareVersion: SITE.version,
        fileSize: SITE.fileSize,
        image: absoluteUrl(SITE.logo),
      },
      {
        "@type": "HowTo",
        name: "Install Masti 365 APK on Android",
        step: [
          { "@type": "HowToStep", name: "Download APK", text: "Tap DOWNLOAD NOW on this page." },
          { "@type": "HowToStep", name: "Allow installs", text: "Enable unknown sources for your browser." },
          { "@type": "HowToStep", name: "Install", text: "Open the APK and confirm installation." },
          { "@type": "HowToStep", name: "Register", text: "Sign up with your mobile number and OTP." },
        ],
      },
    ],
  };

  return (
    <article className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Download Masti 365" },
        ]}
      />

      <section className="text-center mb-12" id="apk">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">Download </span>
          <span className="text-accent">Masti 365</span>
          <span className="text-white"> APK Free</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Get the latest <Link href="/" className="text-accent hover:underline">Masti 365</Link> Android APK from {SITE.domain}. The file is free, lightweight ({SITE.fileSize}), and ready for JazzCash and EasyPaisa wallets after registration.
        </p>
        <DownloadButton size="md" href={SITE.downloadUrl} />
        <p className="mt-4 text-sm text-gray-400">
          {SITE.ratingValue} ★★★★☆ ({SITE.ratingCountDisplay}) · Free · Android · Game · V{SITE.version}
        </p>
      </section>

      <div className="flex justify-center mb-12">
        <Image
          src={SITE.logo}
          alt="Masti 365 APK download icon"
          width={280}
          height={280}
          className="object-contain drop-shadow-2xl"
          priority
          sizes="280px"
        />
      </div>

      <section className="bg-secondary rounded-xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-accent mb-6">Download Information</h2>
        <table className="min-w-full divide-y divide-gray-800">
          <tbody className="divide-y divide-gray-800 text-white">
            {[
              ["App Name", SITE.name],
              ["Version", `V${SITE.version}`],
              ["Size", SITE.fileSize],
              ["OS", SITE.requiredOs],
              ["Updated", SITE.updateDate],
              ["Price", "Free"],
            ].map(([k, v], i) => (
              <tr key={k} className={i % 2 === 0 ? "bg-primary/40" : ""}>
                <td className="py-3 px-4 font-medium">{k}</td>
                <td className="py-3 px-4">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="bg-secondary rounded-xl p-8 mb-10 space-y-4 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-accent mb-2">Android Install Steps</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>Open this page on your Android phone and tap DOWNLOAD NOW.</li>
          <li>When the APK finishes, open the notification or Files app.</li>
          <li>Allow install permission if Android blocks unknown sources.</li>
          <li>Confirm Install, wait for completion, then open Masti 365.</li>
          <li>
            Register with your number — see the{" "}
            <Link href={`/blog/${SITE.blogs[1].slug}`} className="text-accent hover:underline">
              account guide
            </Link>{" "}
            if OTP fails.
          </li>
        </ol>
      </section>

      <section className="bg-secondary rounded-xl p-8 mb-10 space-y-4 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-accent">After You Install</h2>
        <p>
          Claim any welcome banner, then explore low-stake rooms first. When you are ready to fund the wallet, follow the{" "}
          <Link href={SITE.routes.deposit} className="text-accent hover:underline">
            deposit guide
          </Link>
          . Prefer PC? Use the{" "}
          <Link href={SITE.routes.pc} className="text-accent hover:underline">
            Masti 365 for PC
          </Link>{" "}
          emulator walkthrough.
        </p>
      </section>

      <div className="text-center">
        <DownloadButton size="md" />
      </div>
    </article>
  );
}
