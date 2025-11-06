import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const callbackFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9]{10}$/, { message: "Phone number must be exactly 10 digits" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  preferredTime: z
    .string()
    .trim()
    .min(1, { message: "Please select a preferred time" }),
  supportType: z
    .string()
    .trim()
    .min(1, { message: "Please select support type" }),
  details: z
    .string()
    .trim()
    .min(20, { message: "Please provide at least 20 characters of detail" })
    .max(500, { message: "Details must be less than 500 characters" }),
});

type CallbackFormValues = z.infer<typeof callbackFormSchema>;

const CallbackRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<CallbackFormValues>({
    resolver: zodResolver(callbackFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferredTime: "",
      supportType: "",
      details: "",
    },
  });

  const onSubmit = async (data: CallbackFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Callback Request Received!",
      description: "Our team will contact you at your preferred time. Thank you for your patience.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
              </div>
              <CardTitle className="text-3xl">Request a Callback for Support</CardTitle>
              <CardDescription className="text-base">
                Need urgent assistance or want to discuss your case? Fill out this form and our team will
                call you back at your preferred time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="10-digit mobile number" {...field} />
                          </FormControl>
                          <FormDescription>
                            We'll call you on this number
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select preferred time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                              <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="supportType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type of Support *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select support type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="legal">Legal Assistance</SelectItem>
                              <SelectItem value="medical">Medical/Healthcare Issue</SelectItem>
                              <SelectItem value="consumer">Consumer Rights</SelectItem>
                              <SelectItem value="road-safety">Road Safety Complaint</SelectItem>
                              <SelectItem value="emergency">Emergency Support</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brief Details of Your Case *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide a brief description of your situation and how we can help..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          This helps us prepare for the call and connect you with the right team member
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Our team typically responds within 24 hours during business
                      days. For urgent matters, please call our helpline directly at +91 98765 43210.
                    </p>
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting Request..." : "Request Callback"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallbackRequestForm;
