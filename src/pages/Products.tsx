
import NavBar from "@/components/NavBar";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="container mx-auto pt-32 px-4">
        <h1 className="font-instrument text-5xl md:text-7xl mb-8">Our Products</h1>
        <p className="font-mono text-lg">
          Browse our collection of premium Vietnamese hair products.
        </p>
      </div>
    </div>
  );
};

export default Products;
