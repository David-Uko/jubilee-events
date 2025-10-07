import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import BookingForm from "@/components/BookingForm";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [packagePrice, setPackagePrice] = useState("");

  // ✅ Refs for sections
  const aboutRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // ✅ Scroll smoothly to sections
  const scrollToSection = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      about: aboutRef,
      packages: packagesRef,
      gallery: galleryRef,
      contact: contactRef,
    };

    refs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ✅ Booking logic
  const handleSelectPackage = (packageName: string, price: string) => {
    setSelectedPackage(packageName);
    setPackagePrice(price);
    setIsBookingOpen(true);
  };

  const handleBookNow = () => {
    setSelectedPackage("Custom Package");
    setPackagePrice("Contact for pricing");
    setIsBookingOpen(true);
  };

  const handleViewPackages = () => {
    packagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      <FloatingElements />

      {/* ✅ Navigation receives both scroll and booking handlers */}
      <Navigation onBookNow={handleBookNow} scrollToSection={scrollToSection} />

      {/* ✅ Hero Section */}
      <Hero onViewPackages={handleViewPackages} onBookNow={handleBookNow} />

      {/* ✅ About Section */}
      <div ref={aboutRef} id="about" className="scroll-mt-28">
        <About />
      </div>

      {/* ✅ Packages Section */}
      <div ref={packagesRef} id="packages" className="scroll-mt-28">
        <Packages onSelectPackage={handleSelectPackage} />
      </div>

      {/* ✅ Gallery Section */}
      <div ref={galleryRef} id="gallery" className="scroll-mt-28">
        <Gallery />
      </div>

      {/* ✅ Contact Section */}
      <div ref={contactRef} id="contact" className="scroll-mt-28">
        <Contact />
      </div>

      {/* ✅ Booking Form Modal */}
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedPackage={selectedPackage}
        packagePrice={packagePrice}
      />
    </div>
  );
};

export default Index;
