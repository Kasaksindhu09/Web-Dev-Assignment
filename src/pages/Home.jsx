import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Plan Your Dream Vacation</h1>
        <p>Discover amazing destinations, build your perfect itinerary, and manage your travel budget all in one place.</p>
        <Link to="/explore" className="btn btn-primary">
          Start Exploring <ArrowRight size={18} />
        </Link>
      </div>

      <div className="features">
        <h2 className="page-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Why use TravelPlanner?</h2>
        <div className="card-grid">
          <div className="destination-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <Map size={48} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
            <h3>Discover Places</h3>
            <p className="card-desc" style={{ marginTop: '0.5rem' }}>Find the best destinations around the world tailored to your preferences.</p>
          </div>
          <div className="destination-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            <h3>Build Itineraries</h3>
            <p className="card-desc" style={{ marginTop: '0.5rem' }}>Easily add places to your trip and keep everything organized.</p>
          </div>
          <div className="destination-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <h3>Manage Budget</h3>
            <p className="card-desc" style={{ marginTop: '0.5rem' }}>Keep track of your expenses and ensure you stay within your budget.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
