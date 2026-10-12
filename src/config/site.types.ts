export interface NavLink {
  label: string;
  href: string;
}

export interface ListingItem {
  badge: string;
  title: string;
  zone: string;
  operation: string;
  price: string;
  detail: string;
  icon: string;
}

export interface SiteConfig {
  meta: {
    lang: string;
    siteName: string;
    tagline: string;
    description: string;
    city: string;
    province: string;
    isDemo: boolean;
    disclaimerBanner: string;
  };
  brand: {
    logoText: string;
    colors: {
      primary: string;
      primaryDark: string;
      primaryLight: string;
      accent: string;
      ink: string;
    };
    fontHeading: string;
    fontBody: string;
  };
  nav: NavLink[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    trustPoints: string[];
  };
  listings: {
    heading: string;
    subheading: string;
    items: ListingItem[];
  };
  contactInfo: {
    heading: string;
    subheading: string;
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    location: string;
    hours: { day: string; hours: string }[];
    hoursBadge: string;
  };
  contactForm: {
    heading: string;
    subheading: string;
    nameLabel: string;
    phoneLabel: string;
    messageLabel: string;
    submitLabel: string;
    successMessage: string;
    mailSubjectTemplate: string;
    mailBodyTemplate: string;
  };
  footer: {
    businessName: string;
    rubroLine: string;
    demoDisclaimer: string;
  };
}
