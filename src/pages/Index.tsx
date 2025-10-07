import { useState } from "react";
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
    const packagesElement = document.getElementById("packages");
    if (packagesElement) {
      packagesElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen">
      <FloatingElements />
      <Navigation onBookNow={handleBookNow} />
      <Hero onViewPackages={handleViewPackages} onBookNow={handleBookNow} />
      <About />
      <Packages onSelectPackage={handleSelectPackage} />
      <Gallery />
      <Contact />
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
