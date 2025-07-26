import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, GraduationCap } from "lucide-react";

const ApplyNowForm = () => {
  const [isVisible, setIsVisible] = useState(false);

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
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input 
                      placeholder="Enter your full name" 
                      className="transition-all duration-300 focus:shadow-card" 
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="transition-all duration-300 focus:shadow-card" 
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number *
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+92 300 0000000" 
                    className="transition-all duration-300 focus:shadow-card" 
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Desired Program *
                    </label>
                    <Select>
                      <SelectTrigger className="transition-all duration-300 focus:shadow-card">
                        <SelectValue placeholder="Select program type" />
                      </SelectTrigger>
                      <SelectContent>
                        {programs.map((program) => (
                          <SelectItem key={program} value={program.toLowerCase().replace(/\s+/g, '-')}>
                            {program}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Study Destination *
                    </label>
                    <Select>
                      <SelectTrigger className="transition-all duration-300 focus:shadow-card">
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((destination) => (
                          <SelectItem key={destination} value={destination.toLowerCase().replace(/\s+/g, '-')}>
                            {destination}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your academic background, career goals, and any specific requirements..."
                    rows={4}
                    className="transition-all duration-300 focus:shadow-card"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 gradient-primary hover:shadow-glow transition-all duration-300 group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Submit Application
                  </Button>
                  
                  <Button 
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
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default ApplyNowForm;