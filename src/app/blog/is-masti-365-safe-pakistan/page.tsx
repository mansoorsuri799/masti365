import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import DownloadButton from "@/components/DownloadButton";
import { SITE, absoluteUrl } from "@/lib/site";

const post = SITE.blogs[0];

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: absoluteUrl(`/blog/${post.slug}`) },
};

export default function SafeBlog() {
  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <BlogPostSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.date}
        articleBody="Safety checklist for installing Masti 365 APK in Pakistan, verifying JazzCash payments, and playing responsibly."
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title },
        ]}
      />
      <h1 className="text-4xl font-bold mb-6 text-white">{post.title}</h1>
      <p className="text-gray-400 mb-8 text-sm">Updated {post.date} · {post.readMinutes} min read</p>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          Players searching for <Link href="/" className="text-accent hover:underline">Masti 365</Link> often ask one question first: is the APK safe enough to install on a personal Android phone? Safety is not a single switch — it is a stack of habits around downloads, payments, and bankroll control.
        </p>
        <h2 className="text-2xl font-bold text-accent pt-4">1. Download from trusted pages</h2>
        <p>
          Prefer {SITE.domain} and known guide sites over random Telegram files. Unknown APKs can request extra permissions or inject phishing screens. After install, review App info permissions and remove anything that looks unrelated to gaming or storage.
        </p>
        <h2 className="text-2xl font-bold text-accent pt-4">2. Protect OTPs and wallet PINs</h2>
        <p>
          Masti 365 support will never need your JazzCash or EasyPaisa PIN. If a chat agent asks for full OTP codes plus wallet PIN, stop and report the account. Use unique passwords for the game login.
        </p>
        <h2 className="text-2xl font-bold text-accent pt-4">3. Verify payment screens</h2>
        <p>
          Only deposit through the in-app wallet UI. Cross-check amounts before confirming SMS prompts. Our{" "}
          <Link href={SITE.routes.deposit} className="text-accent hover:underline">
            deposit guide
          </Link>{" "}
          and{" "}
          <Link href={SITE.routes.withdraw} className="text-accent hover:underline">
            withdraw guide
          </Link>{" "}
          show the expected mobile flows.
        </p>
        <h2 className="text-2xl font-bold text-accent pt-4">4. Play within a budget</h2>
        <p>
          Even a smooth, well-reviewed APK can cost money when stakes rise. Set a daily limit, avoid chasing losses, and treat bonuses as entertainment value — not guaranteed income. Local laws may restrict real-money play; check what applies to you.
        </p>
        <h2 className="text-2xl font-bold text-accent pt-4">Bottom line</h2>
        <p>
          Masti 365 can be used more safely when you control the install source, lock down OTPs, and keep deposits modest. Combine that discipline with the official download steps on this site before you join high-stake rooms.
        </p>
      </div>

      <div className="mt-12 text-center">
        <DownloadButton />
      </div>
    </article>
  );
}
