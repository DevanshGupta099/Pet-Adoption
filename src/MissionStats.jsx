import React from 'react';

const MissionStats = () => {
  return (
    <section className="py-20 bg-brand-cream px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Mission */}
        <div>
          <h2 className="font-cursive text-5xl text-brand-dark mb-6 leading-tight">
            A life for the abandoned pets is our mission
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We believe that every animal deserves a second chance. Our dedicated team works tirelessly to rescue, rehabilitate, and rehome pets in need. Join us in making a difference in their lives.
          </p>
          <ul className="space-y-3 mb-8 text-gray-700 font-medium">
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-brand-green text-white flex items-center justify-center text-xs">✓</span>
              Provide immediate medical care
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-brand-green text-white flex items-center justify-center text-xs">✓</span>
              Find loving foster homes
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-brand-green text-white flex items-center justify-center text-xs">✓</span>
              Support post-adoption transition
            </li>
          </ul>
          <button className="bg-brand-green text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#85b045] transition">
            Know More
          </button>
        </div>

        {/* Right Column: Stats */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-8 border-brand-green flex items-center justify-center mb-4 bg-white shadow-xl">
              <span className="text-3xl font-bold text-brand-dark">1500+</span>
            </div>
            <p className="font-bold text-brand-dark uppercase tracking-wide">Animals Rescued</p>
          </div>
          
          <div className="flex flex-col items-center sm:translate-y-12">
            <div className="w-32 h-32 rounded-full border-8 border-brand-green flex items-center justify-center mb-4 bg-white shadow-xl">
              <span className="text-3xl font-bold text-brand-dark">300+</span>
            </div>
            <p className="font-bold text-brand-dark uppercase tracking-wide">Vet Doctors</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-8 border-brand-green flex items-center justify-center mb-4 bg-white shadow-xl">
              <span className="text-3xl font-bold text-brand-dark">2600+</span>
            </div>
            <p className="font-bold text-brand-dark uppercase tracking-wide">Caretakers</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionStats;
