import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Ahmed",
      university: "University of Cambridge, UK",
      image: "👩‍🎓",
      quote: "Keystone Consultants made my dream of studying at Cambridge a reality. Their guidance through the application process was invaluable.",
      rating: 5
    },
    {
      name: "Muhammad Ali",
      university: "MIT, USA",
      image: "👨‍🎓",
      quote: "The visa support and scholarship guidance helped me secure my place at MIT. I'm forever grateful to the Keystone team.",
      rating: 5
    },
    {
      name: "Fatima Khan",
      university: "University of Toronto, Canada",
      image: "👩‍🎓",
      quote: "Professional, honest, and incredibly supportive. They helped me find the perfect program that matched my career goals.",
      rating: 5
    },
    {
      name: "Hassan Malik",
      university: "University of Melbourne, Australia",
      image: "👨‍🎓",
      quote: "From IELTS preparation to visa application, Keystone guided me every step of the way to Australia.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our
            <span className="gradient-primary bg-clip-text text-transparent"> Students Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Hear from students who've successfully achieved their study abroad dreams with our guidance.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="shadow-elegant">
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-6 animate-scale-in">
                {testimonials[currentIndex].image}
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>

              <blockquote className="text-xl text-foreground font-medium mb-6 leading-relaxed animate-fade-up">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h4 className="text-lg font-bold text-foreground mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-primary font-semibold">
                  {testimonials[currentIndex].university}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary-light transition-all duration-300 flex items-center justify-center shadow-card hover:shadow-glow"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary-light transition-all duration-300 flex items-center justify-center shadow-card hover:shadow-glow"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;