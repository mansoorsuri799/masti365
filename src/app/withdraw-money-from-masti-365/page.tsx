import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PhoneFrame from "@/components/PhoneFrame";
import DownloadButton from "@/components/DownloadButton";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Withdraw Money from Masti 365 | JazzCash & EasyPaisa",
  description:
    "Withdraw money from Masti 365 to JazzCash or EasyPaisa. Learn minimum limits, timing, and how to avoid common payout mistakes.",
  alternates: { canonical: absoluteUrl(SITE.routes.withdraw) },
};

export default function WithdrawPage() {
  return (
    <article className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Withdraw Money" }]} />
      <h1 className="text-4xl font-bold mb-6">
        How to Withdraw Money from <span className="text-accent">Masti 365</span>
      </h1>
      <p className="text-gray-300 leading-relaxed mb-10 max-w-3xl">
        Cashouts are the reason many Pakistanis try <Link href="/" className="text-accent hover:underline">Masti 365</Link>. When your balance is above the minimum and bonus conditions are clear, JazzCash and EasyPaisa withdrawals are usually the fastest path home.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
        <div className="bg-secondary rounded-xl p-8 space-y-4 text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-accent">Withdrawal Steps</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Open Wallet and select Withdraw.</li>
            <li>Pick JazzCash or EasyPaisa.</li>
            <li>Enter the exact account number and withdrawal amount.</li>
            <li>Confirm the request and save the order ID screenshot.</li>
            <li>Wait for the SMS credit — often within minutes after approval.</li>
          </ol>
          <p>
            Double-check digits before submitting. A single wrong number can delay support recovery. Minimums often start near PKR 500 but always confirm the live figure in-app.
          </p>
        </div>
        <PhoneFrame
          src={SITE.screenshots.withdraw}
          alt="Masti 365 withdraw money mobile screenshot"
          caption="Withdraw screen"
          width={834}
          height={1478}
          priority
        />
      </div>

      <section className="bg-secondary rounded-xl p-8 mb-10 space-y-4 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-accent">If a Payout Is Delayed</h2>
        <p>
          First confirm you cleared any bonus wagering. Then verify network SMS and wallet limits. Contact in-app chat with your user ID, amount, method, and screenshot. Website questions can go to{" "}
          <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
            {SITE.email}
          </a>
          .
        </p>
        <p>
          Need to add funds again later? Use the{" "}
          <Link href={SITE.routes.deposit} className="text-accent hover:underline">
            deposit guide
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
