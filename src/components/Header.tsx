import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Graphics", href: "#graphics" },
    { label: "Skills", href: "#skills" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-custom px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center gap-3 group"
          >
            <img 
              src={logo} 
              alt="MIAONEFKK Logo" 
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" 
            />
            <span className="text-xl font-bold text-gradient hidden sm:block transition-all duration-300 group-hover:tracking-wider">
              Ismail Mahesha
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all duration-300 py-2 link-underline"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="default" 
              asChild 
              className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-110' : ''}`}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 mt-4 pb-4' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-lg hover:translate-x-2"
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="default" 
              asChild 
              className="w-full mt-2 transition-all duration-300"
              style={{
                transitionDelay: isMobileMenuOpen ? `${menuItems.length * 50}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
