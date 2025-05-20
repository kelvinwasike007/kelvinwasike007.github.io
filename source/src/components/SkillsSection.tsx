
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Laptop, Globe, Monitor } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
      icon: <Monitor className="h-6 w-6 text-portfolio-blue" />,
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],
      icon: <Code className="h-6 w-6 text-portfolio-blue" />,
    },
    {
      category: "Tools & Methods",
      items: ["Git", "CI/CD", "Docker", "Agile", "Jest", "Webpack"],
      icon: <Laptop className="h-6 w-6 text-portfolio-blue" />,
    },
    {
      category: "Other Skills",
      items: ["UI/UX Basics", "SEO", "Performance Optimization", "Accessibility", "PWA"],
      icon: <Globe className="h-6 w-6 text-portfolio-blue" />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Tech Stack</h2>
          <p className="text-gray-600">
            I work with a variety of technologies and tools to build modern web applications.
            Here's a glimpse of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{skill.icon}</div>
                <CardTitle>{skill.category}</CardTitle>
                <CardDescription>Core technologies I work with</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-portfolio-blue"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            I'm always learning and expanding my skillset to stay current with the latest web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
