
import { Button } from "@/components/ui/button";
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
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-mono text-4xl md:text-6xl">FEATURED PRODUCTS</h2>
          <Link to="/products">
            <Button variant="link" className="font-mono text-lg underline hover:no-underline">
              Explore More
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="space-y-4 group">
              <div className="aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-mono text-center text-lg">{product.name}</h3>
              <p className="font-mono text-center text-gray-600">{product.description}</p>
              <p className="font-mono text-center font-bold">{product.price}</p>
              <div className="flex justify-center">
                <Button className="font-mono bg-black hover:bg-gray-800 text-white shadow" aria-label={`Add ${product.name} to cart`}>
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
