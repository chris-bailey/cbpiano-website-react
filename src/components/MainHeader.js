import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './MainHeader.scss';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

// Setup Google Analytics Tracking
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}


function MainHeader() {
  usePageTracking(); // This line is added to track page views
  return (
    
    <>
      <header>
        {/* Banner image is shown using CSS */}
      </header>

      <nav id="topMenu">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/album">Album</NavLink></li>
          <li><NavLink to="/listen">Listen</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <hr />
    </>
  );
}

export default MainHeader;
