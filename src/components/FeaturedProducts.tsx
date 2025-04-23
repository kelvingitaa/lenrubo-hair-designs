
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: '"For Koils" Deep Wave Bundle',
    price: "FROM $299",
    image: "/lovable-uploads/4bbbd14f-b27c-430c-bbad-f73f0f250ea4.png",
    description: "Premium deep wave texture, perfect for voluminous styles",
  },
  {
    id: 2,
    name: '"For Koils" Kinky Curly Bundle',
    price: "FROM $349",
    image: "/lovable-uploads/fef24cb0-9f55-4067-b67f-776f995b10cd.png",
    description: "Natural kinky curly pattern for beautiful afro styles",
  },
  {
    id: 3,
    name: '"For Koils" Water Wave Bundle',
    price: "FROM $399",
    image: "/lovable-uploads/3ec6c879-1944-4453-8e29-681a5a0b272c.png",
    description: "Luxurious water wave pattern for elegant looks",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h2 className="font-mono text-sm uppercase tracking-widest text-gray-500 mb-3">Our Collections</h2>
            <h3 className="font-instrument text-3xl md:text-5xl">Featured Products</h3>
          </div>
          <Link to="/products">
            <Button variant="link" className="font-mono text-sm text-black underline underline-offset-4 p-0 hover:text-gray-600 flex items-center">
              View All Collections
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-[3/4] bg-white overflow-hidden mb-4">
                <div className="h-full w-full overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-mono text-base">{product.name}</h3>
                <p className="font-mono text-sm text-gray-500">{product.description}</p>
                <p className="font-mono text-sm font-medium">{product.price}</p>
                <div className="pt-2">
                  <Button variant="outline" className="font-mono text-sm px-6 py-4 border-black text-black hover:bg-black hover:text-white rounded-none w-full" aria-label={`View ${product.name} details`}>
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
