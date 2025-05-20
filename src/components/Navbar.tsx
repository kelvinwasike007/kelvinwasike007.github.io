
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-portfolio-blue">
          DevPortfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-portfolio-blue transition-colors">
            About
          </a>
          <a href="#skills" className="text-gray-700 hover:text-portfolio-blue transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-gray-700 hover:text-portfolio-blue transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 hover:text-portfolio-blue transition-colors">
            Contact
          </a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue">
            Download Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <a
              href="#about"
              className="text-gray-700 hover:text-portfolio-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-portfolio-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-portfolio-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-portfolio-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue w-full">
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
