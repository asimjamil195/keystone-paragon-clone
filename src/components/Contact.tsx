import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ArrowRight,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Business District", "Karachi, Pakistan"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+92 300 1234567", "+92 21 1234567"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@keystoneconsultancy.com", "hello@keystoneconsultancy.com"],
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
            Let's Start Your
            <span className="gradient-primary bg-clip-text text-transparent"> Success Story</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Ready to take your business to the next level? Contact our expert team today 
            for a personalized consultation tailored to your unique needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Connect With Our Experts
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team is here to help you navigate challenges and seize opportunities. 
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="hover:shadow-card transition-all duration-300 animate-scale-in border-border/50"
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
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
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
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" className="transition-all duration-300 focus:shadow-card" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="transition-all duration-300 focus:shadow-card" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="transition-all duration-300 focus:shadow-card" 
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Company
                  </label>
                  <Input placeholder="Your Company" className="transition-all duration-300 focus:shadow-card" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project and how we can help..."
                    rows={4}
                    className="transition-all duration-300 focus:shadow-card"
                  />
                </div>

                <Button className="w-full gradient-primary hover:shadow-glow transition-all duration-300 group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;