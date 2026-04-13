import { useScrollReveal } from '../hooks/useScrollReveal';
import { Palette, Sparkles, Heart, Gift, PenTool, Flower2 } from 'lucide-react';

const services = [
  {
    icon: <PenTool size={28} />,
    title: 'Custom Tattoos',
    description: 'Every piece is designed from scratch, tailored to your story, your vision, and your healing journey. One-on-one consultation included.',
    tag: 'Signature Service',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Flash Designs & Specials',
    description: 'Pre-designed flash sheets available seasonally — spring florals, Friday the 13th specials, and limited-edition holiday designs.',
    tag: 'Seasonal',
  },
  {
    icon: <Heart size={28} />,
    title: 'Therapeutic Tattoos',
    description: 'Meaningful ink for healing, remembrance, and self-expression. Mastectomy scar cover-ups, memorial pieces, and affirmation tattoos.',
    tag: 'Healing-Focused',
  },
  {
    icon: <Flower2 size={28} />,
    title: 'Nature-Inspired Art',
    description: 'Specializing in botanical illustrations, mandalas, celestial designs, and elegant nature pieces that flow beautifully with the body.',
    tag: 'Specialty',
  },
  {
    icon: <Palette size={28} />,
    title: 'Cover-Ups & Refresh',
    description: 'Transform old, faded, or regretted tattoos into stunning new artwork. Consultation required to ensure the best possible outcome.',
    tag: 'Transformation',
  },
  {
    icon: <Gift size={28} />,
    title: 'Art Gift Shop',
    description: 'Browse our curated collection of unique art prints, handmade jewelry, crystals, candles, and one-of-a-kind gifts available at the studio.',
    tag: 'In-Studio',
  },
];

export default function Services() {
  const { ref: ref1, isVisible: vis1 } = useScrollReveal();

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F5EDE4]/40 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#7A8B6F]/5" />
      <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-[#D4A0A0]/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={ref1}
          className={`text-center mb-16 transition-all duration-800 ${vis1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-great-vibes text-[#C9A96E] text-2xl mb-2">What I Offer</p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-4">
            Services & <span className="text-[#7A8B6F] italic">Offerings</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-[#C9A96E]/50" />
            <div className="w-2 h-2 rounded-full bg-[#7A8B6F]/40" />
            <div className="w-12 h-px bg-[#C9A96E]/50" />
          </div>
          <p className="font-inter text-[#6B6B6B] mt-6 max-w-2xl mx-auto">
            Every service is delivered in my private, one-on-one studio space — because you deserve 
            an experience that's as special as the art you're getting.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-cormorant text-xl text-[#6B6B6B] mb-6 italic">
            Not sure what you're looking for? Let's chat about your vision.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Let's Create Something Beautiful
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-[#7A8B6F]/10 flex items-center justify-center text-[#7A8B6F] mb-5 group-hover:bg-[#7A8B6F] group-hover:text-white transition-all duration-300">
        {service.icon}
      </div>

      {/* Tag */}
      <span className="inline-block font-inter text-[10px] tracking-[0.15em] uppercase text-[#C9A96E] bg-[#C9A96E]/10 px-3 py-1 rounded-full mb-3">
        {service.tag}
      </span>

      {/* Content */}
      <h3 className="font-playfair text-xl font-semibold text-[#2D2D2D] mb-3">{service.title}</h3>
      <p className="font-inter text-[#6B6B6B] text-sm leading-relaxed">{service.description}</p>
    </div>
  );
}
