export type NavLink = {
  label: string;
  href: string;
};

export type Brand = {
  id: number;
  name: string;
  image: string;
};

export type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type PricingFeature = {
  text: string;
  included: boolean;
};

export type PricingPlan = {
  id: number;
  name: string;
  description: string;
  monthlyPrice: number;
  isRecommended?: boolean;
  features: PricingFeature[];
};

export type ToolItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type IntegrationItem = {
  id: number;
  name: string;
  image: string;
};

export type StepItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type ReasonItem = {
  id: number;
  title: string;
  description: string;
};

export type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
};

export type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

export type FooterLinkGroup = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};
