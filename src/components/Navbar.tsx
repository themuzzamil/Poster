
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Shield, Menu, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-secondary" />
            <span className="text-xl font-bold text-primary font-poppins">
              Sparklex Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-secondary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">Call Now</span>
            </a>
            <Link to="/quote">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-700 hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <a
                      href="tel:+1234567890"
                      className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors mb-4"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">Call Now</span>
                    </a>
                    <Link to="/quote" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                        Get Free Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
