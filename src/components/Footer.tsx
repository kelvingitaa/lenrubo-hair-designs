
import React from "react";
import { Instagram, Linkedin, Facebook, Copyright } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-100 py-10 px-4 mt-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img
          src="/lovable-uploads/photo-1487252665478-49b61b47f302"
          alt="Footer fun"
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="font-crimson text-2xl">LENRUBO</span>
      </div>
      <div className="flex gap-5">
        <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
          <Instagram size={24} />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
          <Linkedin size={24} />
        </a>
        <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
          <Facebook size={24} />
        </a>
      </div>
      <div className="flex items-center gap-2 text-sm font-mono text-gray-600">
        <Copyright size={18} /> 2025 Lenrubo. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
