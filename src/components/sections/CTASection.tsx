import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Book a FREE Discovery Call Today!
          </h2>
          <hr className="w-24 h-1 bg-accent mx-auto rounded" />
        </div>
        
        <Card className="max-w-4xl mx-auto shadow-warm bg-gradient-subtle border-warm/20">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mb-8">
              <Button 
                variant="cta" 
                size="lg"
                className="text-xl px-12 py-6 mb-6"
              >
                <Calendar className="w-6 h-6 mr-2" />
                Sign Up
              </Button>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
              <p className="text-foreground">
                Book a free 20-minute call—no pressure, no prep required. It's simply a chance to connect and explore how nervous system coaching might support what you're already working toward.
              </p>
              
              <p className="text-foreground">
                If talk therapy, mindfulness, or self-help tools haven't created the lasting change you're craving, it may be because your nervous system is still stuck in old survival patterns. This work helps unlock that. It's not just a complement—it's often the missing piece that helps everything else finally click.
              </p>
              
              <p className="text-foreground font-medium">
                Bring your curiosity, and we'll take it from there.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;