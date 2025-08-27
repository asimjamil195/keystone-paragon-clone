import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    destinations: [
      { name: "Study in UK", href: "/destinations/uk" },
      { name: "Study in USA", href: "/destinations/usa" },
      { name: "Study in Australia", href: "/destinations/australia" },
      { name: "Study in Canada", href: "/destinations/canada" },
      { name: "Study in Malaysia", href: "/destinations/malaysia" },
      { name: "Study in Turkey", href: "/destinations/turkey" }
    ],
    usefulLinks: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "FAQs", href: "/faqs" },
      { name: "IELTS Preparation", href: "/ielts" }
    ]
  };

  return (
    <footer className="gradient-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4 text-white">
              Keystone Consultants
            </div>
            <p className="text-white/80 mb-8 leading-relaxed text-sm">
              Keystone Overseas Education is one of the fastest growing education and career networks in Pakistan.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61567704159184" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/keystoneconsultants" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/keystoneconsultants" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/company/keystoneconsultants" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/keystoneconsultants" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact With Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-3 text-white mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">keystoneconsultants786@gmail.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="w-4 h-4 mr-3 text-white mt-1 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <div>0327 7787888</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-white mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Corporate Office, 27-A<br />
                  Commercial, Izmir Town,<br />
                  Lahore
                </span>
              </div>
            </div>
          </div>

          {/* Destination */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Destination</h3>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Useful Links</h3>
            <ul className="space-y-3">
              {footerLinks.usefulLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/80 mb-4 md:mb-0">
              © 2024 Keystone Consultants. All rights reserved.
            </div>
            
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors group shadow-lg z-50"
            >
              <ArrowUp className="w-5 h-5 text-accent-foreground group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;