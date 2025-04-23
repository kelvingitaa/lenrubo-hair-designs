
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const AboutSection = () => (
  <section className="py-24 px-4 bg-white">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <img
              src="/lovable-uploads/photo-1721322800607-8c38375eef04"
              alt="Premium hair collection"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/5"></div>
          </div>
        </div>
        <div className="order-1 md:order-2 max-w-xl">
          <h2 className="font-instrument text-3xl md:text-5xl mb-6">
            Crafting <span className="text-gray-500">Exceptional</span> Hair Experiences
          </h2>
          <p className="font-mono text-base mb-6 text-gray-600">
            Lenrubo is dedicated to sourcing and delivering premium Vietnamese hair that celebrates every woman's unique beauty. Our hair bundles are ethically collected, naturally textured, and designed to empower confidence.
          </p>
          <p className="font-mono text-base mb-8 text-gray-600">
            We provide luxury you can trust, beauty you can wear, and the high standards you deserve. Experience the difference—because you are worth it.
          </p>
          <Link to="/about">
            <Button variant="outline" className="font-mono uppercase text-sm px-8 py-6 border-black text-black hover:bg-black hover:text-white rounded-none group">
              Learn Our Story
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
