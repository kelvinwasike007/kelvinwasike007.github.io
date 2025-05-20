
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Github, Link } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.",
      image: "/placeholder.svg",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, task assignments, and progress tracking features.",
      image: "/placeholder.svg",
      tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracking Dashboard",
      description:
        "An interactive dashboard for tracking fitness activities, goals, and nutrition with data visualization.",
      image: "/placeholder.svg",
      tech: ["React", "D3.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600">
            Here are some of my recent projects that showcase my skills and expertise in web application development.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="w-full lg:w-3/5">
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
              <div className="w-full lg:w-2/5 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-portfolio-blue/10 text-portfolio-blue px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue">
                    <Link className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-gray-300">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
