import React, { useEffect } from 'react';
import './Sitemap.scss';
import { Link } from 'react-router-dom';

function Sitemap() {
  useEffect(() => {
    document.title = "Sitemap | Chris Bailey Piano";
  }, [])

  return (
    <div id="mainContentSitemap">
      <h1>Sitemap</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <ul>
        <li><Link to="/album">Album</Link></li>
      </ul>
      <ul>
        <li><Link to="/listen">Listen</Link></li>
      </ul>
      <ul>
        <li><Link to="/about">About</Link></li>
      </ul>
      <ul>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Sitemap;
