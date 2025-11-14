import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "School Web Design",
      description: "A comprehensive school website design focusing on easy navigation, information accessibility, and modern aesthetics suitable for educational institutions.",
      category: "Web Design",
      link: "https://www.figma.com/design/HnVBWuGxFEvPnmpqn8FHrQ/Untitled?node-id=6-2",
      tools: ["Figma", "UI/UX"],
    },
    {
      title: "E-Learning App",
      description: "A mobile-first e-learning application designed to provide seamless online education experience with intuitive course navigation and interactive learning modules.",
      category: "App Design",
      link: "https://www.figma.com/design/EDaeRVv5pYD8C8PhBYaGpx/E-Learning-App",
      tools: ["Figma", "Mobile UI"],
    },
    {
      title: "Holy Trio",
      description: "An interactive prototype showcasing modern design principles with smooth transitions and user-friendly interface elements.",
      category: "Prototype",
      link: "https://www.figma.com/proto/6nHURraVdU05Jjq4uEBQfE?node-id=7-37",
      tools: ["Figma", "Prototyping"],
    },
    {
      title: "JTex Website",
      description: "A professional business website design emphasizing brand identity, product showcase, and customer engagement through clean and modern interface.",
      category: "Web Design",
      link: "https://www.figma.com/proto/Zbo4OaaX3JKzoFLgb8DQYj/JTEX?node-id=1-12",
      tools: ["Figma", "Branding"],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in web design, mobile apps, and interactive prototypes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-hover group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-primary">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Button variant="default" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
