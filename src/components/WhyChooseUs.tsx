import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Heart, Award, Globe } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Personalized Counselling",
      description: "One-on-one guidance tailored to your unique academic goals and career aspirations."
    },
    {
      icon: Heart,
      title: "Honest, Student-Centric Advice",
      description: "Transparent guidance focused on your success, not just university placements."
    },
    {
      icon: Award,
      title: "Visa & Scholarship Expertise",
      description: "Expert assistance with visa applications and scholarship opportunities to reduce costs."
    },
    {
      icon: Globe,
      title: "Global University Network",
      description: "Access to top universities across UK, USA, Australia, Canada, and more destinations."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose
            <span className="gradient-primary bg-clip-text text-transparent"> Keystone?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We're committed to providing exceptional guidance and support throughout your study abroad journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-elegant transition-all duration-300 animate-scale-in border-border/50 hover:border-primary/20 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;