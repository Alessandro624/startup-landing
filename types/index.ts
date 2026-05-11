export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface WaitlistFormValues {
  email: string;
  name?: string;
}
