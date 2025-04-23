
import React from "react";
import { Separator } from "./ui/separator";

const testimonials = [
  {
    id: 1,
    quote: "The quality of Lenrubo's hair is exceptional. It blends seamlessly with my natural hair and the texture is exactly what I was looking for.",
    name: "Sarah Johnson",
    title: "Fashion Stylist"
  },
  {
    id: 2,
    quote: "After trying many different brands, I can confidently say Lenrubo offers the most natural looking and feeling Vietnamese hair on the market.",
    name: "Michelle Davis",
    title: "Salon Owner"
  },
  {
    id: 3,
    quote: "The customer service is outstanding and the hair quality is unmatched. I've been a loyal customer for years and recommend Lenrubo to everyone.",
    name: "Tanya Williams",
    title: "Influencer"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-sm uppercase tracking-widest text-gray-500 mb-3">Testimonials</h2>
          <h3 className="font-instrument text-3xl md:text-5xl">What Our Clients Say</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col">
              <div className="mb-6">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.25 21.75H6.75V14.25H14.25V21.75ZM29.25 21.75H21.75V14.25H29.25V21.75Z" fill="currentColor" opacity="0.2"/>
                </svg>
              </div>
              <p className="font-mono text-base mb-6 flex-grow">{testimonial.quote}</p>
              <Separator className="mb-6" />
              <div>
                <p className="font-mono text-sm font-semibold">{testimonial.name}</p>
                <p className="font-mono text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
