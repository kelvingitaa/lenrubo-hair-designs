
import React from "react";
import { Instagram, Linkedin, Facebook, Copyright } from "lucide-react";

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
  <footer className="bg-gray-100 py-10 px-4 mt-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-gray-200">
          <img
            src="/lovable-uploads/photo-1487252665478-49b61b47f302"
            alt="Lenrubo logo"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-crimson text-2xl">LENRUBO</span>
      </div>
      <nav className="flex gap-8 items-center font-mono text-base">
        <a href="/products" className="hover:underline underline-offset-4">Products</a>
        <a href="/blog" className="hover:underline underline-offset-4">Blog</a>
        <a href="/about" className="hover:underline underline-offset-4">About</a>
        <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
      </nav>
      <div className="flex gap-5">
        {socials.map(({name, icon: Icon, href, label}) => (
          <a key={name} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-gray-600 hover:text-black">
            <Icon size={24} />
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2 text-sm font-mono text-gray-600">
        <Copyright size={18} aria-hidden /> 2025 Lenrubo. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
