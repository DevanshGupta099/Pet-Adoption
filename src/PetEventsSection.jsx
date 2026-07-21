import React from 'react';

const events = [
  {
    title: 'Puppy Playdate in the Park',
    date: 'Saturday, 12th August, 10:00 AM',
    image: 'https://loremflickr.com/600/400/dog,park?lock=40',
    desc: 'Bring your puppies for a morning of fun, socializing, and games. A great way for them to make new friends!',
  },
  {
    title: 'Relaxing Cat Yoga',
    date: 'Sunday, 13th August, 09:00 AM',
    image: 'https://loremflickr.com/600/400/cat,yoga?lock=41',
    desc: 'Join us for a peaceful morning of outdoor yoga alongside adorable rescue kittens.',
  },
  {
    title: 'Parrot Sing-along & Show',
    date: 'Saturday, 19th August, 02:00 PM',
    image: 'https://loremflickr.com/600/400/parrot?lock=42',
    desc: 'A wildly entertaining afternoon featuring talented, chatty birds. Perfect for the whole family!',
  }
];

const PetEventsSection = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-cursive text-5xl text-brand-dark mb-2">Upcoming Fun Events</h2>
        <p className="font-cursive text-2xl text-brand-green">join our community activities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((evt, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-gray-100 flex flex-col">
            <div className="h-56 overflow-hidden relative">
              <img 
                src={evt.image} 
                alt={evt.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-4 left-4 bg-brand-green text-white font-bold py-1 px-3 rounded-full text-sm">
                Event
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-bold text-2xl text-brand-dark mb-2">{evt.title}</h3>
              <p className="text-[#e69c24] font-medium mb-4 text-sm tracking-wide">📅 {evt.date}</p>
              <p className="text-gray-500 mb-8">{evt.desc}</p>
              
              <button className="mt-auto w-full border-2 border-brand-green text-brand-green font-bold py-3 rounded-full hover:bg-brand-green hover:text-white transition">
                RSVP Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetEventsSection;
