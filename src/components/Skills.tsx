import { Card } from "@/components/ui/card";
import { Palette, Smartphone, Monitor, Figma, Image } from "lucide-react";

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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tools and skills I use to bring creative visions to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 text-center card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center text-primary mb-4">{category.icon}</div>
              <h3 className="font-semibold mb-3">{category.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Competency Levels */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Core Competencies</h3>
          <div className="space-y-6">
            {competencies.map((competency, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{competency.name}</span>
                  <span className="text-muted-foreground">{competency.level}%</span>
                </div>
                <div className="w-full bg-muted-foreground/20 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${competency.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
