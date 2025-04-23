
import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => (
  <section className="py-20 px-4 bg-white">
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2">
        <img
          src="/lovable-uploads/photo-1460925895917-afdab827c52f"
          alt="Contact workspace"
          className="rounded-2xl shadow-lg w-full object-cover max-h-[400px]"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="font-instrument text-3xl md:text-4xl mb-2">Contact Us</h2>
        <p className="font-mono text-lg mb-2">
          Have questions, want to place an order, or just say hello? Reach out via the form or directly:
        </p>
        <div className="flex items-center gap-4 mb-4">
          <Mail className="text-primary" />
          <span className="font-mono">hello@lenrubo.com</span>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <Phone className="text-primary" />
          <span className="font-mono">+1 (800) 123-4567</span>
        </div>
        <form className="space-y-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md font-mono text-base"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md font-mono text-base"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md font-mono text-base"
            name="message"
            placeholder="Your Message"
            rows={4}
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 font-mono rounded-md hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
