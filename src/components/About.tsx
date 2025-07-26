import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import teamImage from "@/assets/team-meeting.jpg";

const About = () => {
  const stats = [{
    icon: Users,
    number: "500+",
    label: "Students Placed"
  }, {
    icon: Target,
    number: "98%",
    label: "Visa Success Rate"
  }, {
    icon: Award,
    number: "15+",
    label: "Years Experience"
  }, {
    icon: TrendingUp,
    number: "25+",
    label: "Partner Universities"
  }];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
              About Keystone
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Welcome to
              <span className="gradient-primary bg-clip-text text-transparent"> Keystone Consultants</span>
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed text-foreground">
              Keystone Consultants is your trusted partner for study-abroad planning and admissions. From our office in Lahore, we help students explore universities in the UK, USA, Australia, Canada, and other destinations. Our experienced counsellors simplify the complex admission and visa processes, offer one‑to‑one guidance, and recommend programs that align with your goals.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether it's undergrad, postgrad, or professional study — we support you from application to arrival.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center animate-scale-in" style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 gradient-primary rounded-lg">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button className="gradient-primary hover:shadow-glow transition-all duration-300">
              Book Free Consultation
            </Button>
          </div>

          {/* Image */}
          <div className="animate-fade-up" style={{
            animationDelay: "0.3s"
          }}>
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <img src={teamImage} alt="Keystone Consultancy Team" className="w-full h-[500px] object-cover" />
                <div className="p-8 gradient-hero">
                  <h3 className="text-xl font-bold text-white mb-2">Your Success, Our Mission</h3>
                  <p className="text-white/90">
                    Our dedicated team of education counsellors works tirelessly to turn your study abroad dreams into reality.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;