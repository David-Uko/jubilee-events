import { useState } from "react";

const galleryImages = [
  { id: 1, emoji: "🎂", label: "Birthday Celebrations" },
  { id: 2, emoji: "💍", label: "Wedding Surprises" },
  { id: 3, emoji: "🎊", label: "Anniversary Events" },
  { id: 4, emoji: "🎸", label: "Live Entertainment" },
  { id: 5, emoji: "📸", label: "Professional Photography" },
  { id: 6, emoji: "🎭", label: "Themed Decorations" },
];

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            <span className="gradient-text">Our Celebrations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            A glimpse into the magical moments we create
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-card to-muted/50 border border-primary/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-primary/50"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl">{item.emoji}</span>
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-heading font-bold text-xl text-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Every celebration we create is unique and tailored to your vision. 
            From intimate gatherings to grand affairs, we bring your dreams to life with elegance and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
