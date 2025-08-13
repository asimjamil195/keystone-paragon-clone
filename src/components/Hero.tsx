import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-consultancy.jpg";
const Hero = () => {
  const benefits = ["IELTS Preparation", "Student Visa", "Tailored Solutions for students", "Trusted By hundreds"];
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional consultancy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
              Educational Consultant
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Gateway to
              <span className="block gradient-accent bg-clip-text text-transparent">
                Global Education
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-4 max-w-2xl leading-relaxed">
              Study Abroad | Scholarships | Visa Support | Career Counselling
            </p>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              Empowering students to achieve global success through personalized education guidance and expert support at every step.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {benefits.map((benefit, index) => <div key={benefit} className="flex items-center text-white/90 animate-fade-up" style={{
              animationDelay: `${0.2 + index * 0.1}s`
            }}>
                  <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{
            animationDelay: "0.6s"
          }}>
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 text-lg group transition-all duration-300 hover:shadow-glow">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" className="bg-primary/20 border-primary text-white backdrop-blur-sm px-8 py-6 transition-all duration-300 hover:bg-primary/30">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float hidden lg:block"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl animate-float hidden lg:block" style={{
      animationDelay: "2s"
    }}></div>
    </section>;
};
export default Hero;