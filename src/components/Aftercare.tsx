import { useScrollReveal } from '../hooks/useScrollReveal';
import { Leaf, Droplets, Sun, Ban, Shirt, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <Ban size={24} />,
    title: 'Keep It Clean & Dry',
    description: 'For the first 24-48 hours, keep your bandage on. After removing, gently wash with lukewarm water and fragrance-free antibacterial soap. Pat dry with a clean paper towel — never rub.',
    tip: 'Tip: Wash your hands thoroughly before touching your new tattoo.',
  },
  {
    icon: <Droplets size={24} />,
    title: 'Moisturize Regularly',
    description: 'Apply a thin layer of recommended aftercare ointment (like Aquaphor or a tattoo-specific balm) 2-3 times daily. Less is more — don\'t suffocate the skin.',
    tip: 'Tip: Switch to an unscented lotion after the first week.',
  },
  {
    icon: <Sun size={24} />,
    title: 'Avoid Sun & Water',
    description: 'Stay out of direct sunlight, pools, hot tubs, baths, and the ocean for at least 2-3 weeks. Your tattoo is an open wound and needs a clean, dry environment to heal.',
    tip: 'Tip: Once healed, always use SPF 30+ to keep your tattoo looking vibrant.',
  },
  {
    icon: <Shirt size={24} />,
    title: 'Wear Loose Clothing',
    description: 'Wear loose, breathable, clean clothing over your new tattoo. Avoid tight fabrics that can rub against the healing skin and cause irritation or ink loss.',
    tip: 'Tip: Natural fibers like cotton are best during the healing process.',
  },
  {
    icon: <Leaf size={24} />,
    title: 'No Picking or Scratching',
    description: 'As your tattoo heals, it will peel and itch — this is completely normal! Resist the urge to pick, scratch, or peel the scabs. Let it heal naturally.',
    tip: 'Tip: Light tapping or slapping can help relieve itching without damaging the tattoo.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Healing Timeline',
    description: 'Surface healing takes about 2-3 weeks, but complete healing beneath the skin takes 3-4 months. Be patient and consistent with your aftercare routine for the best results.',
    tip: 'Tip: If you notice excessive redness, swelling, or pus, contact BreAnn or a doctor.',
  },
];

export default function Aftercare() {
  const { ref: ref1, isVisible: vis1 } = useScrollReveal();

  return (
    <section id="aftercare" className="py-24 sm:py-32 bg-[#F5EDE4]/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
      <div className="absolute top-20 right-10 w-36 h-36 rounded-full bg-[#7A8B6F]/5" />
      <div className="absolute bottom-20 left-10 w-28 h-28 rounded-full bg-[#D4A0A0]/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={ref1}
          className={`text-center mb-16 transition-all duration-800 ${vis1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-great-vibes text-[#C9A96E] text-2xl mb-2">Keep It Beautiful</p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-4">
            Tattoo <span className="text-[#7A8B6F] italic">Aftercare</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-[#C9A96E]/50" />
            <div className="w-2 h-2 rounded-full bg-[#7A8B6F]/40" />
            <div className="w-12 h-px bg-[#C9A96E]/50" />
          </div>
          <p className="font-inter text-[#6B6B6B] mt-6 max-w-2xl mx-auto">
            Proper aftercare is essential for a beautiful, long-lasting tattoo. 
            Follow these guidelines to ensure your new art heals perfectly.
          </p>
        </div>

        {/* Aftercare Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} />
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 bg-[#D4A0A0]/10 rounded-2xl p-6 sm:p-8 border border-[#D4A0A0]/20 text-center">
          <p className="font-cormorant text-lg text-[#2D2D2D] mb-2">
            Have questions during the healing process?
          </p>
          <p className="font-inter text-[#6B6B6B] text-sm">
            Don't hesitate to reach out! Call or text{' '}
            <a href="tel:+19715064142" className="text-[#7A8B6F] font-medium hover:underline">
              (971) 506-4142
            </a>{' '}
            anytime — I'm always here to help.
          </p>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-7 shadow-soft hover:shadow-elevated transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Step Number + Icon */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-8 rounded-full bg-[#7A8B6F]/10 flex items-center justify-center text-[#7A8B6F] font-playfair font-semibold text-sm">
          {index + 1}
        </span>
        <div className="text-[#7A8B6F]">{step.icon}</div>
      </div>

      <h3 className="font-playfair text-lg font-semibold text-[#2D2D2D] mb-3">{step.title}</h3>
      <p className="font-inter text-sm text-[#6B6B6B] leading-relaxed mb-4">{step.description}</p>
      <div className="bg-[#F5EDE4]/60 rounded-lg p-3">
        <p className="font-inter text-xs text-[#7A8B6F] font-medium">{step.tip}</p>
      </div>
    </div>
  );
}
