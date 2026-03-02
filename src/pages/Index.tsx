import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main id="inicio">
      <Navbar />
      <Hero />
      <MenuSection />
      <Gallery />
      <Location />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
