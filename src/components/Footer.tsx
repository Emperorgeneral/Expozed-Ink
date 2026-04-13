import { Heart, MapPin, Phone, ArrowUp } from 'lucide-react';

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

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#2D2D2D] text-white relative overflow-hidden">
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-playfair text-2xl font-semibold mb-1">
              Expozed <span className="text-[#A3B18A] italic">Ink</span>
            </h3>
            <p className="font-cormorant text-[#A09890] text-lg mb-4">
              Therapeutic Tattoo Studio & Art Gift Shop
            </p>
            <p className="font-inter text-sm text-[#A09890] leading-relaxed max-w-xs">
              Female-owned studio in Estacada, Oregon. Where your story becomes art, 
              one beautiful piece at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Portfolio', 'Flash & Specials', 'Aftercare', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(`#${link.toLowerCase().replace(' & ', '').replace(' ', '')}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-inter text-sm text-[#A09890] hover:text-[#A3B18A] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#A3B18A] mt-0.5 shrink-0" />
                <span className="font-inter text-sm text-[#A09890]">
                  333 Broadway St, Suite A<br />
                  Estacada, OR 97023
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#A3B18A] shrink-0" />
                <a href="tel:+19715064142" className="font-inter text-sm text-[#A09890] hover:text-[#A3B18A] transition-colors">
                  (971) 506-4142
                </a>
              </li>
            </ul>

            {/* Studio Hours */}
            <div className="mt-6">
              <h5 className="font-inter text-xs tracking-[0.15em] uppercase text-[#A09890] mb-3">Studio Hours</h5>
              <div className="space-y-1 font-inter text-sm text-[#A09890]">
                <p>Tue – Sat: 10am – 6pm</p>
                <p>Sun – Mon: Closed</p>
                <p className="text-[#A3B18A] text-xs italic">By appointment only</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-5">Follow Along</h4>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.instagram.com/expozed_ink"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#A09890] hover:bg-[#A3B18A]/20 hover:text-[#A3B18A] transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/ExpozedInk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#A09890] hover:bg-[#A3B18A]/20 hover:text-[#A3B18A] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.tiktok.com/@expozedink"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#A09890] hover:bg-[#A3B18A]/20 hover:text-[#A3B18A] transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
            <p className="font-cormorant text-[#A09890] italic">
              Follow @expozed_ink for daily artwork, flash drops, and behind-the-scenes studio life.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-[#A09890]">
            © {new Date().getFullYear()} Expozed Ink LLC. All rights reserved.
          </p>
          <p className="font-inter text-xs text-[#A09890] flex items-center gap-1">
            Made with <Heart size={12} className="text-[#D4A0A0]" /> in Estacada, Oregon
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#A09890] hover:bg-[#A3B18A]/20 hover:text-[#A3B18A] transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
