import React, { useState, useMemo } from 'react';

const LandingPage = ({ pets, onAdoptClick }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Dog', 'Cat', 'Bird', 'Rabbit', 'Other'];

  const filteredPets = useMemo(() => {
    if (filter === 'All') return pets;
    return pets.filter(p => p.category === filter);
  }, [pets, filter]);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Perfect Companion</h1>
          <p className="hero-subtitle">
            We connect loving families with pets who need a forever home. 
            Browse our available pets below and start your adoption journey today!
          </p>
          <div className="hero-buttons">
            <a href="#pets" className="btn btn-primary" style={{ width: 'auto' }}>
              Meet the Pets
            </a>
            <a href="#how-it-works" className="btn btn-secondary" style={{ width: 'auto' }}>
              How it Works
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon">👀</div>
            <h3>1. Find a Pet</h3>
            <p>Browse our selection of adorable pets waiting for a home.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">📝</div>
            <h3>2. Apply</h3>
            <p>Fill out a quick adoption application for your chosen pet.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">🏡</div>
            <h3>3. Take Them Home</h3>
            <p>Once approved, bring your new furry friend home!</p>
          </div>
        </div>
      </section>

      <section id="pets" className="pets-section">
        <h2 className="section-title">Available for Adoption</h2>
        
        <div className="filter-bar">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}s
            </button>
          ))}
        </div>

        <div className="pets-grid">
          {filteredPets.map(pet => (
            <div key={pet.id} className="card pet-card">
              <div className="pet-image-container">
                <div className={`status-badge ${pet.status === 'Available' ? 'status-available' : 'status-not-available'}`}>
                  {pet.status}
                </div>
                <img 
                  src={pet.image} 
                  alt={pet.name} 
                  className="pet-image" 
                />
              </div>
              
              <div className="pet-info">
                <h3 className="pet-name">{pet.name}</h3>
                <div className="pet-meta">
                  <span>{pet.code || pet.id}</span>
                  <span>{pet.category}</span>
                </div>
                
                <p className="pet-desc">{pet.description}</p>
                
                {pet.centerContact && (
                  <div className="pet-contact">
                    <span className="pet-contact-icon">📞</span>
                    Center: {pet.centerContact}
                  </div>
                )}
                
                <button 
                  onClick={() => onAdoptClick(pet)} 
                  className="btn btn-primary"
                  disabled={pet.status !== 'Available'}
                >
                  {pet.status === 'Available' ? 'Adopt Me' : 'Already Adopted'}
                </button>
              </div>
            </div>
          ))}
        </div>
        {filteredPets.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '1.2rem' }}>
            No pets found for this category right now.
          </p>
        )}
      </section>

      <section id="testimonials" className="testimonials-section">
        <h2 className="section-title" style={{ color: 'white' }}>Happy Tails</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">"Adopting Bella was the best decision of our lives. The process was so easy and the center staff were amazing!"</p>
            <h4>— The Smith Family</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"We found the perfect lazy Sunday companion in Luna. She adjusted so quickly to her new home."</p>
            <h4>— Sarah J.</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"The adoption flow was seamless. I adopted two pets on the same day without any hassle!"</p>
            <h4>— Michael T.</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
