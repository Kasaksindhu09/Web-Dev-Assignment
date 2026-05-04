import React, { useState } from 'react';
import { destinations } from '../data/mockData';
import DestinationCard from '../components/DestinationCard';
import { Search } from 'lucide-react';

const Explore = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Destructure props
  const { itinerary, addToItinerary } = props;

  const filteredDestinations = destinations.filter(dest => 
    dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dest.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="explore-page">
      <div className="page-header">
        <h1 className="page-title">Explore Destinations</h1>
        <p className="page-subtitle">Find the perfect place for your next adventure.</p>
      </div>

      <div style={{ marginBottom: '2rem', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>
          <Search size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Search by name or tag (e.g., Paris, Beach, Romantic)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '1rem 1rem 1rem 3rem', 
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            fontSize: '1rem'
          }}
        />
      </div>

      {filteredDestinations.length > 0 ? (
        <div className="card-grid">
          {filteredDestinations.map(dest => (
            <DestinationCard 
              key={dest.id} 
              destination={dest} 
              itinerary={itinerary}
              addToItinerary={addToItinerary}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No destinations found.</h3>
          <p>Try adjusting your search terms.</p>
        </div>
      )}
    </div>
  );
};

export default Explore;
