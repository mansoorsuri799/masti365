import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import DownloadButton from "@/components/DownloadButton";
import { SITE, absoluteUrl } from "@/lib/site";

const post = SITE.blogs[3];

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: absoluteUrl(`/blog/${post.slug}`) },
};

export default function TipsBlog() {
  const tips = [
    "Set a PKR session budget before opening the lobby.",
    "Learn one game type per night — slots, cards, or crash — not all three while tilted.",
    "Use low-stake tables until you understand timing and fee structures.",
    `Keep the app updated to V${SITE.version} for payment fixes.`,
    "Screenshot every deposit and withdrawal confirmation.",
    "Stop after a win goal as well as after a loss limit.",
    "Avoid chasing bonuses that require stakes you cannot afford.",
    "Play on stable data; mid-round disconnects waste bankroll.",
    "Review event timers so you do not miss claim windows.",
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <BlogPostSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.date}
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
          Smart play on <Link href="/" className="text-accent hover:underline">Masti 365</Link> is mostly discipline. These tips help Pakistani Android users keep sessions intentional whether they prefer slots, card rooms, or crash-style rounds.
        </p>
        <ol className="list-decimal pl-5 space-y-4">
          {tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
          <li>
            Read safety habits in our{" "}
            <Link href={`/blog/${SITE.blogs[0].slug}`} className="text-accent hover:underline">
              Is Masti 365 safe?
            </Link>{" "}
            article before raising stakes.
          </li>
        </ol>
        <p>
          When you are ready to move money, use the dedicated{" "}
          <Link href={SITE.routes.deposit} className="text-accent hover:underline">
            deposit
          </Link>{" "}
          and{" "}
          <Link href={SITE.routes.withdraw} className="text-accent hover:underline">
            withdraw
          </Link>{" "}
          guides instead of improvising from social media screenshots.
        </p>
      </div>

      <div className="mt-12 text-center">
        <DownloadButton />
      </div>
    </article>
  );
}
