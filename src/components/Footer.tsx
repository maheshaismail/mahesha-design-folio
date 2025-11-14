import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-8">
      <div className="container-custom px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 mb-2">
            Made with <Heart className="w-4 h-4 fill-coral text-coral" /> by Ismail Mahesha
          </p>
          <p className="text-sm text-white/70">
            © {currentYear} All rights reserved. UI/UX Designer Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
