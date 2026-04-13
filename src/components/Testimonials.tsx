import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'BreAnn made me feel so comfortable from the moment I walked in. The studio is beautiful, calming, and she truly listened to what I wanted. My floral tattoo is absolutely perfect — I get compliments every day!',
    rating: 5,
    service: 'Custom Floral Piece',
  },
  {
    name: 'Jessica R.',
    text: 'After my mastectomy, I was nervous about getting a cover-up tattoo. BreAnn handled everything with such care, empathy, and artistry. She gave me back a piece of myself I thought was lost forever. I cannot recommend her enough.',
    rating: 5,
    service: 'Therapeutic Scar Cover-Up',
  },
  {
    name: 'Megan T.',
    text: 'The whole experience was healing in itself. BreAnn creates such a peaceful environment. My mandala came out more beautiful than I ever imagined. She\'s incredibly talented and kind.',
    rating: 5,
    service: 'Mandala Back Piece',
  },
  {
    name: 'Ashley K.',
    text: 'I drove over an hour for my appointment and it was SO worth it. The gift shop is adorable, the studio smells amazing, and BreAnn is just the sweetest. Already planning my next piece!',
    rating: 5,
    service: 'Nature-Inspired Sleeve',
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 sm:py-32 bg-[#F5EDE4]/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
      <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-[#7A8B6F]/5" />
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-[#D4A0A0]/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-great-vibes text-[#C9A96E] text-2xl mb-2">Kind Words</p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-4">
            What Clients <span className="text-[#7A8B6F] italic">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-[#C9A96E]/50" />
            <div className="w-2 h-2 rounded-full bg-[#7A8B6F]/40" />
            <div className="w-12 h-px bg-[#C9A96E]/50" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="text-[#C9A96E] fill-[#C9A96E]" />
        ))}
      </div>

      {/* Quote */}
      <p className="font-cormorant text-lg text-[#2D2D2D] italic leading-relaxed mb-6">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-playfair font-semibold text-[#2D2D2D]">{testimonial.name}</p>
          <p className="font-inter text-xs text-[#A09890] tracking-wide">{testimonial.service}</p>
        </div>
        <div className="text-4xl font-playfair text-[#C9A96E]/20">"</div>
      </div>
    </div>
  );
}
