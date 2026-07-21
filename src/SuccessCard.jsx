import React from 'react';

const SuccessCard = ({ user, pet, onReset }) => {
  return (
    <div className="success-card">
      <div className="success-icon">🎉</div>
        <h2 className="page-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Congratulations, {user.fullName.split(' ')[0]}!
        </h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
          Your adoption application for <strong>{pet.name}</strong> has been received. 
          We are thrilled to help you welcome your new family member!
        </p>

        <div className="details-grid">
          <div className="details-section">
            <h3>Adopter Details</h3>
            <p><strong>Name:</strong> {user.fullName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
          
          <div className="details-section">
            <h3>Pet Details</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img 
                src={pet.image} 
                alt={pet.name} 
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} 
              />
              <div>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-dark)', margin: 0 }}>{pet.name}</p>
                <p style={{ margin: 0, color: 'var(--text-light)' }}>{pet.category} • {pet.code || pet.id}</p>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{pet.description}</p>
          </div>
        </div>

        <button onClick={onReset} className="btn btn-primary" style={{ maxWidth: '250px', margin: '0 auto' }}>
          Return to Home
        </button>
    </div>
  );
};

export default SuccessCard;
