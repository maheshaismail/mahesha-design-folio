import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Graphics = () => {
  return (
    <section id="graphics" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Graphics Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore my collection of graphic design projects, illustrations, and creative visual content
          </p>
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
              View Graphics Portfolio <ExternalLink size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Graphics;
