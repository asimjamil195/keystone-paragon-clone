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
              className="group hover:shadow-elegant transition-all duration-300 animate-scale-in border-border/50 hover:border-primary/20 cursor-pointer hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {destination.flag}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {destination.country}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {destination.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;