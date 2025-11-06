import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

const FeaturedCampaignSection = () => {
  return (
    <section id="campaigns" className="py-20">
      <div className="container mx-auto px-4">
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-accent" />
              <Badge variant="secondary" className="text-sm">Active Campaign</Badge>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Our Active Focus: Fighting Hospital Overcharging
            </h2>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-lg text-muted-foreground">
              We're currently investigating and challenging unfair medical billing practices in private
              hospitals. Through citizen testimonies, legal action, and media pressure, we're demanding
              transparent pricing and accountability to protect patients from exploitation.
            </p>
            <Button variant="cta" size="lg">
              See Details and Take Action
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedCampaignSection;
