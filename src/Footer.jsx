import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/20 pb-12">
        
        {/* Col 1 */}
        <div>
          <h2 className="font-cursive text-3xl mb-4 text-brand-green flex items-center gap-2">
            <span>🐾</span> Pet Shop
          </h2>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            We are dedicated to rescuing, rehabilitating, and rehoming pets in need. Join our community to make a real difference.
          </p>
          <div className="flex gap-4">
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-brand-green transition">🐦</span>
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-brand-green transition">📘</span>
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-brand-green transition">📷</span>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h3 className="font-bold text-lg mb-6">Helpful Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
              <span className="text-brand-green">›</span> Adopt a Pet
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
              <span className="text-brand-green">›</span> Pet Services
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
              <span className="text-brand-green">›</span> Free Training
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
              <span className="text-brand-green">›</span> Donate Now
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h3 className="font-bold text-lg mb-6">Overview</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">About Us</li>
            <li className="hover:text-white cursor-pointer transition">Contact Us</li>
            <li className="hover:text-white cursor-pointer transition">Our Mission</li>
            <li className="hover:text-white cursor-pointer transition">Testimonials</li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h3 className="font-bold text-lg mb-6">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-4">
            Get the latest updates and news directly to your inbox.
          </p>
          <div className="flex bg-white/10 rounded-full overflow-hidden p-1">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent border-none outline-none text-white px-4 py-2 w-full text-sm"
            />
            <button className="bg-brand-green w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#85b045] transition shrink-0">
              ✉️
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2026 Pet Adoption Center. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
          <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
