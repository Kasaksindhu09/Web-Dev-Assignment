import React from 'react';
import DestinationCard from '../components/DestinationCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Wallet } from 'lucide-react';

const Itinerary = (props) => {
  // Destructure props instead of using Context
  const { itinerary, removeFromItinerary, totalBudget, setTotalBudget } = props;

  // Calculate total cost manually here instead of in Context
  const calculateTotalCost = () => {
    return itinerary.reduce((total, item) => total + item.cost, 0);
  };

  const remainingBudget = totalBudget - calculateTotalCost();

  return (
    <div className="itinerary-page">
      <div className="page-header">
        <h1 className="page-title">My Itinerary</h1>
        <p className="page-subtitle">Manage your selected destinations and track your budget.</p>
      </div>

      <div className="budget-widget">
        <div className="budget-item">
          <div className="budget-label">Total Budget</div>
          <div className="budget-input-group" style={{ marginTop: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>$</span>
            <input 
              type="number" 
              value={totalBudget} 
              onChange={(e) => setTotalBudget(Number(e.target.value) || 0)}
              min="0"
            />
          </div>
        </div>

        <div className="budget-item">
          <div className="budget-label">Estimated Cost</div>
          <div className="budget-value" style={{ marginTop: '0.5rem', color: '#64748b' }}>
            ${calculateTotalCost()}
          </div>
        </div>

        <div className="budget-item">
          <div className="budget-label">Remaining</div>
          <div className={`budget-value ${remainingBudget < 0 ? 'danger' : 'success'}`} style={{ marginTop: '0.5rem' }}>
            ${remainingBudget}
          </div>
        </div>
      </div>

      {itinerary.length > 0 ? (
        <div className="card-grid">
          {itinerary.map(dest => (
            <DestinationCard 
              key={dest.id} 
              destination={dest} 
              isItinerary={true} 
              removeFromItinerary={removeFromItinerary}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Wallet className="empty-icon" size={64} />
          <h3>Your itinerary is empty</h3>
          <p style={{ color: '#64748b', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
            Looks like you haven't added any destinations to your trip yet.
          </p>
          <Link to="/explore" className="btn btn-primary">
            Find Destinations <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Itinerary;
