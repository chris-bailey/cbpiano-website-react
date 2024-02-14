import React from 'react';
import { Link } from 'react-router-dom';
import './MainFooter.scss';

function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <hr />
      <div id="footerLeft">
        <p>Copyright &copy; {currentYear} Chris Bailey Productions</p>
      </div>
      <div id="footerRight">
        <Link to="/privacy">Privacy Policy</Link> &nbsp; | &nbsp;
        <Link to="/sitemap">Sitemap</Link>
      </div>
    </footer>
  );
}

export default MainFooter;
