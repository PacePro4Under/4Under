import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertDemoRequestSchema } from "@shared/schema";

const formSchema = insertDemoRequestSchema.extend({
  name: z.string().min(1, "Name is required"),
  course: z.string().min(1, "Course name is required"),
  role: z.string().min(1, "Role is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(1, "Phone number is required"),
  comments: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function RequestDemo() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      course: "",
      role: "",
      email: "",
      phone: "",
      comments: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ["/api/demo-requests"] });
      toast({
        title: "Request Submitted!",
        description: "We'll be in touch within 24 hours to schedule your onboarding session.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-golf-green mb-4">
                Request Submitted!
              </CardTitle>
              <CardDescription className="text-lg">
                Thank you for your interest in 4Under. We'll be in touch within 24 hours to schedule your free trial and onboarding session.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 mb-6">
                In the meantime, feel free to explore our features or contact us directly with any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = "/features"}
                  variant="outline" 
                  className="border-golf-green text-golf-green hover:bg-golf-green hover:text-white"
                >
                  Explore Features
                </Button>
                <Button 
                  onClick={() => window.location.href = "/contact"}
                  className="bg-golf-green hover:bg-golf-hover text-white"
                >
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Start Your Free Trial
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
              Get two weeks of full access — plus a 1-on-1 onboarding session.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Free Trial Request
              </CardTitle>
              <CardDescription className="text-center">
                Tell us about your course and we'll get you set up with 4Under.
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
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Golf course or facility name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role *</FormLabel>
                        <FormControl>
                          <Input placeholder="General Manager, Pro Shop Manager, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@course.com" {...field} />
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
                        <FormLabel>Phone *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your current pace management challenges or any specific questions..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-golf-green hover:bg-golf-hover text-white py-3 text-lg font-semibold"
                  >
                    {submitMutation.isPending ? "Submitting..." : "Start Free Trial"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-golf-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">We'll Contact You</h3>
                <p className="text-slate-600">Within 24 hours to schedule your onboarding session.</p>
              </div>
              <div className="text-center">
                <div className="bg-golf-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Setup Session</h3>
                <p className="text-slate-600">We'll configure 4Under for your specific course operation.</p>
              </div>
              <div className="text-center">
                <div className="bg-golf-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Start Using 4Under</h3>
                <p className="text-slate-600">Begin your free trial with full access to all features.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}