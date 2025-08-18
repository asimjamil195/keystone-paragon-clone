import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Apply Now", href: "#apply" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+92-327-7787888" className="flex items-center hover:text-accent transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +92 327 7787888
              </a>
              <a href="mailto:keystoneconsultants786@gmail.com" className="flex items-center hover:text-accent transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                keystoneconsultants786@gmail.com
              </a>
            </div>
            <div className="hidden md:block">
              <span className="text-accent font-semibold">Educational Consultant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/217a3d6e-6ae4-4524-a131-32c433063409.png" 
                alt="Keystone Consultants" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="text-xl font-bold gradient-primary bg-clip-text text-transparent hidden sm:block">
                Keystone Consultants
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="gradient-primary hover:shadow-glow transition-all duration-300">
                Book Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t py-4 animate-fade-up">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="gradient-primary mt-4 w-fit">
                  Book Free Consultation
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;