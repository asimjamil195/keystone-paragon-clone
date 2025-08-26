import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, GraduationCap, CheckCircle } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  program: z.string().min(1, "Please select a program"),
  destination: z.string().min(1, "Please select a study destination"),
  message: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

const ApplyNowForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      program: "",
      destination: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      const { error } = await supabase
        .from('applications')
        .insert({
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          program: data.program,
          destination: data.destination,
          message: data.message || null
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you within 24 hours."
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  const programs = [
    "Undergraduate Degree",
    "Master's Degree", 
    "PhD/Doctorate",
    "Professional Certification",
    "Language Course",
    "Foundation Program"
  ];

  const destinations = [
    "United Kingdom",
    "United States",
    "Australia", 
    "Canada",
    "Germany",
    "Turkey",
    "Other"
  ];

  if (isSubmitted) {
    return (
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-up">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Application Submitted!
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Thank you for your application. Our education consultants will review your information and contact you within 24 hours.
            </p>
            <Button 
              onClick={() => {
                setIsSubmitted(false);
                setIsVisible(false);
                form.reset();
              }}
              variant="outline"
              className="border-white/30 bg-teal-300 hover:bg-teal-200 text-zinc-900 font-semibold"
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Take the first step towards your global education. Fill out our application form and let our experts guide you to success.
          </p>
          
          {!isVisible && (
            <Button 
              onClick={() => setIsVisible(true)}
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 text-lg group transition-all duration-300 hover:shadow-glow animate-scale-in"
            >
              Apply Now
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
        </div>

        {/* Application Form */}
        {isVisible && (
          <div className="max-w-4xl mx-auto animate-fade-up">
            <Card className="shadow-elegant bg-background/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Application Form
                </CardTitle>
                <p className="text-muted-foreground">
                  Please provide your details and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
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

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+92 300 0000000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="program"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Desired Program *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select program type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {programs.map((program) => (
                                  <SelectItem key={program} value={program.toLowerCase().replace(/\s+/g, '-')}>
                                    {program}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="destination"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Study Destination *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select destination" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {destinations.map((destination) => (
                                  <SelectItem key={destination} value={destination.toLowerCase().replace(/\s+/g, '-')}>
                                    {destination}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your academic background, career goals, and any specific requirements..."
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit" 
                        className="flex-1 gradient-primary hover:shadow-glow transition-all duration-300 group"
                        disabled={form.formState.isSubmitting}
                      >
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                      
                      <Button 
                        type="button"
                        variant="outline" 
                        onClick={() => setIsVisible(false)}
                        className="border-white/30 text-primary hover:bg-primary/5 transition-colors"
                      >
                        Close Form
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service. 
                      We'll use your information to provide you with personalized education guidance.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default ApplyNowForm;