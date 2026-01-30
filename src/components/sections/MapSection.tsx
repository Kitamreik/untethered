import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Building, Phone, Calendar, ArrowBigRight } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Testimonials Across the U.S.
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
            {/* ALREADY HANDLED */}
            {/* <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warm">
                  <Building className="w-5 h-5" />
                  Consulting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                   <Button 
                      variant="cta" 
                      size="lg"
                      className="text-xl px-12 py-6 mb-6 bg-yellow-700"
                    >
                      <ArrowBigRight className="w-6 h-6 mr-2" />
                      <a href="https://www.itsokimjustair.com/services">Services</a>
                    </Button>
                </div>
              </CardContent>
            </Card>
            <hr /> */}
            {/* moved up */}
            {/* <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-nature">
                  <Users className="w-5 h-5" />
                  Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button 
                      variant="cta" 
                      size="lg"
                      className="text-xl px-12 py-6 mb-6 bg-green-700"
                    >
                      <ArrowBigRight className="w-6 h-6 mr-2" />
                      <a href="https://brainbased-wellness.com/?aff=ErinV">Brainbased Wellness</a>
                    </Button>
                  <div className="flex items-center gap-2 text-foreground">
                    Brainbased Wellness - Virtual classes that help you train your nervous system and body to resolve old patterns, reduce stress, and increase well-being. First 2 weeks free!
                  </div>
                  <hr />
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-3 h-3 bg-nature rounded-full"></div>
                    Erin's Sound Byte: "This is a great educational resource for those interested in learning more about neuro somatic work; they offer virtual group classes, but not one on one coaching." 
                  </div>
                  
                </div>
              </CardContent>
            </Card>
            <hr /> */}
            
            {/* PENDING */}
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
                             
                      “Neurosomatic coaching with Erin has changed how I approach everything in my life. For the first time in my life, I feel like I have power over my anxiety, and I am more in tune with what my body needs. It has helped my relationships and how I function in the world!” -L.W.
                  </div>
                  <hr />
                  <div className="flex items-center gap-2 text-foreground">
                    "With Erin, whatever I'm going through feels less scary. I'm so used to sucking it up and powering through or beating myself up for over-reacting. But with Erin, if I feel like the house is on fire, they're like, yep, I see it. Let's get the hose. We got this dude. No matter what's going on, I always come away knowing it's manageable and realizing how far I've come. Not to mention so many laughs in between. I'm so grateful for the support I've gotten with Erin." - Dr. Rachel Dicker
                  </div>
                  <hr />
                  <div className="flex items-center gap-2 text-foreground">
                    "I've had the privilege of being guided by Erin, whose approach consistently demonstrates compassionate care and profound respect for my sensitivities and identities. Erin's natural curiosity and artful way of inviting deeper exploration has created a foundation of safety that has been instrumental in helping me repattern my nervous system's responses. What I particularly value is their ability to meet me exactly where I am, fostering a natural cooperation and flow throughout our sessions. If you're seeking to know yourself at the deepest level and create new possibilities for your life, I highly recommend working with Erin Untethered for transformative coaching. Their guidance opens doorways to profound personal transformation.” -Mari de Luna, NeuroSomatic Trauma Resolution Guide & Intimacy Coach | New Jersey, USA
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PLACEHOLDER */}
            {/* <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
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
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;