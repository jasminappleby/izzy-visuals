import { Routes, Route, Link, Outlet, useLocation } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeUser, faImages, faInbox, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';

import './App.css'

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
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <button onClick={switchTheme} id="fixed-button"> 
         {theme === 'light' ? <FontAwesomeIcon icon={faSun} color="#DAA520" /> : <FontAwesomeIcon icon={faMoon} color="#DAA520" />}
        </button>
      </div>
  )
}

// Page components
function Home() {
  return (
  <div className="page-content">
    <h1 style={{textAlign:'left'}}>Izzy</h1>
    <h1 style={{textAlign:'right'}}>Visuals</h1>
  </div>
  )
}

function About() {
  return (
  <div className="page-content">
    <h1 style={{fontSize: '50px', textAlign:'center'}}>About Me</h1>
  </div>
)
}

function Gallery() {
  return (
    <div className="gallery-nav">
      <h1 style={{fontSize: '50px', textAlign:'center'}}>Gallery</h1>
      <nav style={{display: 'flex', flexDirection: 'column', gap: '100px', alignItems: 'center'}}>
        <Link to="/gallery/events">Events</Link>
        <Link to="/gallery/sports">Sports</Link>
        <Link to="/gallery/lifestyle">Lifestyle</Link>
      </nav>
      <Outlet />
    </div>
  )
}

// gallery child pages

function Events() {
  return (
    <div className="page-content">
    <h1 style={{fontSize: '30px', textAlign:'center'}}>Events</h1>
    </div>
  )
}

function Sports() {
  return (
    <div className="page-content">
      <h1 style={{fontSize: '30px', textAlign:'center'}}>Sports</h1>
    </div>
  )
}

function Lifestyle() {
  return ( 
    <div className="page-content">
      <h1 style={{fontSize: '30px', textAlign:'center'}}>Lifestyle</h1>
    </div>
  )
}

// back to regular pages 

function Contact() {
  return (
    <div className="page-content">
      <h1 style={{fontSize: '50px', textAlign:'center'}}>Contact Me</h1>
    </div>
  )
}

export default App