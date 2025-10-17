import React from "react";
import promoVideo from "@/assets/videos/Jubilee-video1.mp4"; // ✅ Import your local video

const VideoSection = () => {
  return (
    <section
      id="video"
      className="relative flex flex-col items-center justify-center py-16 bg-gray-900 text-white"
    >
      {/* Title */}
      <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 via-oorange-500 to-orange-500 bg-clip-text text-transparent">
  Watch Our Story
</h2>


      {/* Video Container */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
        <video
          className="w-full h-50 rounded-2xl"
          controls
          autoPlay={false}
          loop
          muted={false}
          preload="metadata"
        >
          <source src={promoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
