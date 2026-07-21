import React, { useState } from 'react';
import { useModal } from './ModalContext';

const AdoptionModal = () => {
  const { isOpen, closeModal, selectedPet } = useModal();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Adoption application submitted successfully!');
    closeModal();
  };

  const petImage = selectedPet?.image || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80';

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      ></div>
      
      {/* Modal Content - 2 Column Premium Layout */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 bg-white/50 backdrop-blur-md text-[#4a3120] hover:bg-white hover:text-[#9bd444] p-2 rounded-full transition-all shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Column - Pet Photo */}
        <div className="md:w-5/12 h-48 md:h-auto relative hidden sm:block">
          <img src={petImage} alt="Adopt" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
            <span className="bg-[#9bd444] self-start px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wide">
              {selectedPet ? 'Ready to Adopt' : 'General Inquiry'}
            </span>
            <h2 className="font-cursive text-4xl mb-1">{selectedPet?.name || 'Find a Friend'}</h2>
            <p className="text-sm text-white/90 font-sans">{selectedPet?.breed || 'Our shelter is full of love.'}</p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="md:w-7/12 p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-[#FBF8F1]">
          <div className="sm:hidden mb-6">
             <h2 className="font-cursive text-4xl text-[#4a3120]">Adopt {selectedPet?.name || 'a Pet'}</h2>
             <p className="text-[#756a61] text-sm mt-1">Fill out the form below to begin.</p>
          </div>
          
          <div className="hidden sm:block mb-8">
            <h3 className="font-bold text-2xl text-[#4a3120] font-sans">Application Form</h3>
            <p className="text-[#756a61] text-sm mt-1 font-sans">We'll review your details and get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#756a61] uppercase tracking-wider mb-2">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#9bd444] focus:ring-1 focus:ring-[#9bd444] transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#756a61] uppercase tracking-wider mb-2">Phone</label>
                <input required type="tel" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#9bd444] focus:ring-1 focus:ring-[#9bd444] transition-colors" placeholder="(555) 000-0000" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-[#756a61] uppercase tracking-wider mb-2">Email Address</label>
              <input required type="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#9bd444] focus:ring-1 focus:ring-[#9bd444] transition-colors" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#756a61] uppercase tracking-wider mb-2">Why are you a good fit?</label>
              <textarea required rows="3" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#9bd444] focus:ring-1 focus:ring-[#9bd444] transition-colors resize-none" placeholder="Tell us about your home and family..."></textarea>
            </div>
            
            <button type="submit" className="w-full py-4 bg-[#9bd444] text-white font-bold text-lg rounded-xl hover:bg-[#85b045] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all mt-4">
              Submit Application
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AdoptionModal;
