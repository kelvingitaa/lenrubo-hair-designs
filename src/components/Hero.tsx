
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-10"></div>
        <img 
          src="/lovable-uploads/1cc92f4e-dd5e-44aa-9122-6a95406830b3.png" 
          alt="Premium Vietnamese Hair" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>
      <div className="container mx-auto relative z-20 px-4 pt-32 md:pt-40 pb-16 h-full flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-instrument text-5xl md:text-7xl leading-tight text-white">
            Exceptional Quality <span className="text-white/80">Vietnamese Hair</span>
          </h1>
          <p className="font-mono text-lg md:text-xl text-white/90 max-w-xl">
            Premium, ethically sourced hair collections designed to transform your style with unmatched beauty and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/products">
              <Button className="font-mono uppercase text-base px-8 py-6 bg-white text-black hover:bg-white/90 rounded-none">
                Explore Collections 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="font-mono uppercase text-base px-8 py-6 text-white border-white hover:bg-white/10 rounded-none">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
