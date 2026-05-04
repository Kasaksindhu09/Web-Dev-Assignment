import React from 'react';
import { NavLink } from 'react-router-dom';
import { Plane, Map, BookOpen } from 'lucide-react';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        <Plane size={24} />
        <span>TravelPlanner</span>
      </NavLink>
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink 
          to="/explore" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          <Map size={18} /> Explore
        </NavLink>
        <NavLink 
          to="/itinerary" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          <BookOpen size={18} /> My Itinerary ({props.itineraryCount})
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
