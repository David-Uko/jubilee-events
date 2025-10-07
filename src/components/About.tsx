import { Heart, Sparkles, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            <span className="gradient-text">Our Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            At Jubilee Events, we believe every celebration deserves to be extraordinary
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 glow-hover">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 mx-auto">
              <Heart className="text-primary-foreground" size={28} />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-center">Passion for Celebration</h3>
            <p className="text-muted-foreground text-center font-body">
              Every event we craft is infused with care, creativity, and dedication to making your special moments unforgettable.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300 glow-hover">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 mx-auto">
              <Sparkles className="text-secondary-foreground" size={28} />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-center">Magical Surprises</h3>
            <p className="text-muted-foreground text-center font-body">
              We specialize in creating jaw-dropping surprise moments that leave lasting impressions on you and your loved ones.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 glow-hover">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-celebration-pink flex items-center justify-center mb-6 mx-auto">
              <Users className="text-accent-foreground" size={28} />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-center">Expert Team</h3>
            <p className="text-muted-foreground text-center font-body">
              Our experienced professionals work tirelessly to ensure every detail is perfect, from concept to execution.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            Founded with a vision to transform ordinary celebrations into extraordinary experiences, 
            Jubilee Events has become synonymous with elegance, surprise, and joy. Our mission is simple: 
            to craft moments that become cherished memories, weaving together every element with precision 
            and passion to deliver celebrations that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
