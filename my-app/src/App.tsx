import { Routes, Route, Link, useLocation } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeUser, faImages, faInbox, faUser } from '@fortawesome/free-solid-svg-icons';

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Events from './pages/Events'
import Sports from './pages/Sports'
import Lifestyle from './pages/Lifestyle'

function App() {
  const location = useLocation();
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

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

        <nav className="desktop-nav">
            <div className="desktop-nav-content">
              <Link to="/" className="logo-link">
                <div className="logo">📷</div>
                <span className="logo-text">Izzy Visuals</span>
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
            <Route path="sports" element={<Sports />} />
            <Route path="lifestyle" element={<Lifestyle />} />
          </Route>
          <Route path="/contact" element={<Contact />}>
            <Route path="faq" element={<FAQ />} />
          </Route>
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
            </div>
          </div>
        </footer>
      </div>
  )
}

export default App