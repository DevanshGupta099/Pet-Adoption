import React from 'react';
import { useModal } from './ModalContext';

const HeroSection = () => {
  const { openModal } = useModal();

  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center bg-[#f3f1ed]">
      {/* Background Image: Puppy looking at camera */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-left md:bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=2000&q=80')" }}
      >
        {/* Soft overlay to ensure text readability on the right side if needed, though the image itself should provide contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/40 md:to-white/60"></div>
      </div>

      {/* Slider Arrows (Visual Only) */}
      <button className="absolute left-6 z-10 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition">
        &larr;
      </button>
      <button className="absolute right-6 z-10 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition">
        &rarr;
      </button>

      {/* Content - Positioned on the right side as per mockup */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-12 md:px-20 flex justify-end">
        <div className="text-center md:text-right max-w-md w-full pt-12 md:pt-0">
          <h1 className="font-cursive text-5xl md:text-[5rem] text-[#4a3120] font-bold leading-tight drop-shadow-sm mb-4">
            Why Buy? Adopt
          </h1>
          <p className="font-cursive text-3xl md:text-4xl text-[#5c4033] mb-8 drop-shadow-sm">
            Lot of Pets need your attention
          </p>
          <div className="flex justify-center md:justify-end">
            <button
              onClick={() => openModal()}
              className="bg-[#9bd444] text-white font-sans font-bold text-lg px-8 py-3 rounded-xl shadow-lg hover:bg-[#85bd3a] transition-colors"
            >
              Adopt a Pet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
