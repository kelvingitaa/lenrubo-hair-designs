
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-crimson text-5xl md:text-7xl">
          LENRUBO
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/products"
            className="font-mono text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            OUR PRODUCTS
          </Link>
          <Link
            to="/blog"
            className="font-mono text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            BLOG
          </Link>
          <Link
            to="/about"
            className="font-mono text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            ABOUT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
