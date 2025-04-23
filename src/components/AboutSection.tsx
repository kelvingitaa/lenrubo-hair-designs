
import React from "react";

const AboutSection = () => (
  <section className="py-20 px-4 bg-gray-50">
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="font-instrument text-4xl md:text-6xl mb-4">
          About Lenrubo
        </h2>
        <p className="font-mono text-lg mb-4">
          At Lenrubo, we're dedicated to sourcing and delivering premium Vietnamese hair that celebrates every woman's unique beauty. 
          Our hair bundles are ethically collected, naturally textures, and designed to empower confidence and style—every day.
        </p>
        <p className="font-mono text-lg">
          Our mission is simple yet powerful: <span className="font-bold">to provide luxury you can trust, beauty you can wear, and a standard you deserve.</span>
        </p>
      </div>
      <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
        <img
          src="/lovable-uploads/photo-1721322800607-8c38375eef04"
          alt="About Us"
          className="w-full object-cover h-[400px]"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
