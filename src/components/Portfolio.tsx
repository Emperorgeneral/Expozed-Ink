import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState } from 'react';

const portfolioImages = [
  {
    url: '/images/portfolio/butterfly-tattoo.jpg',
    alt: 'Butterfly tattoo on lower back',
    category: 'Butterfly',
    span: 'tall',
  },
  {
    url: '/images/portfolio/snake-tattoo.jpg',
    alt: 'Snake tattoo on leg',
    category: 'Snake',
    span: 'wide',
  },
  {
    url: '/images/portfolio/floral-coverup.jpg',
    alt: 'Floral cover-up on shoulder',
    category: 'Floral',
    span: 'normal',
  },
  {
    url: '/images/portfolio/american-flag-rose.jpg',
    alt: 'American flag rose tattoo',
    category: 'Flag',
    span: 'normal',
  },
  {
    url: '/images/portfolio/mermaid-tattoo.jpg',
    alt: 'Mermaid-style tattoo on arm',
    category: 'Mermaid',
    span: 'normal',
  },
  {
    url: '/images/portfolio/fantasy-library-door.jpg',
    alt: 'Fantasy library/door tattoo on arm',
    category: 'Fantasy',
    span: 'tall',
  },
  // ...existing code for the rest of the images...
];

const categories = ['All', 'Floral', 'Mandala', 'Nature', 'Minimalist', 'Geometric', 'Script'];

export default function Portfolio() {
  const { ref: ref1, isVisible: vis1 } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? portfolioImages
    : portfolioImages.filter((img) => img.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#FDF8F4] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          ref={ref1}
          className={`text-center mb-12 transition-all duration-800 ${vis1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-great-vibes text-[#C9A96E] text-2xl mb-2">My Artwork</p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-4">
            Portfolio & <span className="text-[#7A8B6F] italic">Gallery</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-[#C9A96E]/50" />
            <div className="w-2 h-2 rounded-full bg-[#7A8B6F]/40" />
            <div className="w-12 h-px bg-[#C9A96E]/50" />
          </div>
          <p className="font-inter text-[#6B6B6B] mt-6 max-w-2xl mx-auto">
            A collection of my favorite pieces. Each one tells a unique story — 
            because your skin is a canvas and your story deserves to be told beautifully.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-inter text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#7A8B6F] text-white shadow-soft'
                  : 'bg-white text-[#6B6B6B] hover:bg-[#7A8B6F]/10 hover:text-[#7A8B6F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((img, i) => (
            <div
              key={`${img.url}-${i}`}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block font-inter text-[10px] tracking-[0.15em] uppercase text-white/80 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                    {img.category}
                  </span>
                  <p className="font-cormorant text-white text-lg font-medium">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-16">
          <p className="font-cormorant text-xl text-[#6B6B6B] mb-6 italic">
            Want to see more? Follow my daily work on Instagram
          </p>
          <a
            href="https://www.instagram.com/expozed_ink"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-blush"
          >
            @expozed_ink
          </a>
        </div>
      </div>
    </section>
  );
}
