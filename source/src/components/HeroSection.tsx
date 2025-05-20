
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent -z-10"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <p className="text-portfolio-blue font-semibold">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Web App Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              I build exceptional digital experiences that live on the web
            </p>
            <div className="text-gray-600 max-w-md">
              I am a specialized web application developer focused on creating interactive, 
              responsive, and high-performance applications that solve real-world problems.
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="bg-portfolio-blue hover:bg-portfolio-darkBlue px-6 py-6 text-base"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/5 px-6 py-6 text-base"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-bounce-subtle">
              <div className="absolute inset-0 bg-portfolio-blue rounded-full opacity-10"></div>
              <div className="absolute inset-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Developer" 
                  className="w-full h-full object-cover rounded-full p-4" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
