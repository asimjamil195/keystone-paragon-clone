import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
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
  return <>
      {/* Top Bar */}
      

      {/* Main Navigation */}
      <header className="backdrop-blur-sm border-b sticky top-0 z-50 bg-slate-50">
        <div className="container mx-auto px-4 bg-slate-50">
          <div className="flex justify-between items-center py-4 rounded-md bg-gray-50">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img src="/lovable-uploads/9680bc2e-0b02-4b16-a021-028af5bacf18.png" alt="Keystone Consultants Pvt. Ltd." className="h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
              
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map(item => <Link key={item.name} to={item.href} className="text-foreground hover:text-primary transition-colors font-medium">
                  {item.name}
                </Link>)}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to="/book-consultation">
                <Button className="gradient-primary hover:shadow-glow transition-all duration-300">
                  Book Free Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && <div className="md:hidden border-t py-4 animate-fade-up">
              <nav className="flex flex-col space-y-4">
                {navigation.map(item => <Link key={item.name} to={item.href} className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>)}
                <Link to="/book-consultation">
                  <Button className="gradient-primary mt-4 w-fit">
                    Book Free Consultation
                  </Button>
                </Link>
              </nav>
            </div>}
        </div>
      </header>
    </>;
};
export default Header;