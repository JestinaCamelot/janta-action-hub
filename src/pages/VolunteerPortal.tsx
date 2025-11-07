import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, FileText, Heart, MessageSquare, Camera, Megaphone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const volunteerSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone must be at least 10 digits").max(15),
  city: z.string().trim().min(2, "City is required").max(100),
  skills: z.string().trim().max(500),
  availability: z.string().min(1, "Please select availability"),
  interests: z.array(z.string()).min(1, "Please select at least one area of interest"),
  experience: z.string().trim().max(1000),
});

type VolunteerFormData = z.infer<typeof volunteerSchema>;

const VolunteerPortal = () => {
  const { toast } = useToast();
  const form = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      skills: "",
      availability: "",
      interests: [],
      experience: "",
    },
  });

  const onSubmit = (data: VolunteerFormData) => {
    console.log("Volunteer signup:", data);
    toast({
      title: "Application Submitted!",
      description: "Thank you for volunteering. We'll contact you soon with next steps.",
    });
    form.reset();
  };

  const interestAreas = [
    { id: "field-advocacy", label: "Field Advocacy & Mobilization", icon: Megaphone },
    { id: "social-media", label: "Social Media & Content", icon: Camera },
    { id: "legal-research", label: "Legal Research & Documentation", icon: FileText },
    { id: "community-support", label: "Community Support", icon: Heart },
    { id: "event-management", label: "Event Management", icon: Users },
    { id: "media-outreach", label: "Media & Communications", icon: MessageSquare },
  ];

  const upcomingEvents = [
    {
      title: "Community Town Hall: Healthcare Accountability",
      date: "March 15, 2025",
      location: "Mumbai Community Center",
      type: "Public Meeting",
    },
    {
      title: "Volunteer Training Workshop",
      date: "March 22, 2025",
      location: "Online via Zoom",
      type: "Training",
    },
    {
      title: "Road Safety Campaign Launch",
      date: "April 5, 2025",
      location: "Multiple Cities",
      type: "Campaign",
    },
  ];

  const resources = [
    {
      title: "Volunteer Handbook",
      description: "Complete guide to volunteering with Janta Foundation",
      type: "PDF Guide",
    },
    {
      title: "Advocacy Best Practices",
      description: "Learn effective community mobilization strategies",
      type: "Training Material",
    },
    {
      title: "Legal Rights Guide",
      description: "Know your rights as a citizen advocate",
      type: "Resource Document",
    },
    {
      title: "Social Media Toolkit",
      description: "Templates and guidelines for online advocacy",
      type: "Templates",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Volunteer Community
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Be part of a movement that's making real change. Whether you can spare a few hours a week 
                or want to dive deep into advocacy work, there's a place for you at Janta Foundation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Volunteer Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Volunteer With Us?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Make Real Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work on issues that affect real people. See tangible results from your advocacy efforts.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-accent mb-2" />
                  <CardTitle>Build Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connect with like-minded citizens who care about accountability and justice.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Megaphone className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Learn & Grow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Develop advocacy, research, and communication skills while making a difference.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Volunteer Signup Form */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Volunteer Application Form</CardTitle>
                  <CardDescription>
                    Fill out the form below to join our volunteer network. We'll match you with opportunities 
                    that align with your skills and interests.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 XXXXXXXXXX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="availability"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Availability *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your availability" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="few-hours-week">A few hours per week</SelectItem>
                                <SelectItem value="few-hours-month">A few hours per month</SelectItem>
                                <SelectItem value="weekends">Weekends only</SelectItem>
                                <SelectItem value="flexible">Flexible schedule</SelectItem>
                                <SelectItem value="full-time">Full-time commitment</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="interests"
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel>Areas of Interest *</FormLabel>
                              <p className="text-sm text-muted-foreground">
                                Select all areas where you'd like to contribute
                              </p>
                            </div>
                            <div className="space-y-3">
                              {interestAreas.map((area) => (
                                <FormField
                                  key={area.id}
                                  control={form.control}
                                  name="interests"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={area.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(area.id)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, area.id])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== area.id
                                                    )
                                                  );
                                            }}
                                          />
                                        </FormControl>
                                        <div className="flex items-center gap-2">
                                          <area.icon className="h-4 w-4 text-primary" />
                                          <FormLabel className="font-normal">
                                            {area.label}
                                          </FormLabel>
                                        </div>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="skills"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Skills & Expertise</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="e.g., Legal background, social media management, graphic design, event planning..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Previous Volunteer Experience</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about any previous volunteering or advocacy work (optional)"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" variant="cta" size="lg" className="w-full">
                        Submit Application
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Badge className="w-fit mb-2">{event.type}</Badge>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Register Interest
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Volunteer Resources</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <CardDescription className="mt-2">{resource.description}</CardDescription>
                      </div>
                      <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">{resource.type}</Badge>
                    <Button variant="link" className="mt-2 px-0">
                      Download Resource →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VolunteerPortal;
