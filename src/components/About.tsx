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
  return;
};
export default About;