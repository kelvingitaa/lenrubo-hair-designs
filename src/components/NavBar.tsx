
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-crimson text-4xl md:text-5xl">
          LENRUBO
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/products"
            className="font-mono text-sm uppercase px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            Our Products
          </Link>
          <Link
            to="/blog"
            className="font-mono text-sm uppercase px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="font-mono text-sm uppercase px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            About Us
          </Link>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden p-4">
            <div className="flex flex-col items-center gap-4">
              <Link
                to="/products"
                className="w-full font-mono text-sm uppercase px-4 py-2 hover:bg-gray-100 transition-colors text-center"
                onClick={() => setMenuOpen(false)}
              >
                Our Products
              </Link>
              <Link
                to="/blog"
                className="w-full font-mono text-sm uppercase px-4 py-2 hover:bg-gray-100 transition-colors text-center"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="w-full font-mono text-sm uppercase px-4 py-2 hover:bg-gray-100 transition-colors text-center"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
