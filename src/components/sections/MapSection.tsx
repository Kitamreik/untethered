import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Building, Phone, Calendar, ArrowBigRight } from "lucide-react";

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
                <span className="text-muted-foreground">
                <iframe
                  title="podcast snippet"
                  src="https://www.google.com/maps/d/u/0/embed?mid=18QnNWblBdK9osBxUW5s-zGZp7V8pXOE&ehbc=2E312F&noprof=1"
                  className="w-full max-w-4xl h-[480px] mx-auto rounded-lg"
                  allowFullScreen
                ></iframe>
                </span>
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

            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Phone className="w-5 h-5" />
                  Testimonials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    Testimonial A
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    Testimonial B
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    Testimonial C
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    Testimonial D
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <Calendar className="w-5 h-5" />
                  Newsletter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground">
                    Like what you see? Check out my other work here!
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                  
                    <Button 
                      variant="cta" 
                      size="lg"
                      className="text-xl px-12 py-6 mb-6 bg-red-700"
                    >
                      <ArrowBigRight className="w-6 h-6 mr-2" />
                      <a href="#">News</a>
                    </Button>
            
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