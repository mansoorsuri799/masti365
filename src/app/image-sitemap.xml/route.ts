import { NextResponse } from "next/server";
import { escapeXml, imageLoc, pageLoc, sitemapPages } from "@/lib/sitemap-data";

export const dynamic = "force-static";

export function GET() {
  const urls = sitemapPages
    .filter((page) => page.images && page.images.length > 0)
    .map((page) => {
      const images = page.images!
        .map(
          (img) => `    <image:image>
      <image:loc>${escapeXml(imageLoc(img.loc))}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`
        )
        .join("\n");
      return `  <url>
    <loc>${escapeXml(pageLoc(page.path))}</loc>
${images}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
