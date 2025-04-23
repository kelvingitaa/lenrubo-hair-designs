
import React from "react";

const AboutSection = () => (
  <section className="py-20 px-4 bg-gray-50">
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="font-instrument text-4xl md:text-6xl mb-4">
          About Lenrubo
        </h2>
        <p className="font-mono text-lg mb-4 text-gray-800">
          Lenrubo is dedicated to sourcing and delivering <span className="font-semibold text-primary">premium Vietnamese hair</span> that celebrates every woman’s unique beauty. Our hair bundles are ethically collected, naturally textured (never processed!), and designed to empower confidence and elevate your style—every day.
        </p>
        <p className="font-mono text-lg text-gray-700">
          <b>Our mission:</b> To provide <span className="font-bold text-black">luxury you can trust, beauty you can wear, and the high standards you deserve</span>. Experience the difference—because you are worth it.
        </p>
      </div>
      <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/lovable-uploads/photo-1721322800607-8c38375eef04"
          alt="Inviting living room representing Lenrubo’s premium lifestyle"
          className="w-full object-cover h-[400px] aspect-[4/3] transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
