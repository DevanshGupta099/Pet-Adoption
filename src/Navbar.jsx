import React from 'react';

const Navbar = () => {
  return (
    <div className="relative w-full z-50">
      {/* Navbar Container */}
      <nav className="bg-brand-cream w-full flex justify-center items-center py-3 px-4 md:px-12 relative z-20">

        {/* Left Links */}
        <div className="hidden md:flex gap-8 items-center text-[#756a61] font-sans font-medium text-[16px]">
          <a href="#" className="flex items-center gap-2 text-[#9bd444]">
            <span className="text-[#9bd444] text-xs">🐾</span> Home
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#9bd444] transition-colors">
            <span className="text-xs">🐾</span> About
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#9bd444] transition-colors">
            <span className="text-xs">🐾</span> News
          </a>
        </div>

        {/* Center Logo */}
        <div className="mx-8 md:mx-16 flex flex-col items-center">
          <div className="w-[60px] h-[55px] relative flex items-center justify-center -mt-1">
            {/* Logo from the sketch: A heart shaped badge with a dog/cat silhouette inside */}
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
              <path d="M50 95 C 50 95 5 65 10 35 C 15 5 45 10 50 25 C 55 10 85 5 90 35 C 95 65 50 95 50 95 Z" fill="white" stroke="#684a34" strokeWidth="4" strokeLinejoin="round" />
              {/* Abstract Dog Silhouette */}
              <path d="M35 65 L35 45 C35 40 45 40 45 35 L45 30 C45 25 35 25 30 35 L25 50 Z" fill="#029fc1" />
              {/* Abstract Cat Silhouette */}
              <path d="M65 65 L65 50 C65 40 55 45 55 55 Z" fill="#e69c24" />
            </svg>
          </div>
          <span className="font-cursive text-2xl font-bold text-[#684a34] mt-1 tracking-wider">Pets</span>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex gap-8 items-center text-[#756a61] font-sans font-medium text-[16px]">
          <a href="#pets" className="flex items-center gap-2 hover:text-[#9bd444] transition-colors">
            <span className="text-xs">🐾</span> Gallery
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#9bd444] transition-colors">
            <span className="text-xs">🐾</span> Pages
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#9bd444] transition-colors">
            <span className="text-xs">🐾</span> Contact
          </a>
        </div>
      </nav>

      {/* Torn Paper / Sketch Edge SVG at the bottom */}
      {/* Overlapping the hero section perfectly */}
      <div className="absolute bottom-0 left-0 w-full translate-y-[98%] z-10 pointer-events-none">
        <svg preserveAspectRatio="none" viewBox="0 0 1200 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-5 sm:h-8 fill-[#FBF8F1]">
          {/* Jagged, sketched tear path */}
          <path d="M0,0 L0,15 L20,30 L40,10 L70,35 L90,15 L120,30 L150,5 L180,25 L210,15 L240,35 L260,20 L290,40 L330,10 L370,35 L410,15 L450,30 L480,5 L520,35 L560,10 L600,25 L630,5 L670,30 L710,15 L750,35 L790,10 L830,40 L870,20 L910,35 L950,15 L980,30 L1020,5 L1060,25 L1090,10 L1130,35 L1160,20 L1200,35 L1200,0 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
