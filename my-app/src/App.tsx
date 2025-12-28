import { Routes, Route, Link, Outlet, useLocation } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
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
        {/* <nav className="mobile-nav"> */}
          {/* <img src="/src/assets/logo.png" alt="Logo" className="icon"/> */}
          {/* <Link to="/" className="icon">Home</Link>
          <Link to="/about" className="icon">About</Link>
          <Link to="/gallery" className="icon">Gallery</Link>
          <Link to="/contact" className="icon">Contact</Link>
        </nav> */}

        <nav className="mobile-nav">
          <ul>
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                <span className="icon">🏠</span>
                <span className="label">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                <span className="icon">👤</span>
                <span className="label">About</span>
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={isActive('/gallery') || location.pathname.startsWith('/gallery/') ? 'active' : ''}>
                  <span className="icon">📷</span>
                  <span className="label">Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                  <span className="icon">✉️</span>
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
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
  )
}

// Page components
function Home() {
  return (
  <div className="page-content">
     <h1 style={{fontSize: '50px', textAlign:'center'}}>Izzy Visuals</h1>
  </div>
  )
}

function About() {
  return (
  <div className="page-content">
    <h1>About</h1>
  </div>
)
}

function Gallery() {
  return (
    <div className="gallery-nav">
      <h1>Gallery</h1>
      <nav>
        <Link to="/gallery/events">Events</Link>
        <Link to="/gallery/sports">Sports</Link>
        <Link to="/gallery/lifestyle">Lifestyle</Link>
      </nav>
      <Outlet />
    </div>
  )
}

function Events() {
  return (
    <h1>Events</h1>
  )
}

function Sports() {
  return (
    <h1>Sports</h1>
  )
}

function Lifestyle() {
  return ( 
    <h1>Lifestyle</h1>
  )
}

function Contact() {
  return (
    <h1>Contact</h1>
  )
}

export default App