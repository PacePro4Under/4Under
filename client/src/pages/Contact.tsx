import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Mail, Phone, Clock } from "lucide-react";
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
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll respond within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
            Have a question? Want to talk through your course's pace challenges?
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white p-12 rounded-lg shadow-sm">
            <div className="w-20 h-20 bg-golf-light rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail className="golf-green h-10 w-10" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              cameron.cox.golf@gmail.com
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              You'll speak directly with Cameron — a PGA professional who built 4Under from the ground up to fix pace of play the right way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
