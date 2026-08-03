import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `User-agent: *
Allow: /

Disallow: /api/

Sitemap: ${SITE.origin}/sitemap-index.xml
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
