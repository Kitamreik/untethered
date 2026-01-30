import { Card, CardContent } from "@/components/ui/card";
import QRCode from "@/assets/qr-code.png";
import coachingInfo from "@/assets/coaching-info.png"
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
                Brainbased Wellness - Virtual classes that help you train your nervous system and body to resolve old patterns, reduce stress, and increase well-being. First 2 weeks free!
                </p>
                <div className="space-y-2">
                  <br />
                   <Button 
                      variant="cta" 
                      size="lg"
                      className="text-xl px-12 py-6 mb-6 bg-yellow-700"
                    >
                      <a href="https://brainbased-wellness.com/?aff=ErinV">View More</a>
                    </Button>
                </div>
                <br />
                <hr />
                <p>
                  Erin's Sound Byte: "This is a great educational resource for those interested in learning more about neuro somatic work; they offer virtual group classes, but not one on one coaching." 
                </p>
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
                Neurosomatic Intelligence - Want to learn more? Integrated neuro coaching certification, ongoing education, workshops, and a practitioner directory of excellent contacts.
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
                <br />
                <hr />
                <p>
                  Erin's Sound Byte: "NSI has completely transformed the way I approach personal growth and coaching. It goes far beyond mindset work or talk therapy by offering simple, actionable steps that actually support the nervous system—helping you get out of your own way. As someone with a history of brain injury, trauma, and neurodivergence, this work wasn’t always easy at first, but it was absolutely worth it. The process challenged me in the best ways and ultimately made me a more grounded, effective coach. I’m not just thinking differently—I’m being differently." 
                </p>
                <br />
                <hr />
                <div className="space-y-2">
                  <span className="flex justify-center w-auto">
                    <p>I'm listed as a Practitioner under their directory!</p>        
                     
                  </span>
                   <Button 
                      variant="cta" 
                      size="lg"
                      className="text-xl px-12 py-6 mb-6 bg-purple-700"
                    >
                      <a href="https://neurosomaticintelligence.com/directory">Let's Go!</a>
                    </Button>
                    <img 
                      src={QRCode}
                      alt="f86QXJoxAAAAAElFTkSuQmCC.png"
                      className="rounded mx-auto d-block"
                     />
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
                Trauma Rewired Podcast - The podcast that teaches you about your nervous system, how trauma gets stored in the body, and what you can do to heal.
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