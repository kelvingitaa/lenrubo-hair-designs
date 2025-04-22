
import NavBar from "@/components/NavBar";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="container mx-auto pt-32 px-4">
        <h1 className="font-instrument text-5xl md:text-7xl mb-8">About Us</h1>
        <p className="font-mono text-lg mb-6">
          At Lenrubo, we're redefining what it means to wear your crown. Our brand was born with one goal: to deliver luxurious Vietnamese hair that not only turns heads—but empowers hearts.
        </p>
        <h2 className="font-instrument text-3xl md:text-4xl mb-4">🌿 100% Premium Vietnamese Hair</h2>
        <p className="font-mono text-lg">
          Ethically sourced. Hand-selected. Seriously flawless. Every bundle we offer is carefully chosen to meet the highest standards in softness, durability, and authenticity. We partner with trusted sources to ensure every strand is as pure and natural as the woman wearing it.
        </p>
      </div>
    </div>
  );
};

export default About;
