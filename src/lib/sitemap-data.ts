import { SITE, absoluteUrl } from "./site";

export type SitemapImage = {
  loc: string;
  title: string;
  caption: string;
};

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly";
  priority: number;
  images?: SitemapImage[];
};

const LAST_MOD = "2026-08-04";

export const sitemapPages: SitemapPage[] = [
  {
    path: "/",
    lastMod: LAST_MOD,
    changeFreq: "daily",
    priority: 1.0,
    images: [
      {
        loc: SITE.screenshots.hero,
        title: "Masti 365 Official App Icon",
        caption:
          "Masti 365 APK for Pakistan — slots, cards, crash games, JazzCash & EasyPaisa.",
      },
      {
        loc: SITE.screenshots.game,
        title: "Masti 365 Game Lobby",
        caption: "Mobile game lobby screenshot from the Masti 365 Android app.",
      },
      {
        loc: SITE.screenshots.invite,
        title: "Masti 365 Invite and Earn",
        caption: "Invite-and-earn screen inside the Masti 365 app.",
      },
    ],
  },
  {
    path: SITE.routes.download,
    lastMod: LAST_MOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: SITE.screenshots.hero,
        title: "Download Masti 365 APK",
        caption: "Download Masti 365 free APK for Android in Pakistan.",
      },
    ],
  },
  {
    path: SITE.routes.deposit,
    lastMod: LAST_MOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: SITE.screenshots.deposit,
        title: "Deposit Money in Masti 365",
        caption: "JazzCash and EasyPaisa deposit screen on Masti 365.",
      },
    ],
  },
  {
    path: SITE.routes.withdraw,
    lastMod: LAST_MOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: SITE.screenshots.withdraw,
        title: "Withdraw Money from Masti 365",
        caption: "Withdrawal wallet screen on the Masti 365 Android app.",
      },
    ],
  },
  {
    path: SITE.routes.pc,
    lastMod: LAST_MOD,
    changeFreq: "weekly",
    priority: 0.85,
    images: [
      {
        loc: SITE.screenshots.hero,
        title: "Masti 365 for PC",
        caption: "Play Masti 365 on PC with an Android emulator.",
      },
    ],
  },
  {
    path: SITE.routes.about,
    lastMod: LAST_MOD,
    changeFreq: "monthly",
    priority: 0.7,
  },
  {
    path: SITE.routes.blog,
    lastMod: LAST_MOD,
    changeFreq: "weekly",
    priority: 0.8,
  },
  {
    path: SITE.routes.contact,
    lastMod: LAST_MOD,
    changeFreq: "monthly",
    priority: 0.6,
  },
  {
    path: SITE.routes.privacy,
    lastMod: LAST_MOD,
    changeFreq: "monthly",
    priority: 0.4,
  },
  {
    path: SITE.routes.disclaimer,
    lastMod: LAST_MOD,
    changeFreq: "monthly",
    priority: 0.4,
  },
  ...SITE.blogs.map((post) => ({
    path: `/blog/${post.slug}`,
    lastMod: post.date,
    changeFreq: "monthly" as const,
    priority: 0.75,
    images: [
      {
        loc: SITE.screenshots.hero,
        title: post.title,
        caption: post.description,
      },
    ],
  })),
];

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function pageLoc(path: string): string {
  return absoluteUrl(path);
}

export function imageLoc(path: string): string {
  return absoluteUrl(path);
}
