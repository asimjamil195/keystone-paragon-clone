import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ArrowRight,
  Send,
  Facebook
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: data.name,
          email: data.email,
          message: data.message
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours."
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting contact message:", error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+92 327 778 7888"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["keystoneconsultants786@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Lahore, Punjab, Pakistan"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in
            <span className="gradient-primary bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Ready to start your study abroad journey? Contact our expert team today for personalized guidance and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Connect With Our Education Experts
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our experienced counsellors are here to guide you through every step of your study abroad journey. 
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="hover:shadow-card transition-all duration-300 animate-scale-in border-border/50 hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-3">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button className="w-full gradient-primary hover:shadow-glow transition-all duration-300 group">
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="w-full hover:bg-primary/5 transition-colors">
                <Facebook className="w-5 h-5 mr-2" />
                Visit Facebook Page
              </Button>
            </div>

            {/* Google Map Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Google Map Location</p>
                <p className="text-sm text-muted-foreground">Lahore, Punjab, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
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
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="your.email@example.com" 
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your study abroad goals and how we can help..."
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
                      className="w-full gradient-primary hover:shadow-glow transition-all duration-300 group"
                      disabled={isSubmitting}
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;