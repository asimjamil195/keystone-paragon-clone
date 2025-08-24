import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImage from "@/assets/hero-consultancy.jpg";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional consultancy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {/* First Slide: Your Gateway to Global Education */}
              <CarouselItem>
                <div className="animate-slide-down">
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Educational Consultant
                  </span>
                  
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Your Gateway to
                    <span className="block gradient-accent bg-clip-text text-transparent">
                      Global Education
                    </span>
                  </h1>
                  
                  <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Empowering students to achieve global success through personalized education guidance and expert support at every step.
                  </p>
                </div>
              </CarouselItem>

              {/* Second Slide: Services */}
              <CarouselItem>
                <div className="animate-slide-down">
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Services
                  </span>
                  
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    <span className="gradient-accent bg-clip-text text-transparent">
                      Study Abroad
                    </span>
                  </h1>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                      <h3 className="font-semibold">Scholarships</h3>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                      <h3 className="font-semibold">Visa Support</h3>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                      <h3 className="font-semibold">Career Counselling</h3>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                      <h3 className="font-semibold">Study Abroad</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Third Slide: Study Destinations */}
              <CarouselItem>
                <div className="animate-slide-down">
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Study Destinations
                  </span>
                  
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    <span className="gradient-accent bg-clip-text text-transparent">
                      Top Destinations
                    </span>
                  </h1>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center hover:bg-white/20 transition-all duration-300">
                      <div className="text-4xl mb-2">🇬🇧</div>
                      <h3 className="font-bold text-xl">UK</h3>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center hover:bg-white/20 transition-all duration-300">
                      <div className="text-4xl mb-2">🇺🇸</div>
                      <h3 className="font-bold text-xl">USA</h3>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center hover:bg-white/20 transition-all duration-300">
                      <div className="text-4xl mb-2">🇦🇺</div>
                      <h3 className="font-bold text-xl">Australia</h3>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center hover:bg-white/20 transition-all duration-300">
                      <div className="text-4xl mb-2">🇨🇦</div>
                      <h3 className="font-bold text-xl">Canada</h3>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center hover:bg-white/20 transition-all duration-300">
                      <div className="text-4xl mb-2">🇹🇷</div>
                      <h3 className="font-bold text-xl">Turkey</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            
            <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float hidden lg:block"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl animate-float hidden lg:block" style={{
        animationDelay: "2s"
      }}></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-float hidden lg:block" style={{
        animationDelay: "4s"
      }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-accent/15 rounded-full blur-lg animate-float hidden lg:block" style={{
        animationDelay: "1s"
      }}></div>
    </section>
  );
};
export default Hero;