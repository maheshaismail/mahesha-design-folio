import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Anderson",
      role: "Product Manager",
      company: "Tech Solutions Inc.",
      content: "Great designer! Delivered high-quality UI/UX work on time. The attention to detail and creativity exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "CEO",
      company: "Digital Ventures",
      content: "Professional, creative, and easy to work with. Highly recommended! Ismail transformed our vision into a beautiful reality.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "Amazing attention to detail. The final design exceeded expectations and perfectly captured our brand identity.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 card-hover relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-12 h-12 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-primary">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
