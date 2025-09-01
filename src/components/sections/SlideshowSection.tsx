import { Card, CardContent } from "@/components/ui/card";
import coachingInfo from "@/assets/coaching-info.png";

const SlideshowSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Slideshow
          </h2>
          <hr className="w-24 h-1 bg-accent mx-auto rounded" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-0">
              <img 
                src={coachingInfo}
                alt="Description of Erin and their neurosomatic coaching work"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        {/* Podcast Embed */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="bg-card shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Featured Podcast
              </h3>
              <h4 className="text-lg text-foreground mb-2">
                Rewiring the Nervous System: Erin Rainwood on Neurosomatic Work & Embracing Neurodivergence
              </h4>
              <p className="text-muted-foreground mb-4">
                Feb 7 • Neuro Revolution | Spotify
              </p>
              <div className="bg-muted rounded-lg p-6 text-center">
                <p className="text-muted-foreground">
                  🎧 Podcast Player Placeholder
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Duration: 1:06:00
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SlideshowSection;