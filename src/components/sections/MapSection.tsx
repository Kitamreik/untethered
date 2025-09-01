import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Building } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Locations Across the U.S.
          </h2>
          <hr className="w-24 h-1 bg-accent mx-auto rounded" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Placeholder */}
          <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MapPin className="w-5 h-5" />
                Travel Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-12 text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive Map Placeholder
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  "This map shows where I have been across the U.S.!"
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Services Grid */}
          <div className="space-y-6">
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-nature">
                  <Users className="w-5 h-5" />
                  Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-3 h-3 bg-nature rounded-full"></div>
                    Class Set A
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-3 h-3 bg-nature rounded-full"></div>
                    Class Set B
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-3 h-3 bg-nature rounded-full"></div>
                    Class Set C
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warm">
                  <Building className="w-5 h-5" />
                  Consulting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-3 h-3 bg-warm rounded-full"></div>
                    Client A
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-3 h-3 bg-warm rounded-full"></div>
                    Client B
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;