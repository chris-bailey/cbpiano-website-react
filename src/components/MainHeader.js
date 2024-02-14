import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainHeader.scss';

function MainHeader() {
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
