import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PhoneFrame from "@/components/PhoneFrame";
import DownloadButton from "@/components/DownloadButton";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Deposit Money in Masti 365 via JazzCash & EasyPaisa",
  description:
    "Step-by-step guide to deposit money in Masti 365 using JazzCash and EasyPaisa. Safe PKR top-ups for Android players in Pakistan.",
  alternates: { canonical: absoluteUrl(SITE.routes.deposit) },
};

export default function DepositPage() {
  return (
    <article className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Deposit Money" }]} />
      <h1 className="text-4xl font-bold mb-6">
        How to Deposit Money in <span className="text-accent">Masti 365</span>
      </h1>
      <p className="text-gray-300 leading-relaxed mb-10 max-w-3xl">
        Funding <Link href="/" className="text-accent hover:underline">Masti 365</Link> is designed around Pakistani wallets. Use JazzCash or EasyPaisa from the in-app wallet so PKR appears quickly before you join slots or card rooms.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
        <div className="bg-secondary rounded-xl p-8 space-y-4 text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-accent">Deposit Steps</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Open Masti 365 and sign in to your account.</li>
            <li>Tap Wallet or Deposit on the home lobby.</li>
            <li>Choose JazzCash or EasyPaisa and enter a comfortable PKR amount.</li>
            <li>Confirm the payment prompt on your phone and wait for the SMS.</li>
            <li>Return to the app and refresh until the balance updates.</li>
          </ol>
          <p>
            Start with a small test amount the first time. If funds stay pending, wait a few minutes, verify the transaction SMS, then contact in-app support with the reference ID.
          </p>
        </div>
        <PhoneFrame
          src={SITE.screenshots.deposit}
          alt="Masti 365 deposit money mobile screenshot"
          caption="Deposit screen"
          width={832}
          height={1482}
          priority
        />
      </div>

      <section className="bg-secondary rounded-xl p-8 mb-10 space-y-4 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-accent">JazzCash vs EasyPaisa Tips</h2>
        <p>
          Both wallets work well when the mobile number matches your usual payments. Keep enough balance for the deposit plus any JazzCash/EasyPaisa fee your carrier shows. Never send money to personal accounts advertised on social media — only use details inside the official Masti 365 wallet UI.
        </p>
        <p>
          After depositing, you may see bonus banners. Read wagering rules before assuming funds are fully withdrawable. For cashouts, follow the{" "}
          <Link href={SITE.routes.withdraw} className="text-accent hover:underline">
            withdraw guide
          </Link>
          .
        </p>
      </section>

      <div className="text-center">
        <DownloadButton />
      </div>
    </article>
  );
}
