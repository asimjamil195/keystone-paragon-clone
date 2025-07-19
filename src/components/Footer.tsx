import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      "Strategic Planning",
      "Financial Advisory", 
      "Leadership Development",
      "Operations Excellence",
      "Digital Transformation",
      "Innovation Consulting"
    ],
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "News & Insights",
      "Case Studies",
      "Contact"
    ],
    resources: [
      "Blog",
      "Whitepapers",
      "Webinars",
      "Industry Reports",
      "Best Practices",
      "FAQ"
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4 text-accent">
              Keystone Consultants
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering students to achieve global success through personalized education guidance.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-3 text-accent" />
                <span>Lahore, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                <span>+92 327 7787888</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                <span>keystoneconsultants786@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Stay Connected</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Subscribe to our newsletter for insights and industry updates.
            </p>
            
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-primary-light/20 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-accent"
              />
              <Button className="w-full bg-accent hover:bg-accent-light text-accent-foreground">
                Subscribe
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-8 h-8 bg-primary-light/20 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-light/20 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-light/20 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
              © 2024 Keystone Consultants. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center hover:bg-accent-light transition-colors group"
              >
                <ArrowUp className="w-4 h-4 text-accent-foreground group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;