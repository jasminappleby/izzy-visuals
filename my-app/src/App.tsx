import { Routes, Route, Link, useLocation } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeUser, faImages, faInbox, faUser } from '@fortawesome/free-solid-svg-icons';

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import FAQ from './pages/child pages/FAQ'
import Events from './pages/child pages/Events'
import Nightlife from './pages/child pages/Nightlife'
import Birthday from './pages/child pages/Birthdays';
import Sports from './pages/child pages/Sports'
import Rugby from './pages/child pages/Rugby'
import Football from './pages/child pages/Football'
import AmericanFootball from './pages/child pages/AmericanFootball'
import Lifestyle from './pages/child pages/Lifestyle'
import Graduation from './pages/child pages/Graduation'
import Portraits from './pages/child pages/Portraits'
import SiteMap from './pages/child pages/SiteMap'
import HeroTest from './pages/HeroTest';

function App() {
  const location = useLocation();
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const [hideNav, setHideNav] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);


  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

    useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        // scrolling down
        setHideNav(true);
      } else {
        // scrolling up
        setHideNav(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);


  return (
      <div className="App" data-theme={theme}>
        <nav className="mobile-nav">
          <ul>
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                <span className="icon"><FontAwesomeIcon icon={faHomeUser} color="#DAA520" /></span>
                <span className="label">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                <span className="icon"><FontAwesomeIcon icon={faUser} color="#DAA520" /></span>
                <span className="label">About</span>
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={isActive('/gallery') || location.pathname.startsWith('/gallery/') ? 'active' : ''}>
                  <span className="icon"><FontAwesomeIcon icon={faImages} color="#DAA520" /></span>
                  <span className="label">Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                  <span className="icon"><FontAwesomeIcon icon={faInbox} color="#DAA520" /></span>
                  <span className="label">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>

        <nav className={`desktop-nav ${hideNav ? "hide" : ""}`}>
            <div className="desktop-nav-content">
              <Link to="/" className="logo-link">
                <img 
                  src={theme === 'dark' ? '/images/izzy-visuals-logo.png' : '/images/izzy-visuals-logo.png'} 
                  alt="Izzy Visuals Logo"
                  className="logo"
                />
              </Link>
              <ul>
                <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
                <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
                <li><Link to="/gallery" className={isActive('/gallery') || location.pathname.startsWith('/gallery/') ? 'active' : ''}>Gallery</Link></li>
                <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
              </ul>
            </div>
          </nav> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />}>
            <Route path="events" element={<Events />} />
              <Route path="events/birthdays" element={<Birthday />} />
              <Route path="events/nightlife" element={<Nightlife />} />
            <Route path="sports" element={<Sports />} />
              <Route path="sports/rugby" element={<Rugby />} />
              <Route path="sports/football" element={<Football />} />
              <Route path="sports/americanfootball" element={<AmericanFootball />} />
            <Route path="lifestyle" element={<Lifestyle />} />
              <Route path="lifestyle/graduation" element={<Graduation />} />
              <Route path="lifestyle/portraits" element={<Portraits />} />
          </Route>
          <Route path="/contact" element={<Contact />}>
            <Route path="faq" element={<FAQ />} />
          </Route>
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/hero-test" element={<HeroTest />} />
        </Routes>

        <button onClick={switchTheme} id="fixed-button"> 
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <footer className="site-footer">
          <div className="footer-content">
            <p>{new Date().getFullYear()} Izzy Visuals</p>
            <div className="footer-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <span>•</span>
              <a href="mailto:Izzyvisuals14@gmail.com">Email</a>
              <span>•</span>
              <Link to="/sitemap">Site Map</Link>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default App