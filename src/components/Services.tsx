import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UserCheck, 
  GraduationCap, 
  FileText, 
  Award, 
  BookOpen, 
  Plane,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: UserCheck,
      title: "Personalized Career & Education Counselling",
      description: "One-on-one guidance to help you choose the right academic path and career direction.",
      features: ["Career Assessment", "Goal Setting", "Academic Planning"],
    },
    {
      icon: GraduationCap,
      title: "University & Programme Selection",
      description: "Expert advice on selecting the best universities and programs that match your profile.",
      features: ["University Matching", "Program Comparison", "Admission Requirements"],
    },
    {
      icon: FileText,
      title: "Application Assistance",
      description: "Complete support with university applications, essays, and documentation.",
      features: ["Application Forms", "Personal Statements", "Document Review"],
    },
    {
      icon: Award,
      title: "Scholarship & Financial Aid Guidance",
      description: "Help you find and apply for scholarships and financial aid opportunities.",
      features: ["Scholarship Research", "Application Support", "Financial Planning"],
    },
    {
      icon: BookOpen,
      title: "Standardised Test Preparation",
      description: "Comprehensive preparation for IELTS, SAT, GRE, GMAT and other required tests.",
      features: ["IELTS Training", "SAT/GRE/GMAT Prep", "Mock Tests"],
    },
    {
      icon: Plane,
      title: "Visa & Immigration Support",
      description: "Complete visa application assistance and pre-departure guidance.",
      features: ["Visa Documentation", "Interview Preparation", "Pre-departure Briefing"],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-block-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our
            <span className="gradient-primary bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive support for every step of your study abroad journey, from initial counselling to successful arrival.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 animate-gentle-rise border-border/50 hover:border-primary/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 gradient-primary rounded-lg flex items-center justify-center mb-4 transition-all duration-300">
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
        <div className="text-center animate-subtle-lift">
          <div className="gradient-hero rounded-2xl p-12 shadow-elegant">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Study Abroad Journey?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let our expert counsellors guide you through every step of the process and help you achieve your academic dreams.
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 hover:shadow-lg transition-all duration-300"
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