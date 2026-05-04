import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Standard imports instead of lazy loading for simplicity
import Home from './pages/Home';
import Explore from './pages/Explore';
import Itinerary from './pages/Itinerary';

function App() {
  // State for the application (Prop Drilling instead of Context API)
  const [itinerary, setItinerary] = useState([]);
  const [totalBudget, setTotalBudget] = useState(5000); // Default budget

  // Functions to manage state
  const addToItinerary = (destination) => {
    if (!itinerary.find(item => item.id === destination.id)) {
      setItinerary([...itinerary, destination]);
    }
  };

  const removeFromItinerary = (id) => {
    setItinerary(itinerary.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      {/* Pass itinerary length to Navbar */}
      <Navbar itineraryCount={itinerary.length} />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/explore" 
            element={
              <Explore 
                itinerary={itinerary} 
                addToItinerary={addToItinerary} 
              />
            } 
          />
          <Route 
            path="/itinerary" 
            element={
              <Itinerary 
                itinerary={itinerary} 
                removeFromItinerary={removeFromItinerary}
                totalBudget={totalBudget}
                setTotalBudget={setTotalBudget}
              />
            } 
          />
          <Route path="*" element={
            <div className="empty-state">
              <h2>404 - Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
