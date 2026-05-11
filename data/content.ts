// Placeholders: [STARTUP_TAGLINE], [COMPANY_DESCRIPTION], [PRIMARY_CTA], [HERO_IMAGE], [PAIN_POINT_1], [PAIN_POINT_1_DESCRIPTION], [PAIN_POINT_2], [PAIN_POINT_2_DESCRIPTION], [PAIN_POINT_3], [PAIN_POINT_3_DESCRIPTION], [STAT_1], [STAT_2], [STAT_3], [SOLUTION_DESCRIPTION], [CORE_FEATURE_1], [CORE_FEATURE_1_DESCRIPTION], [CORE_FEATURE_2], [CORE_FEATURE_2_DESCRIPTION], [CORE_FEATURE_3], [CORE_FEATURE_3_DESCRIPTION], [FEATURE_1_TITLE], [FEATURE_1_DESCRIPTION], [FEATURE_2_TITLE], [FEATURE_2_DESCRIPTION], [FEATURE_3_TITLE], [FEATURE_3_DESCRIPTION], [FEATURE_4_TITLE], [FEATURE_4_DESCRIPTION], [FEATURE_5_TITLE], [FEATURE_5_DESCRIPTION], [FEATURE_6_TITLE], [FEATURE_6_DESCRIPTION], [METRIC_1], [METRIC_1_LABEL], [METRIC_2], [METRIC_2_LABEL], [METRIC_3], [METRIC_3_LABEL], [TESTIMONIAL_1], [TESTIMONIAL_AUTHOR_1], [TESTIMONIAL_ROLE_1], [TESTIMONIAL_AVATAR_1], [TESTIMONIAL_2], [TESTIMONIAL_AUTHOR_2], [TESTIMONIAL_ROLE_2], [TESTIMONIAL_AVATAR_2], [PARTNER_1], [PARTNER_LOGO_1], [PARTNER_2], [PARTNER_LOGO_2], [PARTNER_3], [PARTNER_LOGO_3], [FOUNDER_NAME], [FOUNDER_ROLE], [FOUNDER_BIO], [FOUNDER_IMAGE], [FOUNDER_LINKEDIN], [FOUNDER_TWITTER], [STARTUP_NAME]

export const heroContent = {
  headline: "Launch your product with confidence",
  subheadline:
    "A focused landing template that helps you validate demand and ship faster.",
  primaryCta: "Join the waitlist",
  secondaryCta: "Learn more",
  image: "/hero.svg",
};

export const problemContent = {
  sectionLabel: "The Problem",
  headline: "Teams lose momentum before they launch.",
  painPoints: [
    {
      id: 1,
      title: "Too much setup",
      stat: "78%",
      description: "Founders spend more time wiring tools than talking to customers.",
    },
    {
      id: 2,
      title: "Slow launches",
      stat: "3x",
      description: "Small changes take longer than expected and slow momentum.",
    },
    {
      id: 3,
      title: "Unclear messaging",
      stat: "2B",
      description: "Great products struggle to explain their value fast enough.",
    },
  ],
};

export const solutionContent = {
  sectionLabel: "Our Solution",
  headline: "A landing template that gets you live in days, not weeks.",
  coreFeatures: [
    {
      id: 1,
      label: "Edit copy in one place",
      description: "All content lives in a single file for fast updates.",
    },
    {
      id: 2,
      label: "Built-in waitlist",
      description: "Collect emails with client and server validation out of the box.",
    },
    {
      id: 3,
      label: "SEO ready",
      description: "Metadata, Open Graph, and sitemap are already configured.",
    },
  ],
};

export const featuresContent = {
  sectionLabel: "Features",
  headline: "Everything you need, nothing you don't.",
  features: [
    {
      icon: "Zap",
      title: "Fast setup",
      description: "Start from a clear structure with sensible defaults.",
    },
    {
      icon: "Shield",
      title: "Security headers",
      description: "CSP and security headers included by default.",
    },
    {
      icon: "BarChart2",
      title: "Conversion focused",
      description: "Sections follow a proven narrative for clarity.",
    },
    {
      icon: "Globe",
      title: "SEO ready",
      description: "Metadata, sitemap, and robots are preconfigured.",
    },
    {
      icon: "Lock",
      title: "Validation built in",
      description: "Zod schemas used on both client and server.",
    },
    {
      icon: "Layers",
      title: "Easy to extend",
      description: "Add or remove sections without touching layout logic.",
    },
  ],
};

export const socialProofContent = {
  sectionLabel: "Trusted by builders",
  metrics: [
    { value: "2 weeks", label: "Average time to launch" },
    { value: "150+", label: "Teams shipped" },
    { value: "98%", label: "Positive feedback" },
  ],
  testimonials: [
    {
      id: 1,
      quote: "We went from draft to live page in a weekend. The copy flow is great.",
      author: "Alex Kim",
      role: "Founder, Horizon",
      avatar: "/avatars/alex.svg",
    },
    {
      id: 2,
      quote: "The structure keeps everyone aligned. We shipped faster and tested more.",
      author: "Jamie Patel",
      role: "Product Lead, Northwind",
      avatar: "/avatars/jamie.svg",
    },
  ],
  partners: [
    { name: "Acme", logo: "/logos/acme.svg" },
    { name: "Northwind", logo: "/logos/northwind.svg" },
    { name: "Globex", logo: "/logos/globex.svg" },
  ],
};

export const teamContent = {
  sectionLabel: "Team",
  headline: "Small team, sharp focus.",
  members: [
    {
      name: "Taylor Reed",
      role: "Founder",
      bio: "Product focused builder with a background in growth and design.",
      image: "/team/taylor.svg",
      linkedin: "https://www.linkedin.com/in/taylorreed",
      twitter: "https://x.com/taylorreed",
    },
  ],
};

export const ctaContent = {
  headline: "Ready to launch?",
  subheadline: "Join the waitlist and get updates as we roll out new features.",
  buttonLabel: "Get early access",
};

export const footerContent = {
  legal: {
    privacyUrl: "/privacy",
    termsUrl: "/terms",
    cookiesUrl: "/cookies",
  },
  copyright: `(c) ${new Date().getFullYear()} Startup Name. All rights reserved.`,
};
