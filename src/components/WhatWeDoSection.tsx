import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Users, HandHeart } from "lucide-react";

const pillars = [
  {
    icon: Megaphone,
    title: "Advocacy & Awareness",
    description: "Peaceful campaigns, petitions, and media briefings on civic and consumer-rights issues.",
    link: "#campaigns"
  },
  {
    icon: HandHeart,
    title: "Community Support",
    description: "On-ground help during local crises and need-based drives with volunteers and partners.",
    link: "#about"
  },
  {
    icon: Users,
    title: "Citizen Engagement",
    description: "Events, talks, and collaborations with local groups to build informed participation.",
    link: "#about"
  }
];

const WhatWeDoSection = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What We Do</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We work across three core pillars to create meaningful change in our communities
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base">
                    {pillar.description}
                  </CardDescription>
                  <Button variant="link" className="p-0">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
