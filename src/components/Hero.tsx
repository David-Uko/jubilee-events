import { Button } from "./ui/button";
import heroImage from "@/assets/hero-celebration.jpg";
import { Sparkles } from "lucide-react";

interface HeroProps {
  onViewPackages: () => void;
  onBookNow: () => void;
}

const Hero = ({ onViewPackages, onBookNow }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fadeInUp">
        <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30">
          <Sparkles className="text-accent" size={20} />
          <span className="text-sm font-medium text-foreground">Premier Surprise Event Company</span>
        </div>
        
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          <span className="gradient-text">Crafting Moments,</span>
          <br />
          <span className="gradient-text">Weaving Memories</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body">
          Jubilee Events brings surprise, joy, and elegance to every celebration
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onViewPackages}
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            View Packages
          </Button>
          <Button 
            onClick={onBookNow}
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all duration-300"
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Animated particles effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
