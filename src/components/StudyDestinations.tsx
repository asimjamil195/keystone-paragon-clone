import { Card, CardContent } from "@/components/ui/card";

const StudyDestinations = () => {
  const destinations = [
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      description: "World-class universities and rich academic heritage"
    },
    {
      country: "United States",
      flag: "🇺🇸", 
      description: "Leading research institutions and diverse programs"
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      description: "High-quality education in a vibrant multicultural environment"
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      description: "Excellent education system with post-study work opportunities"
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      description: "Strong engineering programs and affordable education"
    },
    {
      country: "Turkey",
      flag: "🇹🇷",
      description: "Bridge between Europe and Asia with growing education sector"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Global Opportunities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Study
            <span className="gradient-primary bg-clip-text text-transparent"> Destinations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore world-class education opportunities across top destinations worldwide.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.country}
              className="group hover:shadow-elegant transition-all duration-500 animate-scale-in border-border/50 hover:border-primary/20 cursor-pointer hover:-translate-y-3 overflow-hidden relative"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 drop-shadow-lg">
                  {destination.flag}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 group-hover:scale-105 transform">
                  {destination.country}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {destination.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;