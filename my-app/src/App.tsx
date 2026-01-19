import { Routes, Route, Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeUser, faImages, faInbox, faUser } from '@fortawesome/free-solid-svg-icons';

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
          {/* {theme === 'light' ? <FontAwesomeIcon icon={faSun} color="#DAA520" /> : <FontAwesomeIcon icon={faMoon} color="#DAA520" />} */}
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

function Home() {
  return (
    <div className="page-content">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap'}}>
        <h1 style={{flex: '0 0 auto'}}>Izzy</h1>
        <img src="/images/landscape-placeholder.jpg" alt="placeholder image" style={{ flex: '1', maxWidth: '60%', height: 'auto', objectFit: 'cover'}}/>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', marginTop: '20px'}}>
        <img src="/images/landscape-placeholder.jpg" alt="placeholder image" style={{ flex: '1', maxWidth: '60%', height: 'auto', objectFit: 'cover' }}/>
        <h1 style={{flex: '0 0 auto'}}>Visuals</h1>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="page-content">
      <h1 style={{fontSize: '50px', textAlign:'center'}}>About Me</h1>
        <div className="paragraph-1" style={{ textAlign: 'center' }}>
          <img src="/images/landscape-placeholder.jpg" alt="placeholder image" style={{ maxWidth: '60%', height: 'auto', objectFit: 'cover' }}/>
          <p style={{fontSize: '20px', maxWidth: '800px', margin: '0 auto'}}>
            Hello, I'm Izzy. a passionate photographer and visual storyteller. I love capturing moments that tell a story and evoke emotions. Whether it's the thrill of a sports event, the vibrancy of lifestyle shots, or the elegance of special events, I strive to bring out the beauty in every frame.
          </p>
          <br/>
          <p style={{fontSize: '20px', maxWidth: '800px', margin: '0 auto'}}>
            I am an aspriring photographer building my portfolio and skills. My goal is to create stunning visuals that resonate with viewers and leave a lasting impression.
          </p>
          <br/>
          <p style={{fontSize: '20px', maxWidth: '800px', margin: '0 auto'}}>
            My niche areas include event photography, sports photography, and lifestyle photography. I am always eager to take on new challenges and explore different styles and techniques if the opprtunity were to arise. Name the occasion, and I can work for you!
          </p>
          <br/>
          <p style={{fontSize: '20px', maxWidth: '800px', margin: '0 auto'}}>
            Thank you for visiting my portfolio. I look forward to connecting with you and sharing my passion for photography.
          </p>
      </div>
    </div>
  )
}

// gallery 

function Gallery() {
  const location = useLocation();
  const isSubPage = location.pathname !== '/gallery';

  if (isSubPage) {
    return <Outlet />;
  }

  return (
    <div className="page-content">
      <h1 style={{fontSize: '50px', textAlign:'center', marginBottom: '3rem'}}>Gallery</h1>
      
      <GalleryCarousel 
        title="Events" 
        link="/gallery/events"
        images={[
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
        ]}
      />
      
      <GalleryCarousel 
        title="Sports" 
        link="/gallery/sports"
        images={[
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
        ]}
      />
      
      <GalleryCarousel 
        title="Lifestyle" 
        link="/gallery/lifestyle"
        images={[
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
          '/images/landscape-placeholder.jpg',
        ]}
      />
    </div>
  )
}

//gallery carousel 

function GalleryCarousel({ title, link, images }: { title: string, link: string, images: string[] }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const duplicatedImages = [...images, ...images, ...images];

  return (
    <Link to={link} className="gallery-carousel-section">
      <h2 className="gallery-carousel-title">{title}</h2>
      <div className="gallery-carousel-container">
        <div 
          className="gallery-carousel-track"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {duplicatedImages.map((img, index) => (
            <div key={index} className="gallery-carousel-item">
              <img src={img} alt={`${title} ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
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