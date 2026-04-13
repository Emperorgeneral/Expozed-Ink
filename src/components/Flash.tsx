import { useScrollReveal } from '../hooks/useScrollReveal';
import { Sparkles, Calendar, Tag } from 'lucide-react';

const flashItems = [
  {
    title: 'Fun Concept Up for Grabs',
    description: 'Unique flash design available for your next tattoo. Contact to claim!',
    image: '/images/flash-fun-concept.jpg',
    tag: 'Available',
    available: true,
  },
  {
    title: 'Oldies but Goodies',
    description: 'Classic flash designs still available for your next tattoo session.',
    image: '/images/flash-oldies-goodies.jpg',
    tag: 'Classic',
    available: true,
  },
  {
    title: 'Neck Piece Coming Up',
    description: 'Exciting neck piece design, ready for your next appointment!',
    image: '/images/flash-neck-piece.jpg',
    tag: 'New',
    available: true,
  },
];

export default function Flash() {
  const { ref: ref1, isVisible: vis1 } = useScrollReveal();

  return (
    <section id="flash" className="py-24 sm:py-32 bg-[#FDF8F4] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      {/* Decorative */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-[#7A8B6F]/5" />
      <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-[#D4A0A0]/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={ref1}
          className={`text-center mb-16 transition-all duration-800 ${vis1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-great-vibes text-[#C9A96E] text-2xl mb-2">Limited Editions</p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-4">
            Flash & <span className="text-[#7A8B6F] italic">Specials</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-[#C9A96E]/50" />
            <div className="w-2 h-2 rounded-full bg-[#7A8B6F]/40" />
            <div className="w-12 h-px bg-[#C9A96E]/50" />
          </div>
          <p className="font-inter text-[#6B6B6B] mt-6 max-w-2xl mx-auto">
            Pre-designed flash sheets available seasonally. Follow my Instagram 
            to catch them before they're gone — each design can only be tattooed once!
          </p>
        </div>

        {/* Flash Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {flashItems.map((item, i) => (
            <FlashCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-16 bg-[#7A8B6F]/5 rounded-2xl p-8 sm:p-10 border border-[#7A8B6F]/10">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-xl bg-[#7A8B6F]/10 flex items-center justify-center text-[#7A8B6F] shrink-0">
              <Sparkles size={28} />
            </div>
            <div className="flex-1">
              <h3 className="font-playfair text-xl font-semibold text-[#2D2D2D] mb-2">
                How Flash Works
              </h3>
              <p className="font-inter text-[#6B6B6B] text-sm leading-relaxed">
                Flash designs are pre-drawn tattoos available on a first-come, first-served basis. 
                Each design can only be tattooed once — making your piece truly one-of-a-kind. 
                I post new flash sheets on Instagram, so follow <strong className="text-[#7A8B6F]">@expozed_ink</strong> to 
                never miss a drop!
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <div className="flex items-center gap-2 text-sm font-inter text-[#6B6B6B]">
                <Calendar size={16} className="text-[#7A8B6F]" />
                Posted seasonally
              </div>
              <div className="flex items-center gap-2 text-sm font-inter text-[#6B6B6B]">
                <Tag size={16} className="text-[#7A8B6F]" />
                Starting at $80
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlashCard({ item, index }: { item: typeof flashItems[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } flash-delay-${index}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Tag */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-inter font-medium tracking-wide ${
          item.available
            ? 'bg-[#7A8B6F]/90 text-white'
            : 'bg-[#A09890]/90 text-white'
        }`}>
          {item.tag}
        </div>
        {/* Availability Badge */}
        {!item.available && (
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-white/90 px-5 py-2 rounded-full font-inter text-sm font-medium text-[#2D2D2D]">
              Coming Soon
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-lg font-semibold text-[#2D2D2D] mb-2">{item.title}</h3>
        <p className="font-inter text-sm text-[#6B6B6B] leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}
