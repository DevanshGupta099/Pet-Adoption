import React from 'react';
import puppyImg from './assets/puppy1.jpg';

const BlogActionCards = () => {
  return (
    <section className="py-20 bg-[#FBF8F1] px-4 text-center">
      <h2 className="font-cursive text-5xl text-brand-dark mb-12">Blog & Our News</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="relative h-64 rounded-2xl overflow-hidden group">
          <img src="https://loremflickr.com/600/400/dog,stray?lock=30" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Dog" />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 text-left">
            <h3 className="font-bold text-2xl text-white mb-2 leading-tight">Report a stray dog</h3>
            <p className="text-brand-green font-bold flex items-center gap-2">
              📞 1-800-STRAY-DOG
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-64 rounded-2xl overflow-hidden group">
          <img src="https://loremflickr.com/600/400/pets,team?lock=31" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Cat" />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 text-left">
            <h3 className="font-bold text-2xl text-white mb-2 leading-tight">Want to join us?</h3>
            <p className="text-brand-green font-bold flex items-center gap-2">
              ✉️ careers@petadopt.org
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-64 rounded-2xl overflow-hidden group">
          <img src={puppyImg} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Rescue" />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 text-left">
            <h3 className="font-bold text-2xl text-white mb-2 leading-tight">Report animal harassment</h3>
            <p className="text-red-400 font-bold flex items-center gap-2">
              🚨 24x7 Emergency Care
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogActionCards;
