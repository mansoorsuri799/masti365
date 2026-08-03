import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { SITE, absoluteUrl } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0A0508",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: "Masti 365 APK Download Pakistan 2026 | Official App",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Download Masti 365 APK for Android in Pakistan. Play slots, cards & crash games with JazzCash and EasyPaisa withdrawals. Free · 4.5★ · Latest 2026 version.",
  keywords: [
    "Masti 365",
    "Masti365",
    "Masti 365 APK",
    "Masti 365 download",
    "Masti 365 Pakistan",
    "Masti365 game",
    "Masti 365 app",
    "earning game Pakistan",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "real money games Pakistan",
    "slots APK Pakistan",
    "masti365app.com.pk",
  ],
  authors: [{ name: `${SITE.name} Team` }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: SITE.logo, type: "image/webp", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: SITE.origin,
  },
  openGraph: {
    title: "Masti 365 APK Download Pakistan 2026 | Official App",
    description:
      "Download Masti 365 APK for Android. Slots, cards, crash games & fast JazzCash/EasyPaisa cashouts. Free · 4.5★.",
    url: SITE.origin,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl(SITE.ogImage),
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Download APK for Pakistan`,
      },
      {
        url: absoluteUrl("/feature/og-image-square.webp"),
        width: 800,
        height: 800,
        alt: `${SITE.name} App Icon`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masti 365 APK Download Pakistan 2026 | Official App",
    description:
      "Download Masti 365 APK for Android. Slots, cards, crash games & fast JazzCash/EasyPaisa cashouts.",
    creator: "@masti365",
    images: [
      {
        url: absoluteUrl(SITE.twitterImage),
        width: 1200,
        height: 600,
        alt: `${SITE.name} — Download APK for Pakistan`,
      },
    ],
  },
  applicationName: SITE.name,
  category: "Gaming",
  classification: "Earning Game Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 32x32" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href={SITE.logo} type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" &&
          process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="lazyOnload"
              />
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
              </Script>
            </>
          )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(240, 192, 0, 0.08) 0%, rgba(10, 5, 8, 0.02) 55%), radial-gradient(circle at 88% 0%, rgba(255, 29, 28, 0.07) 0%, transparent 40%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20" />
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: SITE.origin,
              logo: absoluteUrl(SITE.logo),
              description:
                "Masti 365 is a Pakistani Android earning-game app with slots, cards, crash-style games, and JazzCash/EasyPaisa support.",
              email: SITE.email,
            }),
          }}
        />

        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: SITE.name,
              operatingSystem: "Android",
              applicationCategory: "GameApplication",
              offers: {
                "@type": "Offer",
                price: SITE.price,
                priceCurrency: SITE.priceCurrency,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: SITE.ratingValue,
                bestRating: "5",
                ratingCount: SITE.ratingCount,
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
