import { User, Award, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <User className="w-8 h-8 text-primary" />,
      title: "Creative Designer",
      description: "Passionate about creating intuitive and visually stunning user experiences",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "User-Centered",
      description: "Always putting users first in every design decision",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Professional",
      description: "Delivering high-quality work on time, every time",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a UI/UX Designer specializing in web, app, and graphic design with a strong focus on
            creating user-centered experiences. With a background in Telecommunications Engineering
            from UDSM and years of design experience since 2023, I combine technical knowledge with
            creative expertise to deliver outstanding digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-8 text-center card-hover bg-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
