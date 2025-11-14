import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container-custom px-6 relative z-10 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-gradient">Ismail Mahesha</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            UI/UX Designer & Creative Problem Solver
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Crafting beautiful, user-centered digital experiences through web, app, and graphic design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="default" asChild>
              <a href="#projects" className="flex items-center gap-2">
                View My Work <ArrowRight size={20} />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact" className="flex items-center gap-2">
                <Download size={20} /> Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
