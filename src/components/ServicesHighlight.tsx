import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, Users, Star, ArrowRight } from "lucide-react";

const ServicesHighlight = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "IELTS Preparation",
      description: "Comprehensive IELTS training with expert guidance to achieve your target band score",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: FileText,
      title: "Student Visa",
      description: "Complete visa application support with 95% success rate for student visas",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&crop=center",
      color: "from-green-500 to-green-700"
    },
    {
      icon: Users,
      title: "Tailored Solutions for Students",
      description: "Personalized guidance crafted specifically for your academic goals and career aspirations",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Star,
      title: "Trusted By Hundreds",
      description: "Join hundreds of successful students who achieved their dreams with our expert guidance",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop&crop=center",
      color: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up-stagger" style={{ animationDelay: "0.2s" }}>
            Comprehensive support for your international education journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-elegant transition-all duration-700 animate-fade-up-stagger border-border/50 hover:border-primary/30 overflow-hidden bg-background/60 backdrop-blur-sm hover:-translate-y-4"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <service.icon className="w-16 h-16 mx-auto mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500" />
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:animate-wiggle">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="group/btn w-full text-lg py-6 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-up-stagger" style={{ animationDelay: "0.8s" }}>
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
    </section>
  );
};

export default ServicesHighlight;