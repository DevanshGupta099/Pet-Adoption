const PetCard = ({ pet, onEdit, onReset }) => {
  if (!pet) return null;

  const isAvailable = pet.status === 'Available';
  
  // Use a reliable placeholder image service
  const imageUrl = `https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
  
  if (pet.category === 'Cat') {
    // imageUrl = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }

  // A small map for category images
  const images = {
    'Dog': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    'Cat': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    'Bird': 'https://images.unsplash.com/photo-1444464666168-49b626426095?auto=format&fit=crop&w=800&q=80',
    'Rabbit': 'https://images.unsplash.com/photo-1585110396000-c9faf4e4818b?auto=format&fit=crop&w=800&q=80',
    'Other': 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80'
  };

  return (
    <div className="card pet-card">
      <div className="pet-image-container">
        <div className={`status-badge ${isAvailable ? 'status-available' : 'status-not-available'}`}>
          {pet.status}
        </div>
        <img 
          src={images[pet.category] || images['Other']} 
          alt={pet.name} 
          className="pet-image" 
        />
      </div>
      
      <div className="pet-info">
        <h2 className="pet-name">{pet.name}</h2>
        <div className="pet-meta">
          <span>{pet.code}</span>
          <span>{pet.category}</span>
        </div>
        
        <p className="pet-desc">{pet.description}</p>
        
        <div className="btn-group">
          <button onClick={onEdit} className="btn btn-secondary">Edit Info</button>
          <button onClick={onReset} className="btn btn-secondary">Reset / Add Another</button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
