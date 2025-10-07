import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Ready to plan your unforgettable celebration? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:jubileeeventsyyc@gmail.com"
            className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 glow-hover group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Mail className="text-primary-foreground" size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Email Us</h3>
            <p className="text-muted-foreground font-body text-sm break-all">
              jubileeeventsyyc@gmail.com
            </p>
          </a>

          <a
            href="tel:587-700-8564"
            className="bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8 text-center hover:border-secondary/50 transition-all duration-300 glow-hover group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Phone className="text-secondary-foreground" size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Call Us</h3>
            <p className="text-muted-foreground font-body text-sm">
              587-700-8564
            </p>
          </a>

          <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 text-center hover:border-accent/50 transition-all duration-300 glow-hover group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-celebration-pink flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
              <MapPin className="text-accent-foreground" size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Location</h3>
            <p className="text-muted-foreground font-body text-sm">
              Calgary, AB
              <br />
              Serving All Areas
            </p>
          </div>
        </div>

        <div className="text-center bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
          <p className="text-muted-foreground font-body mb-6">
            Have questions about our packages or want to discuss a custom celebration? 
            Our team is ready to help you create the perfect event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-2xl transition-all duration-300"
            >
              <a href="mailto:jubileeeventsyyc@gmail.com">Send Email</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all duration-300"
            >
              <a href="tel:587-700-8564">Call Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
