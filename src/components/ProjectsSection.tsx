import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { title } from "process";

const projects = [
  {
    title: "Flappy Bird",
    description: "A clone of the classic Flappy Bird game",
    tags: ["React", "TypeScript", "Game"],
    github: "https://github.com/Alibosnina/flappybird"
  },
  {
    title: "citylife-sim Project",
    description: "A simulation game project",
    tags: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/Alibosnina/citylife-sim"
  },
  {
    title: "Machine Learning Research",
    description: "Research project on neural networks",
    tags: ["Python", "TensorFlow", "ML"],
    github: "#"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/Alibosnina/Alibosnina"
   },
   {
    title: "E-Mensa",
    description: "A web application for managing a university cafeteria",
    tags: ["PHP", "Laravel", "MariaDB"],
   }
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4 bg-[#1A1F2C]">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#00FF00]">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card 
            key={project.title} 
            className="p-6 bg-[#222831] border border-[#00FF00]/20 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-xl text-[#00FF00]">{project.title}</h3>
              <a href={project.github} className="text-gray-300 hover:text-[#00FF00]">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-[#00FF00]/10 text-[#00FF00] border-[#00FF00]/30">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;