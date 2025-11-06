import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-advocacy.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Community advocacy in action"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            Advocating for Accountability. Mobilizing Citizens.
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Janta Foundation works on everyday public issues—from road safety to healthcare
            accountability—by mobilising citizens, supporting affected families, and engaging
            authorities to drive fair, people-first outcomes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="cta" size="lg" className="text-base">
              Get Involved <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
