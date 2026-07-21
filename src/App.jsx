import React, { useState } from 'react';
import { ModalProvider } from './ModalContext';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import InterstitialBanner from './InterstitialBanner';
import PetsGallery from './PetsGallery';
import TrainingSection from './TrainingSection';
import MissionStats from './MissionStats';
import TeamCarousel from './TeamCarousel';
import BlogActionCards from './BlogActionCards';
import PetEventsSection from './PetEventsSection';
import Footer from './Footer';
import AdoptionModal from './AdoptionModal';
import AddPetSection from './AddPetSection';
import { petsData as initialPetsData } from './data';

function App() {
  const [pets, setPets] = useState(initialPetsData);

  const handleAddPet = (newPet) => {
    // Generate an automatic sequential ID
    const newId = `PET-0${pets.length + 1}`;
    setPets([{ ...newPet, id: newId }, ...pets]);
  };

  return (
    <ModalProvider>
      <div className="font-sans antialiased text-brand-dark bg-brand-cream overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <InterstitialBanner />
        
        {/* Pass state to Gallery */}
        <PetsGallery pets={pets} />

        {/* Section to dynamically add a pet */}
        <AddPetSection onAddPet={handleAddPet} />

        <TrainingSection />
        <MissionStats />
        <TeamCarousel />
        <BlogActionCards />
        <PetEventsSection />
        <Footer />

        <AdoptionModal />
      </div>
    </ModalProvider>
  );
}

export default App;
