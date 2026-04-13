import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Gallery / Portfolio', to: '/gallery' },
    { label: 'Flash Designs', to: '/flash' },
    { label: 'Contact / Booking', to: '/contact' },
  ];
  const location = useLocation();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
          <span className="text-2xl font-playfair font-semibold tracking-tight text-[#2D2D2D] group-hover:text-[#7A8B6F] transition-colors">
            Expozed <span className="text-[#7A8B6F]">Ink</span>
          </span>
          <span className="hidden sm:inline-block w-px h-6 bg-[#C9A96E]/40" />
          <span className="hidden sm:block text-xs font-inter font-light text-[#6B6B6B] tracking-widest uppercase">
            LLC
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2 text-sm font-inter font-medium transition-colors rounded-full hover:bg-[#7A8B6F]/5 ${location.pathname === link.to ? 'text-[#7A8B6F]' : 'text-[#6B6B6B] hover:text-[#7A8B6F]'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Social + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://www.instagram.com/expozed_ink"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#6B6B6B] hover:text-[#D4A0A0] transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/ExpozedInk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#6B6B6B] hover:text-[#D4A0A0] transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-sm ml-2"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-[#2D2D2D]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-[#F5EDE4] px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left py-3 text-base font-inter font-medium border-b border-[#F5EDE4]/60 last:border-0 transition-colors ${location.pathname === link.to ? 'text-[#7A8B6F]' : 'text-[#2D2D2D] hover:text-[#7A8B6F]'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://www.instagram.com/expozed_ink"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#6B6B6B] hover:text-[#D4A0A0] transition-colors"
              title="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/ExpozedInk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#6B6B6B] hover:text-[#D4A0A0] transition-colors"
              title="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.tiktok.com/@expozedink"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#6B6B6B] hover:text-[#D4A0A0] transition-colors"
              title="TikTok"
            >
              <Music size={20} />
            </a>
          </div>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full mt-4 text-center"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
