import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Heart, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* President Section */}
        <div className="mb-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Leadership</h2>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-bold text-primary">Quazi Zeeshan Siddique</h3>
                  <p className="mb-6 text-lg text-muted-foreground">President & Founder</p>
                  <div className="mx-auto max-w-3xl space-y-4 text-left">
                    <p className="text-base leading-relaxed">
                      Quazi Zeeshan Siddique is a dedicated advocate for citizen rights and public accountability,
                      bringing years of experience in community mobilization and civic engagement. As the founder
                      and president of Janta Foundation, he has been instrumental in leading peaceful campaigns
                      that address critical public issues affecting everyday citizens.
                    </p>
                    <p className="text-base leading-relaxed">
                      With a deep commitment to transparency and justice, Zeeshan has successfully mobilized
                      communities across various causes—from healthcare reform to road safety—ensuring that
                      the voices of affected families are heard by authorities. His leadership style combines
                      grassroots activism with strategic media engagement, creating lasting impact on policy
                      and public discourse.
                    </p>
                    <p className="text-base leading-relaxed">
                      Under his guidance, Janta Foundation has become a trusted platform for citizens seeking
                      accountability in consumer rights, healthcare pricing, and public safety matters. His
                      vision is to build an informed, engaged citizenry that actively participates in shaping
                      fair and people-first outcomes in their communities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Core Values</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Principles that guide every campaign and initiative we undertake
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold">Accountability</h3>
              <p className="text-sm text-muted-foreground">
                Holding authorities and institutions responsible for their actions and decisions
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Ensuring open, honest communication in all our advocacy efforts
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold">Empathy</h3>
              <p className="text-sm text-muted-foreground">
                Supporting affected families with compassion and practical assistance
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold">Citizen-First</h3>
              <p className="text-sm text-muted-foreground">
                Prioritizing the needs and rights of everyday people in all decisions
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Stats */}
        <div className="mt-16">
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-8 text-center text-2xl font-bold">Our Impact</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">50+</div>
                <p className="text-muted-foreground">Campaigns Launched</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">1000+</div>
                <p className="text-muted-foreground">Families Supported</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">25+</div>
                <p className="text-muted-foreground">Policy Changes Influenced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
