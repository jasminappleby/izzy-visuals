import { Routes, Route, Link, useLocation } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeUser, faImages, faInbox, faUser } from '@fortawesome/free-solid-svg-icons';

import { Analytics } from "@vercel/analytics/next"

import './App.css'
import NewHomepage from './pages/NewHomepage'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import FAQ from './pages/childPages/FAQ'
import Events from './pages/childPages/Events'
import Nightlife from './pages/childPages/Nightlife'
import Birthday from './pages/childPages/Birthdays';
import Sports from './pages/childPages/Sports'
import Rugby from './pages/childPages/Rugby'
import Football from './pages/childPages/Football'
import AmericanFootball from './pages/childPages/AmericanFootball'
import Lifestyle from './pages/childPages/Lifestyle'
import Graduation from './pages/childPages/Graduation'
import Portraits from './pages/childPages/Portraits'
import SiteMap from './pages/childPages/SiteMap'
import HeroTest from './pages/HeroTest';
import PrivateEvents from './pages/childPages/PrivateEvents';

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
                <span className="icon"><FontAwesomeIcon icon={faHomeUser} color={theme === 'light' ? '#000000' : '#ffffff'} /></span>
                <span className="label">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                <span className="icon"><FontAwesomeIcon icon={faUser} color={theme === 'light' ? '#000000' : '#ffffff'} /></span>
                <span className="label">About</span>
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={isActive('/gallery') || location.pathname.startsWith('/gallery/') ? 'active' : ''}>
                  <span className="icon"><FontAwesomeIcon icon={faImages} color={theme === 'light' ? '#000000' : '#ffffff'} /></span>
                  <span className="label">Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                  <span className="icon"><FontAwesomeIcon icon={faInbox} color={theme === 'light' ? '#000000' : '#ffffff'} /></span>
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
          <Route path="/" element={<NewHomepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />}>
            <Route path="events" element={<Events />} />
              <Route path="events/birthdays" element={<Birthday />} />
              <Route path="events/nightlife" element={<Nightlife />} />
              <Route path="events/private" element={<PrivateEvents />} />
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
              <a href="https://www.instagram.com/izzyvisuals__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a>
              <span>•</span>
              <a href="mailto:Izzyvisuals14@gmail.com">Email</a>
              <span>•</span>
              <Link to="/sitemap">Site Map</Link>
            </div>
          </div>
        </footer>
        <Analytics />
      </div>
  )
}

export default App