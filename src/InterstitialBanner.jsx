import React from 'react';

const InterstitialBanner = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-end px-4 md:px-20 overflow-hidden mt-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70"></div>
      </div>

      <div className="relative z-10 text-right max-w-lg">
        <h2 className="font-cursive text-4xl md:text-5xl text-white mb-6 drop-shadow-md">
          Want a pet for your loved ones? Try our Adoption Services
        </h2>
        <button className="bg-brand-dark text-white font-sans font-semibold text-lg px-8 py-3 rounded-full hover:bg-black transition-colors shadow-lg">
          Get a Pet Now
        </button>
      </div>
    </section>
  );
};

export default InterstitialBanner;
