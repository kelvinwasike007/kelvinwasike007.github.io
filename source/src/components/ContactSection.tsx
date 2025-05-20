
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, Github, Linkedin, Instagram } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            I'm always open to new opportunities, collaborations, or just a friendly chat about web development.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
              <p className="text-gray-600">
                Feel free to reach out to me through any of these channels. I usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-blue/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">your.email@example.com</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Me On</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-100 p-3 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 p-3 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 p-3 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-900">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-900">
                  Your Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-900">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="I'd like to talk about..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
