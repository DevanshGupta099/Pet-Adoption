import React, { useState } from 'react';

const AddPetSection = ({ onAddPet }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Dog',
    breed: '',
    age: '',
    city: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.image) return;
    
    onAddPet({
      ...formData,
      status: 'Available'
    });
    
    // Reset form
    setFormData({
      name: '',
      category: 'Dog',
      breed: '',
      age: '',
      city: '',
      image: '',
    });
    alert('Pet successfully added to the gallery!');
  };

  return (
    <section className="py-20 px-4 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-cursive text-5xl text-brand-dark mb-2">Register a Pet</h2>
          <p className="text-gray-500 font-sans">Know a pet that needs a home? Add them to our database.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#FBF8F1] p-8 rounded-3xl shadow-sm border border-gray-100 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">Pet Name *</label>
              <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green bg-white" placeholder="e.g. Buddy" />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">Category *</label>
              <select required name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green bg-white">
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Puppy">Puppy</option>
                <option value="Kitten">Kitten</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">Breed / Type</label>
              <input name="breed" value={formData.breed} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green bg-white" placeholder="e.g. Golden Retriever" />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">Age</label>
              <input name="age" value={formData.age} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green bg-white" placeholder="e.g. 2 Yrs or 3 Mos" />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">Location / City</label>
              <input name="city" value={formData.city} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green bg-white" placeholder="e.g. New York" />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">Image URL *</label>
              <input required name="image" value={formData.image} onChange={handleChange} type="url" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green bg-white" placeholder="https://..." />
            </div>
          </div>
          
          <button type="submit" className="w-full bg-brand-green text-white font-bold text-lg py-4 rounded-xl shadow-md hover:bg-[#85b045] transition-colors">
            Add Pet to Gallery
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddPetSection;
