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
import { Calendar, Phone, CheckCircle } from "lucide-react";
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredTime: z.string().min(1, "Please select your preferred time"),
  consultationType: z.string().min(1, "Please select consultation type"),
  message: z.string().optional()
});
type FormData = z.infer<typeof formSchema>;
const BookConsultation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    toast
  } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      preferredTime: "",
      consultationType: "",
      message: ""
    }
  });
  const timeSlots = ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM"];
  const consultationTypes = ["General Study Abroad Consultation", "University Selection Guidance", "Scholarship Information", "Visa Application Support", "Career Counseling"];
  const onSubmit = async (data: FormData) => {
    try {
      console.log("Consultation booking:", data);
      toast({
        title: "Consultation Booked Successfully!",
        description: "We'll contact you within 2 hours to confirm your appointment."
      });
      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "Please try again or call us directly.",
        variant: "destructive"
      });
    }
  };
  if (isSubmitted) {
    return <div className="min-h-screen">
        <Header />
        <main className="py-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center animate-fade-up">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Consultation Booked!
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Thank you for booking a free consultation. Our expert consultants will contact you within 2 hours to confirm your appointment.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-white/30 bg-teal-300 hover:bg-teal-200 text-zinc-900 font-semibold">
                Book Another Consultation
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen">
      <Header />
      
      <main className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-accent-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
              Get personalized guidance from our education experts. Schedule a free 30-minute consultation to discuss your study abroad goals and create a customized plan for your success.
            </p>
          </div>

          <div className="max-w-2xl mx-auto animate-fade-up">
            <Card className="shadow-elegant bg-background/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
                  <Phone className="w-8 h-8 text-primary" />
                  Free Consultation Booking
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll contact you to schedule your consultation.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="fullName" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      
                      <FormField control={form.control} name="email" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                    </div>

                    <FormField control={form.control} name="phone" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+92 300 0000000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="preferredTime" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Preferred Time *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select preferred time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map(time => <SelectItem key={time} value={time.toLowerCase().replace(/\s+/g, '-')}>
                                    {time}
                                  </SelectItem>)}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>} />

                      <FormField control={form.control} name="consultationType" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Consultation Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select consultation type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {consultationTypes.map(type => <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                                    {type}
                                  </SelectItem>)}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>} />
                    </div>

                    <FormField control={form.control} name="message" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about your study goals, preferred destinations, or any specific questions..." rows={4} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <Button type="submit" className="w-full gradient-primary hover:shadow-glow transition-all duration-300 group text-lg py-6" disabled={form.formState.isSubmitting}>
                      <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      {form.formState.isSubmitting ? "Booking..." : "Book Free Consultation"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Your consultation is completely free with no obligations. We're here to help you make informed decisions about your education journey.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default BookConsultation;