import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import PhoneFrame from "@/components/PhoneFrame";
import DownloadButton from "@/components/DownloadButton";
import { SITE, absoluteUrl } from "@/lib/site";

const post = SITE.blogs[1];

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: absoluteUrl(`/blog/${post.slug}`) },
};

export default function AccountBlog() {
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

      <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            A clean <Link href="/" className="text-accent hover:underline">Masti 365</Link> account starts with your Pakistani mobile number. Enter it carefully, wait for the OTP, and create a password you do not reuse on JazzCash or email.
          </p>
          <h2 className="text-2xl font-bold text-accent">Registration checklist</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Install the APK from the <Link href={SITE.routes.download} className="text-accent hover:underline">download page</Link>.</li>
            <li>Open the app and choose Register / Sign up.</li>
            <li>Verify the OTP without sharing it in chats.</li>
            <li>Complete any profile fields the lobby requests.</li>
            <li>Claim a welcome banner before joining cash tables.</li>
          </ol>
        </div>
        <PhoneFrame
          src={SITE.screenshots.account}
          alt="Masti 365 account login mobile screenshot"
          caption="Account screen"
          width={830}
          height={1482}
          priority
        />
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-accent">Login problems and quick fixes</h2>
        <p>
          If OTP never arrives, toggle airplane mode, switch between Wi-Fi and mobile data, and confirm the number format includes the correct Pakistan prefix. Wrong passwords usually need the in-app reset flow — not a random WhatsApp “agent.”
        </p>
        <p>
          Session kicks can happen on unstable networks. Reopen the app after a force stop. Still stuck? Contact in-app support with your registered number and a screenshot of the error.
        </p>
        <p>
          Once logged in, explore events and the invite panel at your own pace, then fund only what you planned via the{" "}
          <Link href={SITE.routes.deposit} className="text-accent hover:underline">
            deposit guide
          </Link>
          .
        </p>
      </div>

      <div className="mt-12 text-center">
        <DownloadButton />
      </div>
    </article>
  );
}
