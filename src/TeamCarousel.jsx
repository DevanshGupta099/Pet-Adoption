import React from 'react';

const team = [
  { name: 'Sarah Jenkins', role: 'BOARDING | EXP 3 YRS', image: 'https://loremflickr.com/300/300/portrait?lock=60' },
  { name: 'Mike Ross', role: 'TRAINER | EXP 5 YRS', image: 'https://loremflickr.com/300/300/portrait?lock=61' },
  { name: 'Emily Chen', role: 'SITTER | EXP 2 YRS', image: 'https://loremflickr.com/300/300/portrait?lock=62' },
  { name: 'David Smith', role: 'TRAINER | EXP 8 YRS', image: 'https://loremflickr.com/300/300/portrait?lock=63' },
  { name: 'Jessica Alba', role: 'BOARDING | EXP 4 YRS', image: 'https://loremflickr.com/300/300/portrait?lock=64' },
  { name: 'Chris Evans', role: 'SITTER | EXP 1 YR', image: 'https://loremflickr.com/300/300/portrait?lock=65' },
];

const TeamCarousel = () => {
  return (
    <section className="py-20 bg-white px-4 text-center">
      <h2 className="font-cursive text-5xl text-brand-dark mb-12">Popular Pet Sitters/Trainers for Hire</h2>
      
      <div className="max-w-7xl mx-auto flex flex-nowrap overflow-x-auto gap-8 pb-8 scrollbar-hide justify-start lg:justify-center">
        {team.map((member, idx) => (
          <div key={idx} className="flex-shrink-0 w-48 flex flex-col items-center">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-md border-4 border-white"
            />
            <h3 className="font-bold text-lg text-brand-dark">{member.name}</h3>
            <p className="text-xs text-brand-green font-bold tracking-wider mb-3">{member.role}</p>
            <div className="flex gap-2 text-gray-400">
              <span className="cursor-pointer hover:text-brand-green">🐦</span>
              <span className="cursor-pointer hover:text-brand-green">📘</span>
              <span className="cursor-pointer hover:text-brand-green">🌐</span>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-8 border-2 border-brand-dark text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-brand-dark hover:text-white transition">
        Apply & become a Pet Sitter
      </button>
    </section>
  );
};

export default TeamCarousel;
