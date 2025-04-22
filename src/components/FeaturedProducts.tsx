
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: '"For Koils" Wefted Hair',
    price: "FROM $599",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: '"For Koils" Queen U-Part Wig',
    price: "FROM $599",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: '"For Koils" Queen U-Part Wig',
    price: "FROM $599",
    image: "/placeholder.svg",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-mono text-4xl md:text-6xl">FEATURED PRODUCTS</h2>
          <Button variant="link" className="font-mono text-lg">
            EXPLORE MORE
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="space-y-4">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-mono text-center">{product.name}</h3>
              <p className="font-mono text-center">{product.price}</p>
              <div className="flex justify-center">
                <Button className="font-mono bg-gray-200 hover:bg-gray-300 text-black">
                  ADD TO CART
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
