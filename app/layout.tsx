import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";

// Placeholders: [KEYWORD_1], [KEYWORD_2], [KEYWORD_3]

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["startup", "landing page", "waitlist"],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const analytics = siteConfig.analytics;
  const hasGa = !!analytics.gaId;
  const hasPosthog = !!analytics.posthogKey;
  const hasMetaPixel = !!analytics.metaPixelId;

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {hasGa && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${analytics.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${analytics.gaId}');`}
            </Script>
          </>
        )}
        {hasPosthog && (
          <Script id="posthog-init" strategy="afterInteractive">
            {`!function(t,e){var o,n,p,r;e.__SV=1;window.posthog=e;e._i=[];e.init=function(i,s,a){function g(t,e){var o=e.split('.');2==o.length&&(t=t[o[0]],e=o[1]);t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement('script')).type='text/javascript';p.async=!0;p.src='https://app.posthog.com/static/array.js';(r=t.getElementsByTagName('script')[0]).parentNode.insertBefore(p,r);var u=e;void 0!==a?u=e[a]=[]:a='posthog';u.people=u.people||[];u.toString=function(t){var e='posthog';return'posthog'!==a&&(e+='.'+a),t||(e+=' (stub)'),e};u.people.toString=function(){return u.toString(1)+'.people (stub)'};n='capture identify alias people.set people.set_once people.unset people.increment people.append people.remove people.group group_identify group_set group_unset group_remove group_merge'.split(' ');for(o=0;o<n.length;o++)g(u,n[o]);e._i.push([i,s,a])};e.__SV=1}(document,window.posthog||[]);posthog.init('${analytics.posthogKey}',{api_host:'https://app.posthog.com'});`}
          </Script>
        )}
        {hasMetaPixel && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${analytics.metaPixelId}');fbq('track','PageView');`}
          </Script>
        )}
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
