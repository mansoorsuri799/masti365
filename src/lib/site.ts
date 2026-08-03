/** Central brand + SEO config for masti365app.com.pk */
export const SITE = {
  name: "Masti 365",
  shortName: "Masti365",
  domain: "masti365app.com.pk",
  origin: "https://masti365app.com.pk",
  email: "support@masti365app.com.pk",
  /** Official APK download / affiliate link used by all DOWNLOAD NOW buttons */
  downloadUrl: "https://www.365fun.org/?dl=5e78jn",
  version: "3.3.4",
  fileSize: "42MB",
  requiredOs: "Android 5.0+",
  updateDate: "4th August 2026",
  ratingValue: "4.5",
  ratingCount: "180000",
  ratingCountDisplay: "180K+",
  downloadsDisplay: "350K+",
  price: "0",
  priceCurrency: "PKR",
  logo: "/masti-365.webp",
  ogImage: "/feature/og-image.webp",
  twitterImage: "/feature/twitter-card.webp",
  screenshots: {
    hero: "/masti-365.webp",
    account: "/masti-365-acount.webp",
    deposit: "/masti-365-deposit-money.webp",
    withdraw: "/masti-365-withdraw-money.webp",
    events: "/masti-365-events.webp",
    game: "/masti-365-game.webp",
    invite: "/masti-365-invite-and-earn.webp",
  },
  routes: {
    home: "/",
    download: "/download-masti-365",
    deposit: "/deposit-money-in-masti-365",
    withdraw: "/withdraw-money-from-masti-365",
    pc: "/masti-365-for-pc",
    about: "/about-us",
    blog: "/blog",
    contact: "/contact-us",
    privacy: "/privacy",
    disclaimer: "/disclaimer",
  },
  blogs: [
    {
      slug: "is-masti-365-safe-pakistan",
      title: "Is Masti 365 Safe for Pakistani Players in 2026?",
      description:
        "A clear safety check of Masti 365 APK installs, JazzCash/EasyPaisa payments, and responsible play tips for Pakistan.",
      date: "2026-08-04",
      readMinutes: 9,
    },
    {
      slug: "masti-365-account-login-guide",
      title: "Masti 365 Account & Login Guide for Beginners",
      description:
        "Create a Masti 365 account, verify your number, fix login errors, and start playing with a welcome bonus.",
      date: "2026-08-04",
      readMinutes: 8,
    },
    {
      slug: "masti-365-bonuses-invite-earn",
      title: "Masti 365 Bonuses & Invite-and-Earn Explained",
      description:
        "How welcome rewards, daily events, and the invite program work on Masti 365 — without hype or fake promises.",
      date: "2026-08-04",
      readMinutes: 10,
    },
    {
      slug: "masti-365-tips-to-play-smarter",
      title: "10 Smart Tips to Play Better on Masti 365",
      description:
        "Practical tips for slots, cards, crash-style games, bankroll control, and faster JazzCash withdrawals.",
      date: "2026-08-04",
      readMinutes: 11,
    },
  ],
} as const;

export type SiteBlog = (typeof SITE.blogs)[number];

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE.origin}${path.startsWith("/") ? path : `/${path}`}`;
}
