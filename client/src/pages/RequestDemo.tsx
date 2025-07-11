import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const demoFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  course: z.string().min(2, "Course name must be at least 2 characters"),
  role: z.string().min(1, "Please select your role"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  comments: z.string().optional(),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

export default function RequestDemo() {
  const { toast } = useToast();
  
  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      name: "",
      course: "",
      role: "",
      email: "",
      phone: "",
      comments: "",
    },
  });

  const submitDemoMutation = useMutation({
    mutationFn: async (data: DemoFormData) => {
      return apiRequest("POST", "/api/demo-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Thanks for reaching out!",
        description: "We'll be in touch shortly to schedule your free trial and onboarding call.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: DemoFormData) => {
    submitDemoMutation.mutate(data);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Start your free 2-week trial
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Includes full access + a personal onboarding session.
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-8 md:p-12">
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

              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Golf Course / Facility *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your course or facility name" {...field} />
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
                    <FormLabel>Your Role *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="general-manager">General Manager</SelectItem>
                        <SelectItem value="golf-professional">Golf Professional</SelectItem>
                        <SelectItem value="course-superintendent">Course Superintendent</SelectItem>
                        <SelectItem value="operations-manager">Operations Manager</SelectItem>
                        <SelectItem value="owner">Owner</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
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
                      <Input type="email" placeholder="Enter your email address" {...field} />
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
                      <Input type="tel" placeholder="Enter your phone number" {...field} />
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
                    <FormLabel>Additional Comments (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your specific needs or questions..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center pt-6">
                <Button 
                  type="submit" 
                  className="bg-golf-green text-white px-12 py-4 text-lg hover:bg-golf-dark shadow-lg"
                  disabled={submitDemoMutation.isPending}
                >
                  {submitDemoMutation.isPending ? "Submitting..." : "Start My Free Trial"}
                </Button>
                <p className="text-sm text-slate-500 mt-4">
                  * Required fields. We'll be in touch shortly to schedule your free trial and onboarding call.
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
