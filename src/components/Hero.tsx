
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen px-4 pt-20 pb-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <h1 className="font-instrument text-5xl md:text-7xl leading-tight mb-4">
            Indulge in the Luxury of Vietnamese Hair
          </h1>
          <p className="font-mono text-lg max-w-xl text-gray-700 mb-2">
            Experience premium, ethically sourced hair that's as unique as you are. Designed to empower your beauty with every strand.
          </p>
          <Link to="/products">
            <Button className="font-mono uppercase text-lg px-8 py-6 bg-black text-white hover:bg-gray-800 shadow-lg focus:ring-2 focus:ring-primary transition">
              Shop Now
            </Button>
          </Link>
        </div>
        <div className="relative h-[300px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/1cc92f4e-dd5e-44aa-9122-6a95406830b3.png" 
            alt="Luxury Vietnamese Hair" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
