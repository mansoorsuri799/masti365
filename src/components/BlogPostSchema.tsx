import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { SITE, absoluteUrl } from "@/lib/site";

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

type BlogPostSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  breadcrumbOnly?: boolean;
  articleBody?: string;
};

export default function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image = absoluteUrl(SITE.logo),
  breadcrumbOnly = false,
  articleBody,
}: BlogPostSchemaProps) {
  const url = absoluteUrl(`/blog/${slug}`);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };
  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    image,
    author: { "@type": "Organization", name: SITE.name, url: SITE.origin },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(SITE.logo),
        ...imageObjectLicensing,
        creditText: `${SITE.name} logo`,
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-US",
    ...(articleBody && { articleBody }),
  };
  return (
    <div suppressHydrationWarning style={{ display: "contents" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      {!breadcrumbOnly && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
        />
      )}
    </div>
  );
}
