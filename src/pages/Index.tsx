
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
