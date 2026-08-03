import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { SITE, absoluteUrl } from "@/lib/site";
import DownloadButton from "@/components/DownloadButton";
import PhoneFrame from "@/components/PhoneFrame";

export const metadata: Metadata = {
  title: {
    default: "Masti 365 APK Download Pakistan 2026 | Official App",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Download Masti 365 APK for Android in Pakistan. Play slots, cards & crash games with JazzCash and EasyPaisa withdrawals. Free · 4.5★ · Latest 2026 version.",
  alternates: { canonical: SITE.origin },
  openGraph: {
    title: "Masti 365 APK Download Pakistan 2026 | Official App",
    description:
      "Download Masti 365 APK for Android. Slots, cards, crash games & fast JazzCash/EasyPaisa cashouts. Free · 4.5★.",
    images: [
      {
        url: absoluteUrl(SITE.logo),
        width: 512,
        height: 512,
        alt: "Masti 365 — official APK icon for Pakistan",
      },
      {
        url: absoluteUrl(SITE.ogImage),
        width: 1200,
        height: 630,
        alt: "Masti 365 — Download APK for Pakistan",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masti 365 APK Download Pakistan 2026 | Official App",
    description:
      "Download Masti 365 APK for Android. Slots, cards, crash games & fast JazzCash/EasyPaisa cashouts.",
    images: [absoluteUrl(SITE.logo), absoluteUrl(SITE.ogImage)],
  },
};

const faqs = [
  {
    q: "What is Masti 365?",
    a: "Masti 365 is an Android earning-game APK popular in Pakistan. It combines slots, card tables, crash-style rounds, and event rewards with JazzCash and EasyPaisa wallet support.",
  },
  {
    q: "How do I download Masti 365 APK?",
    a: `Open ${SITE.domain}, go to the Download page, save the APK, allow installs from unknown sources, then install and register with your mobile number.`,
  },
  {
    q: "Is Masti 365 free to install?",
    a: "Yes. The Masti 365 APK download is free. You only add funds if you choose to play cash tables after registration.",
  },
  {
    q: "Can beginners use Masti 365?",
    a: "Yes. The lobby is mobile-first with clear game tiles, small-stake tables, and a simple JazzCash/EasyPaisa wallet flow designed for first-time users.",
  },
  {
    q: "How long do Masti 365 withdrawals take?",
    a: "Most JazzCash and EasyPaisa withdrawals complete within minutes after approval. Exact timing depends on network load and correct wallet details.",
  },
  {
    q: "What is the minimum withdrawal on Masti 365?",
    a: "Minimum withdrawal usually starts around PKR 500 via JazzCash or EasyPaisa. Always confirm the live minimum inside the app wallet before you request a payout.",
  },
  {
    q: "Is Masti 365 safe to install?",
    a: "Install only from trusted pages like this site, keep Android Play Protect on, and never share OTPs. Safety also means playing within a budget you can afford.",
  },
  {
    q: "Does Masti 365 support JazzCash and EasyPaisa?",
    a: "Yes. Deposits and withdrawals commonly use JazzCash and EasyPaisa so Pakistani players can move PKR without international cards.",
  },
  {
    q: "What games are inside Masti 365?",
    a: "Expect slots, card classics such as Teen Patti and Andar Bahar styles, crash/Aviator-style rounds, fishing and event rooms — all inside one lightweight APK.",
  },
  {
    q: "How do I contact Masti 365 support?",
    a: `Use in-app chat when available, or email ${SITE.email}. You can also reach us through the Contact page on ${SITE.domain}.`,
  },
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.origin}/#website`,
        url: `${SITE.origin}/`,
        name: SITE.name,
        description:
          "Masti 365 APK download for Pakistan — slots, cards, crash games, JazzCash & EasyPaisa.",
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.origin}/#webpage`,
        url: `${SITE.origin}/`,
        name: "Masti 365 APK Download Pakistan 2026 | Official App",
        description:
          "Download Masti 365 APK for Android in Pakistan. Play slots, cards & crash games with JazzCash and EasyPaisa withdrawals.",
        isPartOf: { "@id": `${SITE.origin}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(SITE.logo),
          width: 512,
          height: 512,
          name: SITE.name,
          description: "Masti 365 official brand image and APK icon.",
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "ImageObject",
        "@id": `${absoluteUrl(SITE.logo)}#primary`,
        url: absoluteUrl(SITE.logo),
        contentUrl: absoluteUrl(SITE.logo),
        name: SITE.name,
        description:
          "Masti 365 — Pakistani earning-game APK with slots, cards, and crash-style play.",
        width: 512,
        height: 512,
        ...imageObjectLicensing,
      },
      {
        "@type": "Organization",
        "@id": `${SITE.origin}/#organization`,
        name: SITE.name,
        url: `${SITE.origin}/`,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(SITE.logo),
          width: 512,
          height: 512,
          ...imageObjectLicensing,
          creditText: `${SITE.name} logo`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: SITE.email,
          contactType: "Customer Support",
          areaServed: "PK",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: SITE.name,
        operatingSystem: SITE.requiredOs,
        applicationCategory: "GameApplication",
        image: absoluteUrl(SITE.logo),
        logo: absoluteUrl(SITE.logo),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: SITE.ratingValue,
          bestRating: "5",
          ratingCount: SITE.ratingCount,
        },
        offers: {
          "@type": "Offer",
          price: SITE.price,
          priceCurrency: SITE.priceCurrency,
        },
        downloadUrl: SITE.downloadUrl,
        softwareVersion: SITE.version,
        fileSize: SITE.fileSize,
        description:
          "Masti 365 is a Pakistani Android earning-game app with slots, card tables, crash-style games, daily events, and JazzCash/EasyPaisa wallet support.",
        screenshot: [
          absoluteUrl(SITE.screenshots.game),
          absoluteUrl(SITE.screenshots.events),
          absoluteUrl(SITE.screenshots.invite),
          absoluteUrl(SITE.screenshots.deposit),
          absoluteUrl(SITE.screenshots.withdraw),
          absoluteUrl(SITE.screenshots.account),
        ],
        author: { "@type": "Organization", name: SITE.name },
      },
      {
        "@type": "HowTo",
        name: "How to download and install Masti 365 on Android",
        description: "Install the Masti 365 APK on Android and create your first account.",
        totalTime: "PT5M",
        step: [
          {
            "@type": "HowToStep",
            name: "Open the download page",
            text: `Visit ${SITE.domain} and open the Masti 365 download page.`,
          },
          {
            "@type": "HowToStep",
            name: "Save the APK",
            text: "Tap DOWNLOAD NOW and wait for the APK file to finish saving.",
          },
          {
            "@type": "HowToStep",
            name: "Allow unknown sources",
            text: "Enable install permission for your browser or file manager, then open the APK.",
          },
          {
            "@type": "HowToStep",
            name: "Register and play",
            text: "Create an account with your mobile number, claim the welcome offer, and open a game room.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Masti 365</span>
              </h1>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-accent">APK Download &amp; Play</span>{" "}
                <span className="text-white">Real Money Games in Pakistan 2026</span>
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-accent hover:underline">
                Masti 365
              </Link>{" "}
              brings slots, card rooms, and crash-style rounds into one Android APK built for Pakistani players. Smooth mobile controls, JazzCash and EasyPaisa wallets, and daily event rewards make every session easy to start and easy to cash out.
            </p>

            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <DownloadButton size="sm" />
                <div
                  className="flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm text-gray-300"
                  aria-label={`Rated ${SITE.ratingValue} out of 5 from ${SITE.ratingCountDisplay} reviews`}
                >
                  <span className="text-accent font-bold">{SITE.ratingValue}</span>
                  <span className="text-accent tracking-tight text-[13px]" aria-hidden="true">
                    ★★★★☆
                  </span>
                  <span className="text-gray-400 whitespace-nowrap">
                    ({SITE.ratingCountDisplay}) · Free · Android · Game
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: "120px" }}>
              <div className="bg-secondary p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{SITE.downloadsDisplay}</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="bg-secondary p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{SITE.ratingCountDisplay}</div>
                <div className="text-gray-400 text-sm">Ratings</div>
              </div>
              <div className="bg-secondary p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{SITE.fileSize}</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center italic">*Available for Android devices only</p>
          </div>

          <figure
            className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <meta itemProp="name" content="Masti 365" />
            <meta
              itemProp="description"
              content="Masti 365 APK icon — slots, cards, crash games for Pakistan."
            />
            <meta itemProp="url" content={absoluteUrl(SITE.logo)} />
            <Image
              src={SITE.logo}
              alt="Masti 365 – Download APK for Android in Pakistan"
              title="Masti 365 – Official APK for slots, cards & crash games"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
              priority={true}
              fetchPriority="high"
              quality={80}
              sizes="(max-width: 768px) 260px, 320px"
              itemProp="image"
            />
            <figcaption className="sr-only">
              Masti 365 official app icon for masti365app.com.pk. Download the Android APK and play with JazzCash &amp; EasyPaisa.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* APK table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Masti 365 APK Details</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App Name", SITE.name],
                ["Developer", "Masti365 Studio"],
                ["Category", "Casino, Cards, Game"],
                ["Size", SITE.fileSize],
                ["Latest Version", `V${SITE.version}`],
                ["Required OS", SITE.requiredOs],
                ["Update", SITE.updateDate],
                ["Downloads", SITE.downloadsDisplay],
                ["Rating", `${SITE.ratingValue} ★ (${SITE.ratingCountDisplay})`],
                ["Language", "English, Urdu"],
                ["Price", "Free (0 PKR)"],
              ].map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-secondary/80" : "bg-primary/50"}>
                  <td className="py-4 px-6 font-medium text-white">{label}</td>
                  <td className="py-4 px-6 text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="what-is-masti-365" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">What Is Masti 365?</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Masti 365 is a mobile earning-game APK made for players who want casino-style entertainment without leaving Pakistan&apos;s wallet ecosystem. Instead of juggling multiple apps, you open one lobby that mixes slots, card tables, and crash-style rounds.
            </p>
            <p>
              The interface is built for phones first. Large tiles, quick wallet buttons, and local payment labels help beginners understand where to deposit, where to play, and where to withdraw. That clarity is why searches for Masti 365 APK keep rising across Pakistani cities in 2026.
            </p>
            <p>
              With Masti 365, the goal is practical play: small stakes if you want them, clear bonuses, and JazzCash or EasyPaisa cash movement when you decide to stop for the day.
            </p>
          </div>
        </div>
      </section>

      <section id="why-popular" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Why Masti 365 Is Popular in Pakistan 2026</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Pakistani players look for apps that feel local. Masti 365 answers that need with PKR-friendly wallets, Urdu-friendly menus on many screens, and game types people already know from Teen Patti nights and online crash rooms.
            </p>
            <p>
              Speed matters too. Lightweight installs around {SITE.fileSize}, Android 5.0+ support, and event calendars keep sessions short and rewarding. When deposits and withdrawals use JazzCash or EasyPaisa, players spend less time troubleshooting foreign payment gateways.
            </p>
            <p>
              Daily login gifts, invite rewards, and rotating promotions also keep the lobby active — without forcing you into high stakes on day one.
            </p>
          </div>
        </div>
      </section>

      <section id="games" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Games Inside the Masti 365 App</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-8">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                The Masti 365 game lobby groups entertainment so you can jump between styles without reinstalling anything. Slot fans get spinning reels and jackpot themes. Card players find Teen Patti-style tables and Andar Bahar pacing. Crash and Aviator-style rounds add short, high-energy sessions.
              </p>
              <p>
                Fishing rooms and live-style casino tiles appear for players who prefer visual action over classic card math. Because everything sits under one wallet, your JazzCash deposit can move across categories in the same night.
              </p>
              <p>
                Beginners benefit most from starting on low-stake rooms until they learn each game&apos;s rhythm. Experienced players use the same lobby to switch formats when variance runs hot.
              </p>
            </div>
            <PhoneFrame
              src={SITE.screenshots.game}
              alt="Masti 365 mobile game lobby screenshot"
              caption="Game lobby on Android"
              width={836}
              height={1472}
            />
          </div>
        </div>
      </section>

      <section id="features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Key Features of Masti 365</h2>
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Mobile-first lobby</h3>
              <p>
                Every control is sized for thumbs. Masti 365 keeps navigation shallow so you reach games, wallet, and events in a few taps. That design helps new Android users who are installing an APK for the first time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Local wallet flow</h3>
              <p>
                JazzCash and EasyPaisa options mean you fund and cash out in PKR. Players who avoid international cards gain a smoother path from deposit to first round.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Events and invite earn</h3>
              <p>
                Rotating events and invite links add extra value beyond table results. Share carefully with friends who already want to play — never spam contacts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightweight APK</h3>
              <p>
                At roughly {SITE.fileSize}, Masti 365 fits mid-range phones common in Pakistan. Keeping storage free and updating to V{SITE.version} reduces crash risk during peak hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="bonuses" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Bonuses, Events &amp; Invite Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <PhoneFrame
              src={SITE.screenshots.events}
              alt="Masti 365 events and promotions screen"
              caption="Events & promotions"
              width={828}
              height={1478}
            />
            <PhoneFrame
              src={SITE.screenshots.invite}
              alt="Masti 365 invite and earn screen"
              caption="Invite & earn"
              width={832}
              height={1474}
            />
          </div>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Masti 365 usually greets new accounts with a welcome package so your first rooms feel less empty. Daily check-ins and limited-time events layer more value if you open the app consistently.
            </p>
            <p>
              The invite-and-earn panel rewards successful referrals when friends install, register, and meet the program rules. Read the live terms inside the app — reward size and wagering conditions can change.
            </p>
            <p>
              Bonuses help most when you treat them as bankroll support, not guaranteed income. Pair offers with{" "}
              <Link href={`/blog/${SITE.blogs[2].slug}`} className="text-accent hover:underline">
                our bonuses guide
              </Link>{" "}
              for a realistic plan.
            </p>
          </div>
        </div>
      </section>

      <section id="how-to-install" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">How to Download &amp; Install Masti 365</h2>
          <ol className="list-decimal pl-5 space-y-4 text-gray-300 leading-relaxed">
            <li>
              Open{" "}
              <Link href={SITE.routes.download} className="text-accent hover:underline font-semibold">
                the Masti 365 download page
              </Link>{" "}
              on your Android phone.
            </li>
            <li>Tap DOWNLOAD NOW and wait until the APK finishes saving.</li>
            <li>Allow installation from your browser or file manager when Android asks.</li>
            <li>Open the APK, confirm install, then launch Masti 365.</li>
            <li>Register with your mobile number, verify the OTP, and explore the lobby.</li>
          </ol>
          <div className="mt-8 flex justify-center">
            <DownloadButton size="md" />
          </div>
        </div>
      </section>

      <section id="register-login" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Register &amp; Login on Masti 365</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Creating a Masti 365 account starts with your Pakistani mobile number. Enter the OTP carefully, set a password you do not reuse elsewhere, and complete any profile fields the app requests.
              </p>
              <p>
                Login is usually number-plus-password or a quick OTP flow. If you see network errors, switch between Wi-Fi and mobile data, then retry. Persistent issues are covered in our{" "}
                <Link href={`/blog/${SITE.blogs[1].slug}`} className="text-accent hover:underline">
                  account &amp; login guide
                </Link>
                .
              </p>
              <p>
                After login, claim any visible welcome banner before entering cash rooms so you do not miss first-day value.
              </p>
            </div>
            <PhoneFrame
              src={SITE.screenshots.account}
              alt="Masti 365 account and login screen"
              caption="Account & login"
              width={830}
              height={1482}
            />
          </div>
        </div>
      </section>

      <section id="deposit-withdraw" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Deposit &amp; Withdraw with Local Wallets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <PhoneFrame
              src={SITE.screenshots.deposit}
              alt="Masti 365 deposit money screen with JazzCash EasyPaisa"
              caption="Deposit money"
              width={832}
              height={1482}
            />
            <PhoneFrame
              src={SITE.screenshots.withdraw}
              alt="Masti 365 withdraw money screen"
              caption="Withdraw money"
              width={834}
              height={1478}
            />
          </div>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Deposits typically go through JazzCash or EasyPaisa from the in-app wallet. Enter the amount, follow the payment confirmation, and wait for the balance to refresh before joining tables.
            </p>
            <p>
              Withdrawals reverse the path: open Wallet, choose Withdraw, select your method, double-check the account number, and submit. Keep screenshots of successful requests until funds arrive.
            </p>
            <p>
              For full step lists, use the dedicated{" "}
              <Link href={SITE.routes.deposit} className="text-accent hover:underline">
                deposit guide
              </Link>{" "}
              and{" "}
              <Link href={SITE.routes.withdraw} className="text-accent hover:underline">
                withdraw guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="payments" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Payment Methods on Masti 365</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              <strong className="text-white">JazzCash</strong> is ideal if your daily spending already sits in a Jazz wallet. Match the registered name where possible and confirm SMS prompts before approving transfers.
            </p>
            <p>
              <strong className="text-white">EasyPaisa</strong> works the same way for Telenor-linked wallets. Small test deposits help first-time users verify that funds post correctly.
            </p>
            <p>
              Some users also see bank-transfer options depending on region and app version. Always use details shown inside Masti 365 — never send money to random personal accounts from social media.
            </p>
          </div>
        </div>
      </section>

      <section id="troubleshooting" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Troubleshooting Common Masti 365 Issues</h2>
          <ul className="space-y-4 text-gray-300 leading-relaxed list-disc pl-5">
            <li>
              <strong className="text-white">APK won&apos;t install:</strong> Clear space, allow unknown sources for the correct app, and re-download a fresh file.
            </li>
            <li>
              <strong className="text-white">App stuck on loading:</strong> Force close, clear cache, switch networks, then reopen on V{SITE.version}.
            </li>
            <li>
              <strong className="text-white">Deposit pending:</strong> Wait a few minutes, verify the JazzCash/EasyPaisa SMS, then refresh the wallet.
            </li>
            <li>
              <strong className="text-white">Withdrawal delay:</strong> Confirm account digits, check minimum limits, and contact support with your request ID.
            </li>
          </ul>
        </div>
      </section>

      <section id="tips" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Smart Tips for Masti 365 Players</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Set a daily PKR limit before you open the lobby. Masti 365 is entertainment — not a salary replacement. Leaving when you hit your stop-loss protects tomorrow&apos;s bankroll.
            </p>
            <p>
              Learn one game family at a time. Slots, cards, and crash rounds each behave differently. Jumping between them while tilted usually burns bonus funds faster.
            </p>
            <p>
              Read more tactics in{" "}
              <Link href={`/blog/${SITE.blogs[3].slug}`} className="text-accent hover:underline">
                10 smart tips for Masti 365
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="pros-cons" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Pros &amp; Cons of Masti 365</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Pros</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Local JazzCash &amp; EasyPaisa support</li>
                <li>Multiple game styles in one APK</li>
                <li>Mobile screenshots show clear wallet flows</li>
                <li>Events and invite rewards for regular players</li>
                <li>Free download with mid-range phone support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-4">Cons</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Android-focused (no native iOS store build)</li>
                <li>Sideloading requires unknown-source permission</li>
                <li>Bonus rules can change without long notice</li>
                <li>Real-money play always carries loss risk</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="safety" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Safety &amp; Responsible Play</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Download Masti 365 only from trusted pages such as {SITE.domain}. Avoid random Telegram APKs that request extra permissions or ask for your OTP.
            </p>
            <p>
              Never chase losses. Take breaks, use session timers, and stop if play stops feeling fun. Legal status for real-money games can vary by location — check rules that apply to you.
            </p>
            <p>
              For a deeper checklist, read{" "}
              <Link href={`/blog/${SITE.blogs[0].slug}`} className="text-accent hover:underline">
                Is Masti 365 safe for Pakistani players?
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="support" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Customer Support</h2>
          <p className="text-gray-300 leading-relaxed">
            Prefer in-app live chat for wallet tickets because agents can see your account ID. For website questions, email{" "}
            <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
              {SITE.email}
            </a>{" "}
            or use the{" "}
            <Link href={SITE.routes.contact} className="text-accent hover:underline">
              contact form
            </Link>
            . Include screenshots and timestamps so replies stay fast.
          </p>
        </div>
      </section>

      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Masti 365 FAQs</h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-gray-800 pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-gray-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-accent">Ready to Try Masti 365?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Download the latest Android APK from {SITE.domain}, register with your number, and explore slots, cards, and crash rooms with JazzCash and EasyPaisa support.
        </p>
        <DownloadButton size="md" />
      </section>
    </>
  );
}
