import { Card, CardContent } from "@/components/ui/card";
import coachingInfo from "@/assets/coaching-info.png";
import { Button } from "@/components/ui/button";

const CoachSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            All About Erin!
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
        
        <br />
        <br />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center mb-12">Featured Podcast - Rewiring the Nervous System: Erin Rainwood on Neurosomatic Work & Embracing Neurodivergence</h2>
          <hr className="w-24 h-1 bg-accent mx-auto rounded" />
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="bg-card shadow-soft">
            <CardContent className="p-8">
              <div className="bg-muted rounded-lg p-6 text-center">
                <span className="text-muted-foreground">
                <p className="text-lg text-muted-foreground mt-2">
                To check out my Neurosomatic Intelligence offering, click the button below!
                </p>
                <div className="space-y-2">
                  <br />
                   <Button 
                      variant="cta" 
                      size="lg"
                      className="text-xl px-12 py-6 mb-6 bg-yellow-700"
                    >
                      <a href="https://neurosomaticintelligence.com/?aff=ErinV">View More</a>
                    </Button>
                </div>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

         <div className="mt-16 max-w-2xl mx-auto">
          <Card className="bg-card shadow-soft">
            <CardContent className="p-8">
              <div className="bg-muted rounded-lg p-6 text-center">
                <span className="text-muted-foreground">
                <p className="text-lg text-muted-foreground mt-2">
                To check out my Trauma Rewired Podcast, click the button below!
                </p>
                <div className="space-y-2">
                  <br />
                   <Button 
                      variant="cta" 
                      size="lg"
                      className="text-xl px-12 py-6 mb-6 bg-yellow-700"
                    >
                      <a href="https://neurosomaticintelligence.com/podcast/?aff=ErinV">View More</a>
                    </Button>
                </div>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Podcast Embed: Apple */}
        {/* <div className="mt-16 max-w-2xl mx-auto">
          <Card className="bg-card shadow-soft">
            <CardContent className="p-8">
              <div className="bg-muted rounded-lg p-6 text-center">
                <span className="text-muted-foreground">
                <div className="flex justify-center w-full">
                  <iframe title="podcast snippet"
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    height="152"
                    className="w-full max-w-2xl rounded-lg"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.podcasts.apple.com/us/podcast/rewiring-the-nervous-system-erin-rainwood-on/id1780819863?i=1000689943692"
                  ></iframe>
                </div>
                </span>
                <p className="text-sm text-muted-foreground mt-2">
                  Duration: 1:06:00
                </p>
              </div>
            </CardContent>
          </Card>
        </div> */}
        {/* Podcast Embed: Spotify */}
        {/* <div className="mt-16 max-w-2xl mx-auto">
          <Card className="bg-card shadow-soft">
            <CardContent className="p-8">
              <div className="bg-muted rounded-lg p-6 text-center">
                <span className="text-muted-foreground">
                <div className="flex justify-center w-full">
                  <iframe
                    data-testid="embed-iframe"
                    title="podcast snippet"
                    src="https://open.spotify.com/embed/episode/1IF2FRN6NXCryz9NxqILti?utm_source=generator"
                    className="w-full max-w-2xl rounded-xl"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
                </span>
                <p className="text-sm text-muted-foreground mt-2">
                  Duration: 1:06:00
                </p>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default CoachSection;