import React, { useState } from 'react';

const AdoptionForm = ({ pet, onSubmit, onCancel }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      fullName,
      email,
      phone,
      address
    });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 className="page-title" style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'left' }}>
        Adopt {pet.name}
      </h2>
      <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
        Please fill out your details below to proceed with adopting {pet.name} the {pet.category}.
      </p>
      
      <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input 
              type="text" 
              className="form-input" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              placeholder="e.g. John Doe" 
              required 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              className="form-input" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="e.g. john@example.com" 
              required 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input 
              type="tel" 
              className="form-input" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="e.g. (555) 123-4567" 
              required 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Home Address</label>
            <textarea 
              className="form-textarea" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              placeholder="Your full residential address..." 
              style={{ minHeight: '80px' }}
              required
            ></textarea>
          </div>

          <div className="btn-group">
            <button type="submit" className="btn btn-primary">Submit Application</button>
            <button type="button" onClick={onCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
    </div>
  );
};

export default AdoptionForm;
