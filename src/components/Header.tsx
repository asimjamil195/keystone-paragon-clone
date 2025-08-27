import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "About Us",
    href: "/about"
  }, {
    name: "Services",
    href: "/services"
  }, {
    name: "Apply Now",
    href: "/apply"
  }, {
    name: "Contact Us",
    href: "/contact"
  }];
  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Facebook className="h-4 w-4 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
            <Twitter className="h-4 w-4 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
            <Instagram className="h-4 w-4 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
            <Youtube className="h-4 w-4 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
            <Linkedin className="h-4 w-4 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>UAN: (+92) 304 1110947</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/lovable-uploads/7642fba6-17b9-460a-8c4e-4f8cab5f6473.png" 
                alt="Keystone Consultants Pvt. Ltd." 
                className="h-14 md:h-18 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map(item => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to="/apply">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 text-sm font-medium rounded-full">
                  APPLY NOW
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t py-4 animate-fade-up">
              <nav className="flex flex-col space-y-4">
                {navigation.map(item => (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className="text-foreground hover:text-primary transition-colors font-medium py-2" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/apply">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 w-fit px-6 py-2 text-sm font-medium rounded-full">
                    APPLY NOW
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
export default Header;