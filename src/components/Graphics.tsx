import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import logoDesign from "@/assets/graphics/logo-design.jpg";
import socialMedia from "@/assets/graphics/social-media.jpg";
import posterDesign from "@/assets/graphics/poster-design.jpg";
import illustration from "@/assets/graphics/illustration.jpg";
import branding from "@/assets/graphics/branding.jpg";
import bannerDesign from "@/assets/graphics/banner-design.jpg";

const Graphics = () => {
  const graphicsWork = [
    {
      title: "Shayna Collection Logo",
      image: logoDesign,
      category: "Brand Identity",
    },
    {
      title: "Shayna Collection Brand",
      image: socialMedia,
      category: "Logo Design",
    },
    {
      title: "MIAONEFKK Branding",
      image: posterDesign,
      category: "Brand Identity",
    },
    {
      title: "African Transactions 3D Logo",
      image: illustration,
      category: "3D Design",
    },
    {
      title: "ATEEI Journal Cover",
      image: branding,
      category: "Publication Design",
    },
    {
      title: "ATEEI Journal Layout",
      image: bannerDesign,
      category: "Publication Design",
    },
  ];

  return (
    <section id="graphics" className="section-padding bg-muted/30">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Graphics Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 transition-all duration-500 hover:w-32"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my collection of graphic design projects, illustrations, and creative visual content
          </p>
        </AnimatedSection>

        {/* Preview Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {graphicsWork.map((work, index) => (
            <AnimatedSection
              key={index}
              animation="blur-in"
              delay={index * 0.1}
            >
              <div className="group relative overflow-hidden rounded-lg card-hover img-zoom">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-4 translate-y-4 group-hover:translate-y-0">
                    <span className="text-xs font-semibold text-primary mb-2 tracking-wider uppercase">
                      {work.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground text-center">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={0.3} className="text-center">
          <Button 
            size="lg"
            asChild
            className="gap-2 group"
          >
            <a
              href="https://photos.app.goo.gl/VSnmcCwaK4jC6XFk6"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Graphics Portfolio 
              <ExternalLink size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Graphics;
