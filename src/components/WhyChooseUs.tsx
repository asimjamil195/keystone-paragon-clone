import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Heart, Award, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCard from "@/components/AnimatedCard";
import { useStaggeredAnimation } from "@/hooks/useIntersectionObserver";

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

  const [ref, visibleItems] = useStaggeredAnimation(features.length, 150);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-16">
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
        </ScrollReveal>

        {/* Features Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-700 ${
                visibleItems.has(index) 
                  ? 'animate-fade-up opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <AnimatedCard 
                hoverAnimation="float"
                clickAnimation="bounce"
                className="h-full border-border/50 hover:border-primary/20 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:shadow-glow transition-all duration-500 group-hover:scale-125 group-hover:animate-pulse-glow">
                    <feature.icon className="w-8 h-8 text-primary-foreground group-hover:animate-heartbeat" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;