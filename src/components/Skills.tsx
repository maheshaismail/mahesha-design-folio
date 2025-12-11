import { Card } from "@/components/ui/card";
import { Palette, Smartphone, Monitor, Figma, Image } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Figma className="w-8 h-8" />,
      title: "Design Tools",
      skills: ["Figma", "Adobe Photoshop", "Adobe XD"],
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      skills: ["Responsive Design", "User Interface", "Prototyping"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Design",
      skills: ["Mobile UI", "User Experience", "Wireframing"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      skills: ["Logo Design", "Poster Design", "Flyer Design"],
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Other Skills",
      skills: ["Document Design", "Brand Identity", "Color Theory"],
    },
  ];

  const competencies = [
    { name: "UI Design", level: 95 },
    { name: "UX Research", level: 90 },
    { name: "Prototyping", level: 92 },
    { name: "Graphic Design", level: 88 },
    { name: "Visual Design", level: 93 },
  ];

  return (
    <section id="skills" className="section-padding bg-muted">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 transition-all duration-500 hover:w-32"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tools and skills I use to bring creative visions to life
          </p>
        </AnimatedSection>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} animation="scale-up" delay={index * 0.1}>
              <Card className="p-6 text-center card-hover group h-full">
                <div className="flex justify-center text-primary mb-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                  {category.icon}
                </div>
                <h3 className="font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                  {category.title}
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="transition-colors duration-300 hover:text-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Competency Levels */}
        <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Core Competencies</h3>
          <div className="space-y-6">
            {competencies.map((competency, index) => (
              <CompetencyBar key={index} competency={competency} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Separate component for animated progress bars
const CompetencyBar = ({ competency, index }: { competency: { name: string; level: number }; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-2">
        <span className="font-medium transition-colors duration-300 group-hover:text-primary">
          {competency.name}
        </span>
        <span className="text-muted-foreground transition-all duration-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
            transitionDelay: `${index * 0.1 + 0.5}s`
          }}
        >
          {competency.level}%
        </span>
      </div>
      <div className="w-full bg-muted-foreground/20 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${competency.level}%` : '0%',
            transitionDelay: `${index * 0.1}s`
          }}
        />
      </div>
    </div>
  );
};

export default Skills;
