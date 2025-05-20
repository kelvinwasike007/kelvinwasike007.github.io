
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="bg-portfolio-blue/10 w-full h-full absolute -right-4 -bottom-4 rounded-lg"></div>
              <img
                src="/placeholder.svg"
                alt="About Me"
                className="rounded-lg w-full relative z-10 shadow-md"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block h-1 w-10 bg-portfolio-blue"></span>
              <span>About Me</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate web application developer with expertise in creating modern, 
              responsive, and user-friendly web applications. With over 5 years of experience 
              in the field, I've worked on a wide range of projects from small business websites 
              to complex enterprise applications.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My approach to development is centered around understanding the core business 
              problems and delivering solutions that not only meet but exceed expectations. 
              I believe in clean code, best practices, and staying updated with the latest 
              technologies and frameworks to ensure my clients get the best possible results.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="outline" 
                className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/5"
              >
                My Journey
              </Button>
              <Button 
                variant="ghost" 
                className="text-gray-700"
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Skills
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
