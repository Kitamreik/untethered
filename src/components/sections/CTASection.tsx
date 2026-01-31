import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Calendar } from "lucide-react";

const CTASection: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleClick = () => {
    //setShowCalendar(true); // show the Google Calendar iframe
    //OR
    setShowCalendar((prev) => !prev); // toggle iframe visibility
  };
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
            {/* MVP button: sends email to Erin */}
            <div className="mb-8">
              <Button 
                variant="cta" 
                size="lg"
                className="text-xl px-12 py-6 mb-6"
                asChild
              >
                <a href="mailto:untetheredcoachingllc@gmail.com?subject=[NEW CLIENT] %20Interested%20in%20Coaching"><Mail className="w-6 h-6 mr-2" />Send Email</a>
              </Button>
            </div>
            <div className="text-center">
                {/* Goal Button: Google Integration */}
              <div className="mb-8">
                <Button 
                  variant="cta" 
                  size="lg"
                  className="text-xl px-12 py-6 mb-6"
                  onClick={handleClick}
                >
                  <Calendar className="w-6 h-6 mr-2" />
                  {/*Sign Up w/ Google*/} {/* show the Google Calendar iframe */}
                  {showCalendar ? "Hide Google Calendar" : "Google Sign In"} {/* have it be a dynamic modal */}
                </Button>
              </div>
               {/* Google Calendar Iframe */}
                {showCalendar && (
                  <div className="w-full max-w-3xl mx-auto transition-all duration-300">
                    <iframe
                      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2iNYm7-I33_SMVJ1Nvn4b07IGiaKwRUGjCoc0ODCXdXSrpmEc11Lb2naYcUJyMUNdLwy4nK7Pd?gv=true"
                      style={{ border: 0 }}
                      width="100%"
                      height={600}
                      title="Google Calendar Appointment Scheduling"
                    ></iframe>
                  </div>
                )}
            </div>
            
            
            
            <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
              <p className="text-foreground">
                Book a free 20-minute call—no pressure, no prep required. It's simply a chance to connect and explore how nervous system coaching might support what you're already working toward.
              </p>
              <div></div>
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