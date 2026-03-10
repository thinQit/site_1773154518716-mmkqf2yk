export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface SectionBase {
  id: string;
  type: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

export interface PageBlueprint {
  path: string;
  name: string;
  sections: SectionBase[];
}

export interface SiteConfig {
  projectName: string;
  displayName: string;
  tagline: string;
  seo: {
    title: string;
    description: string;
  };
  navigation: NavItem[];
}
