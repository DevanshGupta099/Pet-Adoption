import React, { useState } from 'react';
import { useModal } from './ModalContext';

const tabs = ['All', 'Birds', 'Cat', 'Dog', 'Kitten', 'Puppy'];

const PetsGallery = ({ pets = [] }) => {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState('All');

  // Filter pets
  let filteredPets = activeTab === 'All' 
    ? pets 
    : pets.filter(p => p.category && p.category.toLowerCase() === activeTab.toLowerCase());

  // Slice to 6 pets if 'All' is selected
  if (activeTab === 'All') {
    filteredPets = filteredPets.slice(0, 6);
  }

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center" id="pets">
      <h2 className="font-cursive text-5xl text-[#4a3120] mb-2 font-bold tracking-wide">Pets for Adoption</h2>
      <p className="text-[#756a61] mb-10 font-sans">Find your new best friend from our loving shelter</p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-2 rounded-full font-sans font-semibold transition-all ${
              activeTab === tab 
                ? 'bg-[#9bd444] text-white shadow-md scale-105' 
                : 'bg-white text-[#756a61] border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10">
        {filteredPets.map(pet => (
          <div 
            key={pet.id} 
            className="group relative h-[420px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            {/* Image Section */}
            <div className="relative h-3/5 overflow-hidden">
              <img 
                src={pet.image} 
                alt={pet.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-4 left-4 bg-white/95 text-[#4a3120] font-sans font-bold text-xs px-4 py-1.5 rounded-full shadow-sm">
                Age: {pet.age || '1 Yr'}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 text-left flex flex-col h-2/5 justify-between relative bg-white z-10 transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-2xl text-[#4a3120] font-sans">{pet.name}</h3>
                  <span className="bg-[#f0f8e6] text-[#9bd444] px-3 py-1 rounded-full text-xs font-bold">
                    {pet.status}
                  </span>
                </div>
                <p className="text-[#9bd444] font-medium text-sm">{pet.breed || pet.category}</p>
              </div>
              <p className="text-gray-400 text-sm flex items-center gap-1 mt-2">
                📍 {pet.city || 'Local Shelter'}
              </p>
            </div>

            {/* Hover Details Slide-Up Panel */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-white/95 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
              <h3 className="font-cursive font-bold text-4xl text-[#4a3120] mb-3">{pet.name}</h3>
              <p className="text-[#756a61] text-sm mb-6 leading-relaxed line-clamp-4 px-2 font-sans">
                {pet.description}
              </p>
              
              <div className="w-full flex justify-around mb-8 border-t border-b border-gray-100 py-3 text-[#756a61] font-sans text-sm">
                <div className="flex flex-col"><span className="font-bold text-[#4a3120]">Age</span>{pet.age}</div>
                <div className="w-px bg-gray-100"></div>
                <div className="flex flex-col"><span className="font-bold text-[#4a3120]">ID</span>{pet.id}</div>
              </div>

              <button 
                onClick={(e) => { e.stopPropagation(); openModal(pet); }}
                className="w-full bg-[#9bd444] text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-[#85b045] transition-colors font-sans text-lg"
              >
                Adopt {pet.name}
              </button>
            </div>

          </div>
        ))}
        {filteredPets.length === 0 && (
          <div className="col-span-full py-20 text-gray-400 font-sans">
            No pets found in this category. Check back later!
          </div>
        )}
      </div>
    </section>
  );
};

export default PetsGallery;
