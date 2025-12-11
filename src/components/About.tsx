import { User, Award, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import profileImage from "@/assets/profile-new.jpg";

const About = () => {
  const [processedImage, setProcessedImage] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const removeBackground = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('remove-background', {
          body: { imageUrl: profileImage }
        });

        if (error) throw error;

        if (data?.imageUrl) {
          setProcessedImage(data.imageUrl);
        } else {
          setProcessedImage(profileImage);
        }
      } catch (error) {
        console.error("Error removing background:", error);
        setProcessedImage(profileImage);
      } finally {
        setIsProcessing(false);
      }
    };

    removeBackground();
  }, []);

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
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          {!isProcessing && processedImage && (
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <img
                  src={processedImage}
                  alt="Ismail Mahesha - UI/UX Designer"
                  className="w-48 h-48 rounded-full object-cover shadow-xl ring-4 ring-primary/20 transition-all duration-500 group-hover:ring-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/20"
                />
              </div>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 transition-all duration-500 hover:w-32"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a UI/UX Designer specializing in web, app, and graphic design with a strong focus on
            creating user-centered experiences. With a background in Telecommunications Engineering
            from UDSM and years of design experience since 2023, I combine technical knowledge with
            creative expertise to deliver outstanding digital solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 0.15}>
              <Card className="p-8 text-center card-hover bg-card h-full group">
                <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
