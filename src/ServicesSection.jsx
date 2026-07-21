import React from 'react';

const services = [
  {
    title: 'Adopt a Pet',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
    desc: 'Give a loving home to a pet in need.',
  },
  {
    title: 'Looking for Pet Sitter?',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
    desc: 'Professional sitters for your furry friends.',
  },
  {
    title: 'Pet Training',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    desc: 'Expert training for a well-behaved pet.',
  },
  {
    title: 'Veterinary Care',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cbcb8122?auto=format&fit=crop&w=600&q=80',
    desc: 'Top notch medical care and checkups.',
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="font-cursive text-5xl text-[#3b9f93] mb-2">Services we Provide</h2>
      <p className="font-cursive text-2xl text-gray-400 mb-12">we fulfill all your needs</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((svc, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center pb-6">
            <img src={svc.image} alt={svc.title} className="w-full h-48 object-cover mb-6" />
            <h3 className="font-bold text-brand-dark text-xl mb-2">{svc.title}</h3>
            <p className="text-gray-500 mb-6 px-4">{svc.desc}</p>
            <div className="mt-auto w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white text-xl">
              🐾
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
