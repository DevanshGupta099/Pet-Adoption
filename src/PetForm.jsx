import { useState } from 'react';

const PetForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [category, setCategory] = useState('Dog');
  const [status, setStatus] = useState('Available');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      code,
      category,
      status,
      description
    });
  };

  return (
    <div className="card">
      <h2 className="page-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'left' }}>Add a Pet</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Pet Name</label>
          <input 
            type="text" 
            className="form-input" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="e.g. Bella" 
            required 
          />
        </div>

        <div className="form-group">
          <label className="form-label">ID/Code</label>
          <input 
            type="text" 
            className="form-input" 
            value={code} 
            onChange={(e) => setCode(e.target.value)} 
            placeholder="e.g. PET-001" 
            required 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <select 
            className="form-select" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Status</label>
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                className="radio-input" 
                name="status" 
                value="Available" 
                checked={status === 'Available'} 
                onChange={(e) => setStatus(e.target.value)} 
              />
              Available
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                className="radio-input" 
                name="status" 
                value="Not Available" 
                checked={status === 'Not Available'} 
                onChange={(e) => setStatus(e.target.value)} 
              />
              Not Available
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea 
            className="form-textarea" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Tell us about the pet..." 
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit Info</button>
      </form>
    </div>
  );
};

export default PetForm;
