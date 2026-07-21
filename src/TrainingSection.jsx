import React from 'react';
import birdImg from './assets/birds.jpg';

const TrainingSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-cursive text-5xl text-brand-dark mb-12 text-center">Free training to handle pets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">

          {/* Column 1 */}
          <div className="flex bg-[#FBF8F1] rounded-3xl p-8 relative overflow-hidden">
            {/* Partial edge bird image */}
            <img
              src={birdImg}
              alt="Bird"
              className="absolute -left-12 top-1/2 -translate-y-1/2 w-40 h-40 object-cover rounded-full border-4 border-white shadow-xl hidden sm:block"
            />
            <div className="sm:ml-32 w-full">
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Taking care of birds</h3>
              <p className="text-brand-green font-medium mb-4">🗓 Oct 12, 2026 | 📍 Central Park</p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-green"></div> Diet and Nutrition</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-green"></div> Socializing Tips</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-green"></div> Cage Maintenance</li>
              </ul>
              <button className="text-brand-green border-2 border-brand-green font-bold py-2 px-6 rounded-full hover:bg-brand-green hover:text-white transition">
                Register Now
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex bg-[#FBF8F1] rounded-3xl p-8 relative overflow-hidden">
            <div className="w-full sm:mr-32">
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Feeding a Cat to be healthy</h3>
              <p className="text-brand-green font-medium mb-4">🗓 Oct 15, 2026 | 📍 Animal Center</p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-green"></div> Right Portion Sizes</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-green"></div> Hydration Importance</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-green"></div> Avoiding Toxic Foods</li>
              </ul>
              <button className="text-brand-green border-2 border-brand-green font-bold py-2 px-6 rounded-full hover:bg-brand-green hover:text-white transition">
                Register Now
              </button>
            </div>
            {/* Partial edge cat image */}
            <img
              src="https://loremflickr.com/400/400/cat?lock=21"
              alt="Cat"
              className="absolute -right-12 top-1/2 -translate-y-1/2 w-40 h-40 object-cover rounded-full border-4 border-white shadow-xl hidden sm:block"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
