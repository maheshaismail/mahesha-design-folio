import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container-custom px-6">
        <div className="text-center">
          <img src={logo} alt="MIAONEFKK Logo" className="h-20 w-20 object-contain mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2">MIAONEFKK</p>
          <p className="text-sm text-white/70 mb-4">GRAPHICS • WEB • APPS</p>
          <p className="font-medium mb-2">Ismail Mahesha</p>
          <p className="text-sm text-white/70">
            © {currentYear} All rights reserved. UI/UX Designer Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
