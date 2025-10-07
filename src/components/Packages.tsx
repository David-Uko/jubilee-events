import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

interface PackagesProps {
  onSelectPackage: (packageName: string, price: string) => void;
}

const packages = [
  {
    name: "Silver Sparkle",
    price: "$199.99",
    description: "Perfect for intimate celebrations",
    features: [
      "Birthday Surprise",
      "Anniversary Celebration",
      "Special Event",
      "Birthday Cake",
      "Professional Photography & Videography",
      "Personalized note from sender"
    ],
    gradient: "from-slate-400 via-gray-300 to-zinc-400",
    borderColor: "border-slate-400/50"
  },
  {
    name: "Golden Glitz",
    price: "$245.99",
    description: "Add musical elegance to your event",
    features: [
      "Birthday Surprise",
      "Anniversary Celebration",
      "Wedding Surprise",
      "Saxophonist Performance",
      "Birthday Cake",
      "Professional Photography & Videography",
      "Personalized note from sender"
    ],
    gradient: "from-accent via-yellow-400 to-amber-500",
    borderColor: "border-accent/50",
    popular: true
  },
  {
    name: "Platinum Prestige",
    price: "$345.99",
    description: "The ultimate luxury experience",
    features: [
      "Birthday Surprise",
      "Anniversary Celebration",
      "Wedding Surprise",
      "Saxophonist Performance",
      "Customized Photo Gift",
      "Professional Photography & Videography",
      "Personalized note from sender"
    ],
    gradient: "from-primary via-celebration-pink to-celebration-blue",
    borderColor: "border-primary/50"
  }
];

const Packages = ({ onSelectPackage }: PackagesProps) => {
  return (
    <section id="packages" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            <span className="gradient-text">Our Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Choose the perfect package to make your celebration unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card/50 backdrop-blur-sm border-2 ${pkg.borderColor} rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                pkg.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1">
                  Most Popular
                </Badge>
              )}

              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-6 mx-auto animate-pulse-glow`}>
                <span className="text-3xl">✨</span>
              </div>

              <h3 className="font-heading font-bold text-3xl mb-2 text-center">{pkg.name}</h3>
              <p className="text-muted-foreground text-center mb-6 font-body">{pkg.description}</p>
              
              <div className="text-center mb-8">
                <span className="text-5xl font-bold gradient-text">{pkg.price}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground font-body">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => onSelectPackage(pkg.name, pkg.price)}
                className="w-full text-lg py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-2xl transition-all duration-300"
              >
                Select Package
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
