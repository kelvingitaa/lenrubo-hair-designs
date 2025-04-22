
import NavBar from "@/components/NavBar";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="container mx-auto pt-32 px-4">
        <h1 className="font-instrument text-5xl md:text-7xl mb-8">Blog</h1>
        <p className="font-mono text-lg">
          Read our latest articles and hair care tips.
        </p>
      </div>
    </div>
  );
};

export default Blog;
