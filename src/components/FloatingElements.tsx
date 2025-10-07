import { Sparkles, Star, Heart, Wine, Music } from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { Icon: Sparkles, position: "top-[10%] left-[5%]", animation: "float-slow", size: 24, color: "text-accent" },
    { Icon: Star, position: "top-[20%] right-[10%]", animation: "float-element", size: 20, color: "text-celebration-pink" },
    { Icon: Heart, position: "top-[40%] left-[15%]", animation: "float-fast", size: 18, color: "text-primary" },
    { Icon: Wine, position: "top-[60%] right-[8%]", animation: "float-slow", size: 22, color: "text-secondary" },
    { Icon: Music, position: "top-[75%] left-[10%]", animation: "float-element", size: 20, color: "text-celebration-blue" },
    { Icon: Sparkles, position: "top-[85%] right-[15%]", animation: "float-fast", size: 24, color: "text-accent" },
    { Icon: Star, position: "top-[30%] left-[85%]", animation: "float-slow", size: 18, color: "text-primary-glow" },
    { Icon: Heart, position: "top-[50%] right-[90%]", animation: "float-element", size: 16, color: "text-celebration-pink" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element, index) => {
        const { Icon, position, animation, size, color } = element;
        return (
          <div
            key={index}
            className={`absolute ${position} ${animation} opacity-30`}
          >
            <Icon size={size} className={color} />
          </div>
        );
      })}
      
      {/* Emoji floating elements */}
      <div className="absolute top-[15%] left-[20%] float-slow text-4xl opacity-40">🎈</div>
      <div className="absolute top-[35%] right-[20%] float-element text-3xl opacity-40">🎭</div>
      <div className="absolute top-[55%] left-[80%] float-fast text-3xl opacity-40">🎉</div>
      <div className="absolute top-[70%] right-[25%] float-slow text-4xl opacity-40">🥂</div>
      <div className="absolute top-[90%] left-[30%] float-element text-3xl opacity-40">✨</div>
    </div>
  );
};

export default FloatingElements;
