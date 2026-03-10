import "@/app/globals.css";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";
import type { ReactNode } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Classes", href: "/classes" },
  { label: "Services", href: "/services" },
  { label: "Trainers", href: "/trainers" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

const FOOTER_COLUMNS = [
  {
    title: "Programs",
    links: [
      { label: "Personal Training", href: "/services#personal-training" },
      { label: "Group Classes", href: "/classes" },
      { label: "CrossFit", href: "/services#crossfit" },
      { label: "Yoga & Mobility", href: "/services#yoga" },
      { label: "Nutrition Coaching", href: "/services#nutrition" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Coaches", href: "/trainers" },
      { label: "Membership", href: "/membership" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "112 W 23rd St, New York, NY", href: "/contact#location" },
      { label: "(212) 555‑0198", href: "tel:+12125550198" },
      { label: "hello@ironpeakfitness.com", href: "mailto:hello@ironpeakfitness.com" },
    ],
  },
];

export const metadata = {
  title: "Iron Peak Fitness | Premium Gym, CrossFit, Yoga & Personal Training in NYC",
  description:
    "Iron Peak Fitness is a premium gym in Chelsea offering personal training, coach-led group classes, CrossFit, yoga & mobility, and nutrition coaching. Claim a free 7-day trial.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NavbarSticky
          logo="IRON PEAK"
          navItems={NAV_ITEMS}
          ctaLabel="Start Free Trial"
          ctaHref="/free-trial"
        />
        <div className="flex min-h-[60vh] flex-col">{children}</div>
        <FooterMultiColumn
          brand="IRON PEAK FITNESS"
          description="Premium coaching. High-performance training. Real community."
          columns={FOOTER_COLUMNS}
          copyright="© 2026 Iron Peak Fitness. All rights reserved."
        />
      </body>
    </html>
  );
}
