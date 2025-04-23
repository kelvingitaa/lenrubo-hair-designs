
import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/",
    label: "Instagram"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/",
    label: "LinkedIn"
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/",
    label: "Facebook"
  },
];

const Footer = () => (
  <footer className="bg-white py-16 px-4 border-t border-gray-100">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-6">
            <span className="font-instrument text-2xl">LENRUBO</span>
          </div>
          <p className="font-mono text-sm text-gray-500 max-w-md mb-8">
            Premium Vietnamese hair collections, ethically sourced and designed to empower your unique beauty with every strand.
          </p>
          <div className="flex gap-4">
            {socials.map(({name, icon: Icon, href, label}) => (
              <a key={name} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-200 hover:border-gray-400 transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-mono text-sm font-semibold uppercase mb-6">Collections</h3>
          <ul className="font-mono text-sm space-y-4">
            <li><a href="/products" className="hover:text-gray-600 transition-colors">Deep Wave</a></li>
            <li><a href="/products" className="hover:text-gray-600 transition-colors">Kinky Curly</a></li>
            <li><a href="/products" className="hover:text-gray-600 transition-colors">Water Wave</a></li>
            <li><a href="/products" className="hover:text-gray-600 transition-colors">All Collections</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-mono text-sm font-semibold uppercase mb-6">Company</h3>
          <ul className="font-mono text-sm space-y-4">
            <li><a href="/about" className="hover:text-gray-600 transition-colors">About Us</a></li>
            <li><a href="/blog" className="hover:text-gray-600 transition-colors">Journal</a></li>
            <li><a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
        <div className="font-mono text-xs text-gray-500 mb-4 md:mb-0">
          © {new Date().getFullYear()} Lenrubo. All rights reserved.
        </div>
        <div className="font-mono text-xs">
          <a href="#" className="text-gray-500 hover:text-gray-600 transition-colors">Terms of Service</a>
          <span className="mx-2 text-gray-300">|</span>
          <a href="#" className="text-gray-500 hover:text-gray-600 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
