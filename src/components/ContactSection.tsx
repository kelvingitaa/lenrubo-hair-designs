
import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500); // Reset after 3.5s
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
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
            Have questions, want to place an order, or just say hello? Reach out through the form, or contact us directly:
          </p>
          <div className="flex items-center gap-4 mb-4">
            <Mail className="text-primary" aria-hidden />
            <span className="font-mono">
              <a href="mailto:hello@lenrubo.com" className="underline hover:text-primary transition">hello@lenrubo.com</a>
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <Phone className="text-primary" aria-hidden />
            <span className="font-mono">
              <a href="tel:+18001234567" className="underline hover:text-primary transition">+1 (800) 123-4567</a>
            </span>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md font-mono text-base"
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your Name"
              required
            />
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md font-mono text-base"
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your Email"
              required
            />
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md font-mono text-base"
              name="message"
              placeholder="Your Message"
              aria-label="Your Message"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 font-mono rounded-md hover:bg-gray-800 transition-colors"
              disabled={sent}
            >
              {sent ? "Thank you! Message Sent." : "Send Message"}
            </button>
          </form>
          {sent && (
            <div className="font-mono text-green-600 mt-2 animate-fade-in" aria-live="polite">
              We have received your message and will get back to you soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
