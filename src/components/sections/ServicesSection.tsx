import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {Calendar } from "lucide-react";
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
              <hr />
              <br />
              <div className="mb-8 p-8 md:p-12 text-center">
              <Button 
                variant="cta" 
                size="lg"
                className="text-xl px-12 py-6 mb-6"
              >
                <Calendar className="w-6 h-6 mr-2" />
                <a href="https://www.itsokimjustair.com/services">Check Out Air's Services</a>
              </Button>
              </div>
              
  
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;