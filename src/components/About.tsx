import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import teamImage from "@/assets/team-meeting.jpg";
const About = () => {
  const stats = [{
    icon: Users,
    number: "500+",
    label: "Clients Served"
  }, {
    icon: Target,
    number: "98%",
    label: "Success Rate"
  }, {
    icon: Award,
    number: "15+",
    label: "Years Experience"
  }, {
    icon: TrendingUp,
    number: "300%",
    label: "Average Growth"
  }];
  return <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
              About Keystone
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in
              <span className="gradient-primary bg-clip-text text-transparent"> Business Excellence</span>
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed font-medium text-gray-950">Keystone Consultants is your trusted partner for study‑abroad planning and admissions. From our office in Lahore, we help aspiring students explore universities in the UK, USA, Australia, Canada and other destinations. Our experienced education counsellors simplify complex admission and visa processes, offer one‑to‑one guidance and recommend programmes that align with each student’s goals. Whether you’re seeking undergraduate degrees, postgraduate programmes or professional certifications, our team delivers accurate information and personalized support. 
          </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed font-medium text-lg">Begin your global education journey with confidence, contact us today to book a free consultation.
          </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => <div key={stat.label} className="text-center animate-scale-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 gradient-primary rounded-lg">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>)}
            </div>

            <Button className="gradient-primary hover:shadow-glow transition-all duration-300">
              Discover Our Story
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
                  <h3 className="text-xl font-bold text-white mb-2">Excellence in Every Detail</h3>
                  <p className="text-white/90">
                    Our commitment to quality and innovation has made us the preferred 
                    choice for businesses seeking transformational growth.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;