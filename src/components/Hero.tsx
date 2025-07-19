import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-consultancy.jpg";

const Hero = () => {
  const benefits = [
    "Expert Strategic Guidance",
    "Proven Track Record",
    "Tailored Solutions",
    "24/7 Support"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Professional consultancy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
              Premium Business Consultancy
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block gradient-accent bg-clip-text text-transparent">
                Business Vision
              </span>
              Into Reality
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              At Keystone Consultancy, we provide strategic guidance and innovative solutions 
              that drive sustainable growth and unlock your business potential.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit}
                  className="flex items-center text-white/90 animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 text-lg group transition-all duration-300 hover:shadow-glow"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float hidden lg:block"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl animate-float hidden lg:block" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;