import { Card, CardContent } from "@/components/ui/card";
import servicesImage from "@/assets/services.png";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-0">
              <img 
                src={servicesImage}
                alt="Services provided on a sliding scale pricing, with three tiers: supporting, sustaining, and impact, featuring 4, 8, or 12 session packages with descriptions of what's included in 1:1 coaching"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;