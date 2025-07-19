import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Settings, 
  BarChart3, 
  Lightbulb,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Strategic Planning",
      description: "Comprehensive business strategy development and implementation guidance for sustainable growth.",
      features: ["Market Analysis", "Competitive Intelligence", "Growth Roadmaps"],
    },
    {
      icon: TrendingUp,
      title: "Financial Advisory",
      description: "Expert financial planning, budgeting, and investment strategies to optimize your resources.",
      features: ["Financial Modeling", "Investment Analysis", "Risk Management"],
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Transform your leadership capabilities and build high-performing teams that drive results.",
      features: ["Executive Coaching", "Team Building", "Change Management"],
    },
    {
      icon: Settings,
      title: "Operations Excellence",
      description: "Streamline processes and optimize operations for maximum efficiency and productivity.",
      features: ["Process Optimization", "Quality Management", "Performance Metrics"],
    },
    {
      icon: BarChart3,
      title: "Digital Transformation",
      description: "Navigate the digital landscape with cutting-edge technology solutions and strategies.",
      features: ["Technology Integration", "Digital Strategy", "Innovation Labs"],
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Foster innovation culture and develop breakthrough solutions for competitive advantage.",
      features: ["Innovation Strategy", "Product Development", "Market Entry"],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions for
            <span className="gradient-primary bg-clip-text text-transparent"> Every Challenge</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From strategic planning to digital transformation, we offer a full spectrum of 
            consultancy services designed to accelerate your business success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-elegant transition-all duration-300 animate-scale-in border-border/50 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/5 transition-colors p-0 h-auto justify-start font-semibold text-primary"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-up">
          <div className="gradient-hero rounded-2xl p-12 shadow-elegant">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let our experts analyze your unique challenges and craft a customized solution 
              that drives measurable results.
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 hover:shadow-glow transition-all duration-300"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;