import React from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';

const DestinationCard = (props) => {
  // Destructure props for easier use
  const { destination, isItinerary, itinerary, addToItinerary, removeFromItinerary } = props;

  // Check if the destination is already in the itinerary array
  const isAdded = itinerary ? itinerary.some(item => item.id === destination.id) : false;

  return (
    <div className="destination-card">
      <img src={destination.imageUrl} alt={destination.name} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{destination.name}</h3>
        <div className="tags">
          {destination.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
        <p className="card-desc">{destination.description}</p>
        
        <div className="card-footer">
          <span className="cost">${destination.cost}</span>
          
          {isItinerary ? (
            <button 
              className="btn btn-danger"
              onClick={() => removeFromItinerary(destination.id)}
            >
              <Trash2 size={16} /> Remove
            </button>
          ) : (
            <button 
              className={`btn ${isAdded ? 'btn-outline' : 'btn-primary'}`}
              onClick={() => addToItinerary(destination)}
              disabled={isAdded}
            >
              <PlusCircle size={16} /> {isAdded ? 'Added' : 'Add to Trip'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
