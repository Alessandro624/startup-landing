// Placeholders: [STARTUP_NAME], [STARTUP_TAGLINE], [COMPANY_DESCRIPTION], [SITE_URL], [LOGO_PATH], [CONTACT_EMAIL], [TWITTER_HANDLE], [LINKEDIN_URL], [GITHUB_URL], [TWITTER_URL], [GA_ID], [POSTHOG_KEY], [META_PIXEL_ID]

export const siteConfig = {
  name: "Startup Name",
  tagline: "Launch faster, learn faster",
  description:
    "A simple product that helps teams validate ideas and ship faster with less overhead.",
  url: "https://startup-landing-demo.vercel.app/",
  logoPath: "/logo.svg",
  contactEmail: "hello@example.com",

  ogImage: "/og-image.svg",
  twitterHandle: "@startup",

  social: {
    linkedin: "https://www.linkedin.com/company/startup",
    github: "https://github.com/yourstartup",
    twitter: "https://x.com/startup",
  },

  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXX",
    posthogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_XXXXXXXX",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "000000000000000",
  },
} as const;
