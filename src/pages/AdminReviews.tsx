import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Star, X, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const AdminReviews = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .single();

      if (!roles) {
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
    } catch (error) {
      console.error("Auth error:", error);
      navigate("/auth");
    } finally {
      setIsLoading(false);
    }
  };

  const { data: testimonials = [], isLoading: isLoadingTestimonials } = useQuery({
    queryKey: ["admin-testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: isAdmin,
  });

  const deleteTestimonialMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("testimonials")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      toast({
        title: "Success",
        description: "Testimonial deleted successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container-custom px-6 py-24">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/admin")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-4xl font-bold mb-2">Manage Reviews</h1>
          <p className="text-muted-foreground">View and delete submitted testimonials</p>
        </div>

        {isLoadingTestimonials ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading testimonials...</p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-6">
              All Testimonials ({testimonials.length})
            </h2>
            {testimonials.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No testimonials yet</p>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                    <div className="border-t pt-4 mb-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      {testimonial.role && (
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      )}
                      {testimonial.company && (
                        <p className="text-sm text-primary">{testimonial.company}</p>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteTestimonialMutation.mutate(testimonial.id)}
                      disabled={deleteTestimonialMutation.isPending}
                    >
                      <X className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminReviews;
