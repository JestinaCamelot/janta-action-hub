import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Newspaper, 
  Users, 
  Target,
  TrendingUp,
  Scale,
  Heart
} from "lucide-react";

const Campaigns = () => {
  const campaigns = [
    {
      id: "hospital-overcharging",
      title: "Fighting Hospital Overcharging",
      status: "active",
      category: "Healthcare",
      description: "Investigating and challenging unfair medical billing practices in private hospitals across Maharashtra.",
      problem: "Families are being charged 5-10 times the actual cost of medical procedures, with hidden fees and opaque billing practices. Emergency patients are being held hostage until exorbitant bills are paid.",
      actions: [
        "Collected 500+ testimonies from affected families",
        "Filed legal complaints with the Medical Council",
        "Organized peaceful protests at 3 major hospitals",
        "Secured media coverage in 15+ major outlets",
        "Drafted policy recommendations for transparent billing"
      ],
      timeline: [
        { date: "Jan 2025", event: "Campaign launched after viral case of ₹45 lakh bill for dengue treatment" },
        { date: "Feb 2025", event: "First legal complaint filed with supporting evidence from 200 families" },
        { date: "Mar 2025", event: "Health Ministry agrees to review hospital billing regulations" },
        { date: "Ongoing", event: "Collecting more testimonies and building pressure for systemic change" }
      ],
      outcomes: [
        "2 hospitals agreed to review and reduce bills for affected families",
        "Media pressure forced government to announce billing transparency task force",
        "Created template for families to dispute unfair charges"
      ],
      media: [
        { outlet: "Times of India", headline: "Citizens Unite Against Hospital Overcharging", date: "Feb 15, 2025" },
        { outlet: "NDTV", headline: "Janta Foundation Exposes Medical Billing Scam", date: "Feb 22, 2025" },
        { outlet: "The Hindu", headline: "Healthcare Accountability Movement Gains Steam", date: "Mar 1, 2025" }
      ],
      impact: {
        peopleHelped: "500+",
        mediaReach: "2M+",
        legalActions: "3",
        partnersJoined: "12"
      }
    },
    {
      id: "road-safety",
      title: "Pothole-Free Roads Initiative",
      status: "completed",
      category: "Infrastructure",
      description: "Successful campaign to repair dangerous potholes in Mumbai suburbs that claimed 3 lives in 2024.",
      problem: "Monsoon season left roads in critical condition. Multiple accidents occurred, including 3 fatalities. Municipal corporation was unresponsive despite repeated complaints.",
      actions: [
        "Documented 150+ dangerous potholes with geo-tagged photos",
        "Organized community march with 2,000 residents",
        "Created viral social media campaign #MumbaiPotholeChallenge",
        "Met with municipal officials and presented detailed report",
        "Threatened legal action under Right to Safe Infrastructure"
      ],
      timeline: [
        { date: "Aug 2024", event: "Campaign launched after third pothole-related death" },
        { date: "Sep 2024", event: "Community documentation drive completed" },
        { date: "Oct 2024", event: "Mass march and media briefing" },
        { date: "Nov 2024", event: "Municipal corporation committed to emergency repairs" },
        { date: "Dec 2024", event: "All critical potholes repaired; campaign declared success" }
      ],
      outcomes: [
        "All 150 identified potholes repaired within 2 months",
        "Municipal corporation established dedicated pothole reporting system",
        "Zero pothole-related accidents in target area since Dec 2024",
        "Model replicated by citizens in 5 other cities"
      ],
      media: [
        { outlet: "Mumbai Mirror", headline: "Citizens Force BMC's Hand on Pothole Crisis", date: "Oct 10, 2024" },
        { outlet: "Indian Express", headline: "Grassroots Campaign Saves Lives", date: "Nov 2, 2024" },
        { outlet: "BBC Hindi", headline: "How One Foundation Made Mumbai Roads Safer", date: "Dec 15, 2024" }
      ],
      impact: {
        peopleHelped: "50,000+",
        mediaReach: "5M+",
        legalActions: "1",
        partnersJoined: "8"
      }
    },
    {
      id: "education-access",
      title: "Right to Quality Education",
      status: "planning",
      category: "Education",
      description: "Upcoming campaign to ensure government schools have basic infrastructure and qualified teachers.",
      problem: "Survey of 50 government schools revealed 70% lack basic facilities like toilets, drinking water, and qualified teachers. Dropout rates are increasing.",
      actions: [
        "Conducting comprehensive survey of 100 schools",
        "Building coalition with parent-teacher associations",
        "Preparing detailed report with evidence and recommendations",
        "Planning series of public hearings in affected areas"
      ],
      timeline: [
        { date: "Apr 2025", event: "Campaign launch planned" },
        { date: "May 2025", event: "School survey completion target" },
        { date: "Jun 2025", event: "First public hearing scheduled" },
        { date: "Q3 2025", event: "Policy advocacy with Education Department" }
      ],
      outcomes: [
        "Campaign in planning phase - outcomes pending"
      ],
      media: [],
      impact: {
        peopleHelped: "TBD",
        mediaReach: "TBD",
        legalActions: "0",
        partnersJoined: "5"
      }
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: { variant: "default" as const, icon: AlertCircle, text: "Active Campaign" },
      completed: { variant: "secondary" as const, icon: CheckCircle2, text: "Completed" },
      planning: { variant: "outline" as const, icon: Clock, text: "In Planning" }
    };
    const config = variants[status as keyof typeof variants];
    const Icon = config.icon;
    return (
      <Badge variant={config.variant} className="flex items-center gap-1 w-fit">
        <Icon className="h-3 w-3" />
        {config.text}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Advocacy Campaigns
              </h1>
              <p className="text-lg text-muted-foreground">
                Every campaign represents real people facing real issues. Through citizen mobilization, 
                legal action, and sustained pressure, we're creating accountability and driving systemic change.
              </p>
            </div>
          </div>
        </section>

        {/* Campaign Stats Overview */}
        <section className="py-12 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Total Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Policy Changes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Partner Organizations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div className="flex flex-wrap items-center gap-3">
                        {getStatusBadge(campaign.status)}
                        <Badge variant="outline">{campaign.category}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Full Report
                        </Button>
                        <Button variant="cta" size="sm">
                          Join Campaign
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">{campaign.title}</CardTitle>
                    <CardDescription className="text-base">{campaign.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="actions">Actions</TabsTrigger>
                        <TabsTrigger value="timeline">Timeline</TabsTrigger>
                        <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
                        <TabsTrigger value="media">Media</TabsTrigger>
                      </TabsList>

                      <TabsContent value="overview" className="space-y-6 mt-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Target className="h-5 w-5 text-primary" />
                            The Problem
                          </h3>
                          <p className="text-muted-foreground">{campaign.problem}</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4 pt-4 border-t">
                          <div className="text-center p-4 bg-primary/5 rounded-lg">
                            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                            <div className="text-2xl font-bold">{campaign.impact.peopleHelped}</div>
                            <div className="text-xs text-muted-foreground">People Helped</div>
                          </div>
                          <div className="text-center p-4 bg-accent/5 rounded-lg">
                            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-accent" />
                            <div className="text-2xl font-bold">{campaign.impact.mediaReach}</div>
                            <div className="text-xs text-muted-foreground">Media Reach</div>
                          </div>
                          <div className="text-center p-4 bg-primary/5 rounded-lg">
                            <Scale className="h-8 w-8 mx-auto mb-2 text-primary" />
                            <div className="text-2xl font-bold">{campaign.impact.legalActions}</div>
                            <div className="text-xs text-muted-foreground">Legal Actions</div>
                          </div>
                          <div className="text-center p-4 bg-accent/5 rounded-lg">
                            <Heart className="h-8 w-8 mx-auto mb-2 text-accent" />
                            <div className="text-2xl font-bold">{campaign.impact.partnersJoined}</div>
                            <div className="text-xs text-muted-foreground">Partners</div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="actions" className="mt-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          Our Actions
                        </h3>
                        <ul className="space-y-3">
                          {campaign.actions.map((action, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>

                      <TabsContent value="timeline" className="mt-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          Campaign Timeline
                        </h3>
                        <div className="space-y-4">
                          {campaign.timeline.map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="h-3 w-3 rounded-full bg-primary" />
                                {idx < campaign.timeline.length - 1 && (
                                  <div className="w-0.5 h-full bg-primary/30 my-1" />
                                )}
                              </div>
                              <div className="flex-1 pb-4">
                                <div className="font-semibold text-primary">{item.date}</div>
                                <div className="text-muted-foreground mt-1">{item.event}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="outcomes" className="mt-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          Results & Impact
                        </h3>
                        {campaign.outcomes.length > 0 ? (
                          <ul className="space-y-3">
                            {campaign.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                                <TrendingUp className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-muted-foreground">Outcomes will be updated as the campaign progresses.</p>
                        )}
                      </TabsContent>

                      <TabsContent value="media" className="mt-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Newspaper className="h-5 w-5 text-primary" />
                          Media Coverage
                        </h3>
                        {campaign.media.length > 0 ? (
                          <div className="space-y-3">
                            {campaign.media.map((article, idx) => (
                              <Card key={idx}>
                                <CardContent className="p-4">
                                  <div className="flex items-start justify-between gap-4">
                                    <div>
                                      <div className="font-semibold">{article.headline}</div>
                                      <div className="text-sm text-muted-foreground mt-1">
                                        {article.outlet} • {article.date}
                                      </div>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                      Read →
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground">Media coverage will be added as the campaign gains traction.</p>
                        )}
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Have an Issue That Needs Attention?
              </h2>
              <p className="text-muted-foreground mb-8">
                If you or your community is facing injustice, we want to hear from you. 
                Together, we can build a campaign for accountability.
              </p>
              <Button variant="cta" size="lg">
                Report an Issue
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Campaigns;
