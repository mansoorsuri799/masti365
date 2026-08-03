import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Masti 365 Blog — Safety, Login, Bonuses & Tips",
  description:
    "Guides for Masti 365 in Pakistan: safety checks, account login help, bonuses & invite earn, and smarter play tips.",
  alternates: { canonical: absoluteUrl(SITE.routes.blog) },
};

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Masti 365 Blog</h1>
      <p className="text-gray-300 mb-10 text-lg max-w-3xl">
        Original guides that support the Masti 365 APK experience in Pakistan — without duplicating our deposit or withdraw pages.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SITE.blogs.map((post, index) => (
          <div
            key={post.slug}
            className={`bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 ${
              index === 0 ? "border-accent" : "border-gray-700 hover:border-accent"
            }`}
          >
            {index === 0 && (
              <div className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                FEATURED
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>August 2026</span>
              <span>•</span>
              <span>{post.readMinutes} min read</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline font-semibold">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
