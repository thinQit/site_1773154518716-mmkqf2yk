"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Flame, HeartPulse, Shield, Sparkles, Timer, Trophy, Users, Zap, Activity } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Activity, 
  Sparkles,
  Shield,
  Zap,
  Users,
  Trophy,
  Flame,
  Timer,
  HeartPulse,
  Dumbbell,
};

export default function FeaturesGrid({
  badge = 'WHY TRAIN WITH US',
  headline = 'Built For Results',
  subheadline = 'High-intensity classes, expert coaching, and science-backed programming designed for every fitness level.',
  features = [],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Dumbbell;
            return (
              <Card key={index} className="border-0 bg-background shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {React.createElement(Icon, { className: 'h-6 w-6' })}
                  </div>
                  <h3 className="text-xl font-bold uppercase text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
