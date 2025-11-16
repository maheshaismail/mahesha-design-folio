import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import logoDesign from "@/assets/graphics/logo-design.jpg";
import socialMedia from "@/assets/graphics/social-media.jpg";
import posterDesign from "@/assets/graphics/poster-design.jpg";
import illustration from "@/assets/graphics/illustration.jpg";
import branding from "@/assets/graphics/branding.jpg";
import bannerDesign from "@/assets/graphics/banner-design.jpg";

const Graphics = () => {
  const graphicsWork = [
    {
      title: "Logo Design",
      image: logoDesign,
      category: "Branding",
    },
    {
      title: "Social Media Graphics",
      image: socialMedia,
      category: "Digital Marketing",
    },
    {
      title: "Event Poster",
      image: posterDesign,
      category: "Print Design",
    },
    {
      title: "Abstract Illustration",
      image: illustration,
      category: "Digital Art",
    },
    {
      title: "Business Cards",
      image: branding,
      category: "Brand Identity",
    },
    {
      title: "Web Banner",
      image: bannerDesign,
      category: "Web Design",
    },
  ];

  return (
    <section id="graphics" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Graphics Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my collection of graphic design projects, illustrations, and creative visual content
          </p>
        </div>

        {/* Preview Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {graphicsWork.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <span className="text-xs font-semibold text-primary mb-2">
                    {work.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground text-center">
                    {work.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            asChild
            className="gap-2"
          >
            <a
              href="https://photos.app.goo.gl/VSnmcCwaK4jC6XFk6"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Graphics Portfolio <ExternalLink size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Graphics;
