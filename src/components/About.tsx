import { User, Award, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { removeBackground, loadImage } from "@/lib/backgroundRemoval";
import profileImage from "@/assets/profile-new.jpg";

const About = () => {
  const [processedImage, setProcessedImage] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processImage = async () => {
      try {
        const response = await fetch(profileImage);
        const blob = await response.blob();
        const img = await loadImage(blob);
        const resultBlob = await removeBackground(img);
        const url = URL.createObjectURL(resultBlob);
        setProcessedImage(url);
      } catch (error) {
        console.error("Error processing image:", error);
        setProcessedImage(profileImage);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    return () => {
      if (processedImage) {
        URL.revokeObjectURL(processedImage);
      }
    };
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
        <div className="text-center mb-16 animate-fade-in">
          {!isProcessing && processedImage && (
            <div className="mb-8 flex justify-center">
              <img
                src={processedImage}
                alt="Ismail Mahesha - UI/UX Designer"
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
            </div>
          )}
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
