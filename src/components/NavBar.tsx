
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="font-instrument text-3xl md:text-4xl text-black">
          LENRUBO
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none text-black" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/products"
            className="font-mono text-sm uppercase hover:text-gray-600 transition-colors"
          >
            Collections
          </Link>
          <Link
            to="/blog"
            className="font-mono text-sm uppercase hover:text-gray-600 transition-colors"
          >
            Journal
          </Link>
          <Link
            to="/about"
            className="font-mono text-sm uppercase hover:text-gray-600 transition-colors"
          >
            About
          </Link>
          <Link
            to="#contact"
            className="font-mono text-sm uppercase hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden p-6">
            <div className="flex flex-col items-start gap-6">
              <Link
                to="/products"
                className="font-mono text-sm uppercase hover:text-gray-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                to="/blog"
                className="font-mono text-sm uppercase hover:text-gray-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Journal
              </Link>
              <Link
                to="/about"
                className="font-mono text-sm uppercase hover:text-gray-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="#contact"
                className="font-mono text-sm uppercase hover:text-gray-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
