
import React, { useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-white border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="max-w-md">
            <h2 className="font-mono text-sm uppercase tracking-widest text-gray-500 mb-3">Get In Touch</h2>
            <h3 className="font-instrument text-3xl md:text-5xl mb-6">Contact Us</h3>
            <p className="font-mono text-base mb-8 text-gray-600">
              Have questions about our products or ready to place an order? Reach out through the form or contact us directly.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <Mail className="text-gray-400" size={18} aria-hidden />
                <a href="mailto:hello@lenrubo.com" className="font-mono text-base hover:text-gray-600 transition">
                  hello@lenrubo.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-gray-400" size={18} aria-hidden />
                <a href="tel:+18001234567" className="font-mono text-base hover:text-gray-600 transition">
                  +1 (800) 123-4567
                </a>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-100">
              <h4 className="font-mono text-base mb-4">Follow Us</h4>
              <div className="flex gap-6">
                <a href="#" className="font-mono text-sm uppercase hover:text-gray-600 transition-colors">Instagram</a>
                <a href="#" className="font-mono text-sm uppercase hover:text-gray-600 transition-colors">Facebook</a>
                <a href="#" className="font-mono text-sm uppercase hover:text-gray-600 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6" onSubmit={handleSubmit} aria-label="Contact form">
              <div>
                <label htmlFor="name" className="font-mono text-sm text-gray-600 mb-2 block">Name</label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border-gray-300 font-mono text-base rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-sm text-gray-600 mb-2 block">Email</label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border-gray-300 font-mono text-base rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-sm text-gray-600 mb-2 block">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 font-mono text-base rounded-none focus:outline-none focus:border-black"
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full font-mono uppercase text-sm px-6 py-6 bg-black text-white hover:bg-gray-900 rounded-none flex justify-center items-center"
                disabled={sent}
              >
                {sent ? "Message Sent" : "Send Message"}
                {!sent && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
