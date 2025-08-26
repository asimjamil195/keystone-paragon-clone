import { UserCheck, Building2, DollarSign, Settings, MessageSquare, Luggage } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ServicesHighlight = () => {
  const services = [
    {
      icon: UserCheck,
      title: "Career Counseling",
      description: "At Keystone Consultants, we provide an amazing opportunity to connect with our highly qualified and well-trained study abroad consultants."
    },
    {
      icon: Building2,
      title: "Selection of University",
      description: "Our team of best consultants will guide you in selecting the best course for your degree and guide in detail about available options."
    },
    {
      icon: DollarSign,
      title: "Scholarships",
      description: "We will help you get merit-based scholarships, making sure that even with limited scholarships or grants, you can shine on an international platform."
    },
    {
      icon: Settings,
      title: "Application Handling",
      description: "We manage the entire documentation procedure for your admission. Our team informs you while taking every step so you are always aware about the application progress."
    },
    {
      icon: MessageSquare,
      title: "Interview Preparation",
      description: "Our professionals will guide you in completing all visa forms correctly and educate you on how to respond to questions asked during your visa interview."
    },
    {
      icon: Luggage,
      title: "Pre-Departure Briefing",
      description: "We will give you a detailed explanation of what to do upon arrival at your destination, guaranteeing a smooth and stress-free arrival."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
              OUR SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              OUR TOP-NOTCH SERVICES
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="text-center group hover-lift">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesHighlight;