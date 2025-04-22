
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default Index;
