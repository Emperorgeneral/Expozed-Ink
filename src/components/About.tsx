import { useScrollReveal } from '../hooks/useScrollReveal';

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

export default function About() {
  const { ref: ref1, isVisible: vis1 } = useScrollReveal();
  const { ref: ref2, isVisible: vis2 } = useScrollReveal();

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FDF8F4] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-0 w-64 h-64 rounded-full bg-[#7A8B6F]/5 -translate-y-1/2" />
      <div className="absolute bottom-10 left-0 w-40 h-40 rounded-full bg-[#D4A0A0]/5 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          ref={ref1}
          className={`text-center mb-16 transition-all duration-800 ${vis1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-great-vibes text-[#C9A96E] text-2xl mb-2">Meet Your Artist</p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-4">
            About <span className="text-[#7A8B6F] italic">BreAnn</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-[#C9A96E]/50" />
            <div className="w-2 h-2 rounded-full bg-[#7A8B6F]/40" />
            <div className="w-12 h-px bg-[#C9A96E]/50" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div
            ref={ref2}
            className={`transition-all duration-800 delay-200 ${vis2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/images/about-breann.webp"
                  alt="BreAnn Goodenough smiling in her favorite new hoodie at Expozed Ink studio"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#7A8B6F]/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C9A96E]/30 rounded-tl-2xl" />

              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-soft">
                <p className="font-playfair text-2xl font-bold text-[#7A8B6F]">15+</p>
                <p className="font-inter text-xs text-[#6B6B6B] tracking-wide uppercase">Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h3 className="font-cormorant text-2xl sm:text-3xl font-medium text-[#2D2D2D] leading-snug">
              "I believe tattoos are more than art on skin — they're a form of healing, a way to tell your story, and a celebration of who you are."
            </h3>

            <div className="space-y-4 font-inter text-[#6B6B6B] leading-relaxed">
              <p>
                Hi, I'm <strong className="text-[#2D2D2D]">BreAnn Goodenough</strong>, the owner and lead artist at Expozed Ink LLC. 
                With over 15 years of experience in the tattoo industry, I've dedicated my career to creating 
                a safe, calming, and therapeutic environment where every client feels heard, respected, and 
                genuinely cared for.
              </p>
              <p>
                My approach to tattooing is deeply personal and nature-inspired. I specialize in creating 
                designs that carry meaning — whether it's a floral piece that honors a loved one, a mandala 
                that represents your journey of healing, or a delicate nature scene that captures a 
                cherished memory.
              </p>
              <p>
                My cozy studio in downtown Estacada is more than just a tattoo shop — it's an intimate, 
                one-on-one space where you can relax, breathe, and experience the art of tattooing in 
                the most comfortable way possible. And don't forget to browse the attached{' '}
                <strong className="text-[#7A8B6F]">art gift shop</strong> — it's filled with unique, 
                handpicked items that make perfect gifts!
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Approach', value: 'Therapeutic & Personal' },
                { label: 'Specialties', value: 'Floral, Nature, Mandalas' },
                { label: 'Studio', value: 'Private & Intimate' },
                { label: 'Vibe', value: 'Calm & Welcoming' },
              ].map((item) => (
                <div key={item.label} className="bg-[#F5EDE4]/60 rounded-xl p-4">
                  <p className="font-inter text-xs text-[#A09890] tracking-wide uppercase mb-1">{item.label}</p>
                  <p className="font-cormorant text-lg font-medium text-[#2D2D2D]">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <p className="font-inter text-sm text-[#6B6B6B]">Follow my work:</p>
              <a href="https://www.instagram.com/expozed_ink" target="_blank" rel="noopener noreferrer" className="p-2 text-[#6B6B6B] hover:text-[#D4A0A0] transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/ExpozedInk" target="_blank" rel="noopener noreferrer" className="p-2 text-[#6B6B6B] hover:text-[#D4A0A0] transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.tiktok.com/@expozedink" target="_blank" rel="noopener noreferrer" className="p-2 text-[#6B6B6B] hover:text-[#D4A0A0] transition-colors" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
