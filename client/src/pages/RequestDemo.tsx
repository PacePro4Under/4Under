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
import { useContentByPage, getContentValue } from "@/hooks/useContent";

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
  const { content, isLoading } = useContentByPage('demo');
  
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
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
            {isLoading ? 'Loading...' : getContentValue(content, 'demo_page_title', 'Start your free 2-week trial')}
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            {isLoading ? 'Loading...' : getContentValue(content, 'demo_page_subtitle', 'Includes full access + a personal onboarding session.')}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base sm:text-lg font-medium">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          className="py-3 sm:py-4 text-base sm:text-lg min-h-[48px] touch-manipulation"
                          {...field} 
                        />
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
                      <FormLabel className="text-base sm:text-lg font-medium">Course</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your course or facility name" 
                          className="py-3 sm:py-4 text-base sm:text-lg min-h-[48px] touch-manipulation"
                          {...field} 
                        />
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
                      <FormLabel className="text-base sm:text-lg font-medium">Role</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="py-3 sm:py-4 text-base sm:text-lg min-h-[48px] touch-manipulation">
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
                      <FormLabel className="text-lg font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Enter your email address" 
                          className="py-3 text-lg"
                          {...field} 
                        />
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
                      <FormLabel className="text-lg font-medium">Phone</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          className="py-3 text-lg"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-center pt-8">
                  <Button 
                    type="submit" 
                    className="bg-golf-green text-white px-12 py-4 text-lg hover:bg-golf-hover rounded-lg shadow-lg font-semibold"
                    disabled={submitDemoMutation.isPending}
                  >
                    {submitDemoMutation.isPending ? "Submitting..." : "Start My Free Trial"}
                  </Button>
                  <p className="text-slate-600 mt-6">
                    We'll be in touch shortly to schedule your free trial and onboarding call.
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
