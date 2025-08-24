import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, Users, Star, ArrowRight } from "lucide-react";
const ServicesHighlight = () => {
  const services = [{
    icon: GraduationCap,
    title: "IELTS Preparation",
    description: "Comprehensive IELTS training with expert guidance to achieve your target band score",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center",
    color: "from-blue-500 to-blue-700"
  }, {
    icon: FileText,
    title: "Student Visa",
    description: "Complete visa application support with 95% success rate for student visas",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&crop=center",
    color: "from-green-500 to-green-700"
  }, {
    icon: Users,
    title: "Tailored Solutions for Students",
    description: "Personalized guidance crafted specifically for your academic goals and career aspirations",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center",
    color: "from-purple-500 to-purple-700"
  }, {
    icon: Star,
    title: "Trusted By Hundreds",
    description: "Join hundreds of successful students who achieved their dreams with our expert guidance",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop&crop=center",
    color: "from-orange-500 to-orange-700"
  }];
  return <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{
        animationDelay: "2s"
      }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <Badge variant="outline" className="px-6 py-3 text-sm font-semibold mb-6 animate-bounce-in">
            Our Core Services
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up-stagger">
            <span className="gradient-primary bg-clip-text text-transparent">Empowering</span>
            <br />
            <span className="text-foreground">Student Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up-stagger" style={{
          animationDelay: "0.2s"
        }}>
            Comprehensive support for your international education journey
          </p>
        </div>

        {/* Animated Pathway */}
        <div className="relative mb-16 max-w-6xl mx-auto">
          {/* Pathway SVG Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path d="M 50 200 Q 250 100 400 200 Q 550 300 750 200" stroke="url(#pathGradient)" strokeWidth="4" fill="none" className="animate-pulse-glow" />
              {/* Animated dots along path */}
              <circle r="6" fill="hsl(var(--primary))">
                <animateMotion dur="8s" repeatCount="indefinite">
                  <mpath href="#pathway" />
                </animateMotion>
              </circle>
              <circle r="4" fill="hsl(var(--accent))" opacity="0.7">
                <animateMotion dur="6s" repeatCount="indefinite" begin="2s">
                  <mpath href="#pathway" />
                </animateMotion>
              </circle>
            </svg>
          </div>
          
          {/* Service Steps */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {services.map((service, index) => <div key={service.title} className="group animate-fade-up-stagger relative" style={{
            animationDelay: `${index * 0.3}s`
          }}>
                {/* Connection Line to Next Step */}
                {index < services.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent animate-pulse opacity-60"></div>
                  </div>}
                
                {/* Service Card */}
                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 group-hover:scale-105">
                  <div className="relative p-8 text-center">
                    {/* Step Number */}
                    
                    
                    {/* Icon with animated background */}
                    <div className="relative mb-6 mt-4">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                      <div className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <service.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-500" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 gradient-primary bg-clip-text text-transparent group-hover:animate-wiggle">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Action Button */}
                    <Button variant="outline" size="sm" className="group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </Card>
              </div>)}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-up-stagger" style={{
        animationDelay: "0.8s"
      }}>
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who have achieved their international education dreams with our expert guidance.
            </p>
            <Button size="lg" className="gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-12 py-6">
              Book Free Consultation Today
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesHighlight;