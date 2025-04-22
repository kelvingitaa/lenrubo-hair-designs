
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <h1 className="font-instrument text-5xl md:text-7xl leading-tight bg-gradient-text bg-clip-text text-transparent">
            Indulge in the Luxury of Vietnamese Hair
          </h1>
          <p className="font-mono text-lg max-w-xl">
            Experience premium, ethically sourced hair that's as unique as you. Designed to empower your beauty with every strand
          </p>
          <Button className="font-mono text-lg px-8 py-6 bg-black text-white hover:bg-gray-800">
            SHOP NOW
          </Button>
        </div>
        <div className="relative h-[600px] hidden md:block">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-90 rounded-lg transform hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
