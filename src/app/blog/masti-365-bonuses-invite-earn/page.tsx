import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import PhoneFrame from "@/components/PhoneFrame";
import DownloadButton from "@/components/DownloadButton";
import { SITE, absoluteUrl } from "@/lib/site";

const post = SITE.blogs[2];

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: absoluteUrl(`/blog/${post.slug}`) },
};

export default function BonusesBlog() {
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

      <div className="space-y-6 text-gray-300 leading-relaxed mb-10">
        <p>
          Bonuses make <Link href="/" className="text-accent hover:underline">Masti 365</Link> feel generous — but only when you read the live rules. Welcome packs, daily events, and invite rewards each unlock differently and may require playthrough before a full JazzCash cashout.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <PhoneFrame
          src={SITE.screenshots.events}
          alt="Masti 365 events bonuses screenshot"
          caption="Events"
          width={828}
          height={1478}
        />
        <PhoneFrame
          src={SITE.screenshots.invite}
          alt="Masti 365 invite and earn screenshot"
          caption="Invite & earn"
          width={832}
          height={1474}
        />
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-accent">Welcome and daily value</h2>
        <p>
          New accounts often see a first-login gift. Claim it before diving into high variance slots. Daily check-ins add smaller top-ups that help when you play short sessions after work.
        </p>
        <h2 className="text-2xl font-bold text-accent">Invite-and-earn without spam</h2>
        <p>
          Share your invite link only with friends who already want the app. Fake referrals usually void rewards and can lock promotions. Track successful installs inside the invite panel rather than guessing.
        </p>
        <h2 className="text-2xl font-bold text-accent">Wagering reality check</h2>
        <p>
          Bonus balances are not always the same as withdrawable cash. Finish any required turnover, then move funds using the{" "}
          <Link href={SITE.routes.withdraw} className="text-accent hover:underline">
            withdraw guide
          </Link>
          . If terms look unclear, ask in-app support before depositing more.
        </p>
      </div>

      <div className="mt-12 text-center">
        <DownloadButton />
      </div>
    </article>
  );
}
