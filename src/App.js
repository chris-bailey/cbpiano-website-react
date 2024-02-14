import React from 'react';
import './App.scss';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import Home from './views/Home';
import Album from './views/Album';
import Listen from './views/Listen';
import About from './views/About';
import Contact from './views/Contact';
import Privacy from './views/Privacy';
import Sitemap from './views/Sitemap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
