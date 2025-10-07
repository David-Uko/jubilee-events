import weddingImg from "@/assets/event-wedding.jpg";
import birthdayImg from "@/assets/event-birthday.jpg";
import proposalImg from "@/assets/event-proposal.jpg";
import anniversaryImg from "@/assets/event-anniversary.jpg";
import celebrationImg from "@/assets/event-celebration.jpg";
import saxophoneImg from "@/assets/event-saxophone.jpg";

const FloatingElements = () => {
  const elements = [
    { img: weddingImg, position: "top-[10%] left-[5%]", animation: "float-slow", size: "w-20 h-20" },
    { img: celebrationImg, position: "top-[20%] right-[10%]", animation: "float-element", size: "w-16 h-16" },
    { img: birthdayImg, position: "top-[40%] left-[15%]", animation: "float-fast", size: "w-16 h-16" },
    { img: anniversaryImg, position: "top-[60%] right-[8%]", animation: "float-slow", size: "w-20 h-20" },
    { img: saxophoneImg, position: "top-[75%] left-[10%]", animation: "float-element", size: "w-16 h-16" },
    { img: proposalImg, position: "top-[85%] right-[15%]", animation: "float-fast", size: "w-20 h-20" },
    { img: weddingImg, position: "top-[30%] left-[85%]", animation: "float-slow", size: "w-14 h-14" },
    { img: birthdayImg, position: "top-[50%] right-[90%]", animation: "float-element", size: "w-14 h-14" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element, index) => {
        const { img, position, animation, size } = element;
        return (
          <div
            key={index}
            className={`absolute ${position} ${animation} opacity-20`}
          >
            <img 
              src={img} 
              alt="Event celebration" 
              className={`${size} object-cover rounded-full shadow-lg`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
