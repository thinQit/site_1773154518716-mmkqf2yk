export const dynamic = 'force-dynamic';

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { Select } from "@/components/ui/select"
import { Meteors } from "@/components/ui/backgrounds/meteors"
import { Spotlight } from "@/components/ui/backgrounds/spotlight"
import { TypewriterEffect } from "@/components/ui/text/typewriter-effect"

import HeroSpotlight from "@/components/HeroSpotlight"
import StatsCounter from "@/components/StatsCounter"
import FeaturesGrid from "@/components/FeaturesGrid"
import TeamGrid from "@/components/TeamGrid"
import GalleryMasonry from "@/components/GalleryMasonry"
import ContactForm from "@/components/ContactForm"
import CTABanner from "@/components/CTABanner"
import TestimonialsGrid from "@/components/TestimonialsGrid"

export default function HomePage() {
  return (
    <main className="bg-[#0B0B0B] text-[#F5F5F5]">
      <section
        className="relative min-h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578047/site-images/fitness/13965335.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <HeroSpotlight
            title="A PREMIUM GYM BUILT FOR SERIOUS RESULTS"
            subtitle="Iron Peak Fitness combines elite coaching, CrossFit-level conditioning, yoga recovery, and nutrition strategy—powered by state-of-the-art equipment and a community that shows up."
            primaryCta={{ label: "Claim a Free 7‑Day Trial", href: "/free-trial" }}
            secondaryCta={{ label: "View Class Schedule", href: "/classes#schedule" }}
          />
        </div>
      </section>

      <StatsCounter
        stats={[
          { value: "60+", label: "Coach-led sessions weekly" },
          { value: "5", label: "Strength & conditioning zones" },
          { value: "3.8", label: "Avg. member check-ins / week" },
        ]}
        bgColor="#151515"
      />

      <section className="py-20 md:py-28 bg-[#111111]">
        <FeaturesGrid
          badge="Services"
          headline="TRAINING THAT COVERS EVERY ANGLE"
          subheadline="Choose your path—or combine them. Our coaches build programs that balance strength, conditioning, mobility, and recovery."
          features={[
            {
              icon: "Dumbbell",
              title: "Personal Training",
              description:
                "1:1 coaching with assessment, program design, and weekly progress tracking for strength goals, body recomposition, or returning from injury.",
            },
            {
              icon: "Flame",
              title: "Group Strength & Conditioning",
              description:
                "Coach-led sessions blending strength, intervals, and accessories with capped classes and scalable options for all levels.",
            },
            {
              icon: "Activity",
              title: "CrossFit",
              description:
                "High-intensity functional training focused on technique, progression, and benchmark tracking with beginner on-ramp support.",
            },
            {
              icon: "HeartPulse",
              title: "Yoga & Mobility",
              description:
                "Recovery-first yoga, breathwork, and mobility flows that keep your body resilient and your weekly training consistent.",
            },
            {
              icon: "Apple",
              title: "Nutrition Coaching",
              description:
                "Habit-based nutrition systems, check-ins, and practical meal structure to support performance and lasting body composition changes.",
            },
            {
              icon: "Sparkles",
              title: "Recovery & Performance",
              description:
                "Infrared sauna, mobility tools, and structured recovery protocols to improve sleep, reduce soreness, and support progress.",
            },
          ]}
        />
      </section>

      <section className="py-20 md:py-28 bg-[#0B0B0B]">
        <TeamGrid
          headline="COACHES WHO COACH"
          subheadline="You’re not here to wing it. Our team brings structured programming, sharp technique cues, and real accountability."
          members={[
            {
              name: "Alex Novak",
              title: "Head Coach • CrossFit & Performance",
              imageUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
              bio: "Former collegiate sprinter turned strength coach specializing in barbell mechanics and conditioning systems.",
            },
            {
              name: "Maya Chen",
              title: "Strength Coach • Personal Training",
              imageUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg",
              bio: "Technique-first strength expert focused on progressive overload, hypertrophy, and sustainable gains.",
            },
            {
              name: "Jordan Reyes",
              title: "Coach • Conditioning & Small Group",
              imageUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576876/site-images/corporate/1181252.jpg",
              bio: "Known for fast, focused sessions that scale intelligently for busy professionals and athletes alike.",
            },
            {
              name: "Priya Nair",
              title: "Yoga & Mobility Instructor",
              imageUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577700/site-images/hero-backgrounds/13551578.jpg",
              bio: "Blends vinyasa, mobility, and breathwork to accelerate recovery and improve movement quality.",
            },
          ]}
        />
      </section>

      <section className="py-20 md:py-28 bg-[#151515]">
        <GalleryMasonry
          headline="REAL WORK. REAL RESULTS."
          subheadline="Member wins powered by consistency, coaching, and a plan that fits real life."
          images={[
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg",
              alt: "Athlete performing heavy barbell deadlift",
              caption: "12-week strength rebuild",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576897/site-images/corporate/10041267.jpg",
              alt: "Member finishing conditioning circuit",
              caption: "Body recomposition transformation",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg",
              alt: "CrossFit class in action with coached lifting",
              caption: "First RX benchmark cycle",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578084/site-images/fitness/13106579.jpg",
              alt: "Recovery mobility session in studio",
              caption: "Mobility + recovery turnaround",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578092/site-images/fitness/13106581.jpg",
              alt: "Sled push power session on turf",
              caption: "Conditioning breakthrough",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577715/site-images/hero-backgrounds/1631677.jpg",
              alt: "Yoga recovery pose under low light",
              caption: "Consistency without burnout",
            },
          ]}
        />
      </section>

      <section className="py-20 md:py-28 bg-[#0B0B0B]">
        <TestimonialsGrid
          headline="THE DIFFERENCE IS COACHING"
          subheadline="Premium equipment is great. Premium coaching is what changes everything."
          testimonials={[
            {
              quote:
                "The programming is smart and the coaches actually correct form. I’m stronger, leaner, and my shoulders feel better than they have in years.",
              name: "Erin Wallace",
              title: "Member • 9 months",
              avatarUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
              rating: 5,
            },
            {
              quote:
                "Iron Peak is the first gym that made me truly consistent—classes run on time, coaching is dialed, and the atmosphere is serious but welcoming.",
              name: "Devon Patel",
              title: "Member • 6 months",
              avatarUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578091/site-images/fitness/136404.jpg",
              rating: 5,
            },
            {
              quote:
                "Nutrition coaching was the missing piece. The plan was realistic, and the weekly check-ins kept me on track without feeling restricted.",
              name: "Tasha Nguyen",
              title: "Member • 1 year",
              avatarUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578069/site-images/fitness/12905815.jpg",
              rating: 5,
            },
          ]}
        />
      </section>

      <section className="py-20 md:py-28 bg-[#111111]">
        <CTABanner
          headline="GET 7 DAYS FREE—NO PRESSURE, JUST TRAINING"
          description="Try classes, meet the coaches, and get a quick assessment so you know exactly where to start."
          ctaLabel="Claim Free Trial"
          ctaHref="/free-trial"
          secondaryCtaLabel="Call (212) 555‑0198"
          secondaryCtaHref="tel:+12125550198"
        />
      </section>

      <section className="py-20 md:py-28 bg-[#0B0B0B]">
        <ContactForm
          headline="VISIT IRON PEAK FITNESS"
          subheadline="Drop in, tour the facility, and talk goals with a coach. We’ll recommend the best starting plan."
          contactInfo={[
            { icon: "MapPin", label: "Address", value: "112 W 23rd St, New York, NY 10011" },
            { icon: "Phone", label: "Phone", value: "(212) 555‑0198" },
            { icon: "Mail", label: "Email", value: "hello@ironpeakfitness.com" },
          ]}
        />
      </section>
    </main>
  )
}
