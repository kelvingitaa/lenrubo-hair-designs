
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="pt-32 pb-24">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-24">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-instrument text-4xl md:text-6xl mb-6">Our Story</h1>
            <p className="font-mono text-lg mb-8 text-gray-600">
              At Lenrubo, we're redefining what it means to wear your crown. Our brand was born with one goal: to deliver luxurious Vietnamese hair that not only turns heads—but empowers hearts.
            </p>
            <Separator className="max-w-xs mx-auto" />
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/lovable-uploads/photo-1721322800607-8c38375eef04" 
                alt="Our mission" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="font-instrument text-3xl md:text-4xl mb-6">Our Mission</h2>
              <p className="font-mono text-base mb-6 text-gray-600">
                Lenrubo is dedicated to sourcing and delivering premium Vietnamese hair that celebrates every woman's unique beauty. Our hair bundles are ethically collected, naturally textured (never processed!), and designed to empower confidence.
              </p>
              <p className="font-mono text-base text-gray-600">
                Our mission is to provide luxury you can trust, beauty you can wear, and the high standards you deserve. Experience the difference—because you are worth it.
              </p>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="font-instrument text-3xl md:text-4xl mb-6">Our Values</h2>
              <p className="font-mono text-base text-gray-600">
                The principles that guide everything we do, from sourcing to customer experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white p-8">
                <h3 className="font-mono text-lg font-semibold mb-4">Ethical Sourcing</h3>
                <p className="font-mono text-sm text-gray-600">
                  We ensure all our hair is collected ethically from voluntary donors who are fairly compensated for their contribution.
                </p>
              </div>
              
              <div className="bg-white p-8">
                <h3 className="font-mono text-lg font-semibold mb-4">Premium Quality</h3>
                <p className="font-mono text-sm text-gray-600">
                  Every strand is carefully selected and inspected to meet our exacting standards for softness, durability, and natural beauty.
                </p>
              </div>
              
              <div className="bg-white p-8">
                <h3 className="font-mono text-lg font-semibold mb-4">Customer Empowerment</h3>
                <p className="font-mono text-sm text-gray-600">
                  We believe in helping our customers feel confident, beautiful, and empowered through our products and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
