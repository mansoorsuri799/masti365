import { SITE, absoluteUrl } from "./site";

/** Site origin for absolute schema URLs */
export const SITE_ORIGIN = SITE.origin;

/** Schema.org Organization node reused as creator across ImageObjects */
export const IMAGE_CREATOR = {
  "@type": "Organization",
  name: SITE.name,
  url: SITE_ORIGIN,
} as const;

/**
 * Full set of Schema.org ImageObject properties recommended by Google for
 * Image Metadata (Search Console: license, creator, acquireLicensePage,
 * copyrightNotice, creditText).
 */
export const imageObjectLicensing = {
  license: SITE_ORIGIN,
  creator: IMAGE_CREATOR,
  acquireLicensePage: absoluteUrl("/contact-us"),
  copyrightNotice: `© ${SITE.name}. All rights reserved.`,
  creditText: SITE.name,
} as const;
