import { Mail, Phone, MessageCircle, Linkedin, Instagram, Music } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ismailmahesha12@gmail.com",
      link: "mailto:ismailmahesha12@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "0615 759 438 / 0764 359 438",
      link: "tel:+255615759438",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      value: "0764 359 438",
      link: "https://wa.me/255764359438?text=Hi%20Ismail!%20I%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20UI/UX%20design%20project%20with%20you.",
    },
  ];

  const socialLinks = [
    {
      icon: <Music className="w-6 h-6" />,
      label: "TikTok",
      link: "https://www.tiktok.com/@miaonefkk",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      link: "https://www.instagram.com/officialmiaonefkk",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ismail-mahesha-4605a2262",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 text-center card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center text-primary mb-3">{method.icon}</div>
                <h3 className="font-semibold mb-2">{method.label}</h3>
                <a
                  href={method.link}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {method.value}
                </a>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  asChild
                  className="w-12 h-12 card-hover"
                >
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <div className="mt-12 text-center">
            <Card className="p-8 animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
              <p className="text-muted-foreground mb-6">
                Get a detailed overview of my experience, education, and skills
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg">
                  <a href="#" className="flex items-center gap-2">
                    <Mail size={20} /> Download Resume (PDF)
                  </a>
                </Button>
                <Button variant="secondary" size="lg">
                  <a href="#" className="flex items-center gap-2">
                    <Mail size={20} /> Download CV (DOCX)
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
