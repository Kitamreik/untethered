import { Card, CardContent } from "@/components/ui/card";

const FrameworkSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The Framework
          </h2>
          <hr className="w-24 h-1 bg-accent mx-auto rounded" />
        </div>
        
        <Card className="max-w-4xl mx-auto shadow-soft hover:shadow-warm transition-all duration-300">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground">
                At Untethered Coaching, I help clients understand the powerful connection between their brain, body, and nervous system to unlock new levels of resilience, confidence, and well-being. My approach is gentle, judgment-free, and rooted in meeting you exactly where you are—whether you're thriving or just barely holding on.
              </p>
              
              <p className="text-foreground">
                I understand that this kind of work can feel big and even intimidating at times, which is why I weave humor and levity into the process. Together, we'll reduce overwhelm, tune into your body's signals, and build skills to empower you to thrive—all while keeping things approachable and, dare I say, fun. Every nervous system has its own unique preferences, and I'll tailor our tools to support you in ways that truly resonate.
              </p>
              
              <p className="text-foreground font-medium">
                My goal is to create a space where you feel seen, understood, and supported as you grow and heal on your own terms. Reach out today to start your untethered journey!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FrameworkSection;