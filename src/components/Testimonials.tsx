import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import ReviewForm from "./ReviewForm";

const Testimonials = () => {
  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 transition-all duration-500 hover:w-32"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </AnimatedSection>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-muted-foreground mt-4">Loading testimonials...</p>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.id}
                animation="fade-up"
                delay={index * 0.1}
              >
                <Card className="p-8 card-hover relative group h-full">
                  <Quote className="w-12 h-12 text-primary/20 absolute top-4 right-4 transition-all duration-500 group-hover:text-primary/40 group-hover:scale-110" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-secondary text-secondary transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 relative z-10 transition-colors duration-300 group-hover:text-foreground">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4 transition-colors duration-300 group-hover:border-primary/30">
                    <p className="font-semibold transition-colors duration-300 group-hover:text-primary">
                      {testimonial.name}
                    </p>
                    {testimonial.role && (
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    )}
                    {testimonial.company && (
                      <p className="text-sm text-primary">{testimonial.company}</p>
                    )}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection animation="scale-up" className="text-center py-12 mb-16">
            <Card className="p-12 max-w-2xl mx-auto hover:shadow-2xl transition-all duration-500">
              <Quote className="w-16 h-16 text-primary/20 mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">
                No testimonials yet. Be the first to share your experience!
              </p>
            </Card>
          </AnimatedSection>
        )}

        <AnimatedSection animation="fade-up" delay={0.3} className="mt-16">
          <ReviewForm />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
