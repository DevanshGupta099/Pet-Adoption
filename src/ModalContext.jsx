import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const openModal = (pet = null) => {
    setSelectedPet(pet);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Delay resetting pet to allow for closing animation if needed
    setTimeout(() => setSelectedPet(null), 300);
  };

  return (
    <ModalContext.Provider value={{ isOpen, selectedPet, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
