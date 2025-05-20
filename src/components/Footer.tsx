
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              DevPortfolio
            </a>
            <p className="mt-2 text-gray-400 max-w-xs">
              Creating exceptional web experiences with modern technologies and clean design.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex space-x-4 justify-center md:justify-end">
              <a
                href="#"
                className="hover:text-portfolio-lightBlue transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-portfolio-lightBlue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-portfolio-lightBlue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="hover:text-portfolio-lightBlue transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
