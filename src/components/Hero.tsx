import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F4]/70 via-[#FDF8F4]/50 to-[#FDF8F4]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7A8B6F]/10 to-[#D4A0A0]/10" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#7A8B6F]/5 animate-float" />
      <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-[#D4A0A0]/5 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-[#C9A96E]/5 animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Script accent */}
        <p
          className={`font-great-vibes text-[#C9A96E] text-xl sm:text-2xl mb-4 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Welcome to
        </p>

        {/* Main Heading */}
        <h1
          className={`font-playfair font-semibold text-[#2D2D2D] mb-6 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Expozed <span className="text-[#7A8B6F] italic">Ink</span>
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`font-cormorant text-[#6B6B6B] text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-4 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Therapeutic Tattoo Studio & Art Gift Shop
        </p>

        {/* Decorative Divider */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-12 h-px bg-[#C9A96E]/50" />
          <div className="w-2 h-2 rounded-full bg-[#7A8B6F]/40" />
          <div className="w-12 h-px bg-[#C9A96E]/50" />
        </div>

        {/* Subheadline */}
        <p
          className={`font-inter text-[#6B6B6B] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Female-owned studio in Estacada, Oregon — Where your story becomes art.
          Meaningful tattoos in a calm, therapeutic space designed for your comfort.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-primary text-base"
          >
            Book Your Appointment
          </button>
          <button
            onClick={() => scrollTo('#portfolio')}
            className="btn-secondary text-base"
          >
            View My Work
          </button>
        </div>

        {/* Location Badge */}
        <p
          className={`font-inter text-[#A09890] text-xs tracking-[0.2em] uppercase mt-12 transition-all duration-1000 delay-1000 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ✿ 333 Broadway St, Suite A · Estacada, Oregon ✿
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-[#A09890] animate-gentle-pulse transition-all duration-1000 delay-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
