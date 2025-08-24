import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, GraduationCap, CheckCircle } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  program: z.string().min(1, "Please select a program"),
  destination: z.string().min(1, "Please select a study destination"),
  message: z.string().optional(),
  currentEducation: z.string().min(1, "Please select your current education level"),
  budget: z.string().min(1, "Please select your budget range"),
});

type FormData = z.infer<typeof formSchema>;

const ApplyNow = () => {
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
      message: "",
      currentEducation: "",
      budget: "",
    },
  });

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

  const educationLevels = [
    "High School",
    "Intermediate/A-Levels",
    "Bachelor's Degree",
    "Master's Degree",
    "Other"
  ];

  const budgetRanges = [
    "$10,000 - $20,000",
    "$20,000 - $30,000",
    "$30,000 - $50,000",
    "$50,000 - $75,000",
    "$75,000+"
  ];

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate form submission
      console.log("Form data:", data);
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you within 24 hours.",
      });
      
      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center animate-fade-up">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Application Submitted!
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Thank you for your application. Our education consultants will review your information and contact you within 24 hours.
              </p>
              <div className="space-y-4">
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Submit Another Application
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-accent-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Apply for Your Dream Education
            </h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
              Take the first step towards your global education journey. Fill out our comprehensive application form and let our expert consultants guide you to success.
            </p>
          </div>

          {/* Application Form */}
          <div className="max-w-4xl mx-auto animate-fade-up">
            <Card className="shadow-elegant bg-background/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-foreground">
                  Student Application Form
                </CardTitle>
                <p className="text-muted-foreground">
                  Please provide accurate information so we can provide you with the best guidance.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                        Personal Information
                      </h3>
                      
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
                    </div>

                    {/* Education Details */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                        Education Details
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="currentEducation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Education Level *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your current education level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {educationLevels.map((level) => (
                                    <SelectItem key={level} value={level.toLowerCase().replace(/\s+/g, '-')}>
                                      {level}
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
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
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

                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget Range *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your budget range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {budgetRanges.map((range) => (
                                    <SelectItem key={range} value={range.toLowerCase().replace(/\s+/g, '-')}>
                                      {range}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                        Additional Information
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tell us about yourself</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Share your academic background, career goals, specific interests, or any questions you have..."
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        className="w-full gradient-primary hover:shadow-glow transition-all duration-300 group text-lg py-6"
                        disabled={form.formState.isSubmitting}
                      >
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service. 
                      We'll use your information to provide you with personalized education guidance and will never share it with third parties.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplyNow;