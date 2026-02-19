import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './GalleryChildPages.css'

function Sports() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSubPage = location.pathname !== '/gallery/sports';

  if (isSubPage) {
    return <Outlet />;
  }

  return (
    <div className="page-content">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
        <button 
          onClick={() => navigate('/gallery')}
          style={{ 
            padding: '10px 20px', 
            cursor: 'pointer',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#555'
            e.currentTarget.style.transform = 'translateX(-4px)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.25)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#333'
            e.currentTarget.style.transform = 'translateX(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)'
          }}
        >
          ← Back to Gallery
        </button>
        <h1 style={{fontSize: '50px', textAlign:'center', margin: 0, flex: 1}}>Sports</h1>
        <div style={{ width: '120px' }}></div>
      </div>
      
      <GalleryCarousel 
        title="Rugby" 
        link="/gallery/sports/rugby"
        images={Array.from({ length: 22 }, (_, i) => `/images/sports/rugby/rugby-${i + 1}.JPG`)}
      />

      {/* <GalleryCarousel 
        title="Football" 
        link="/gallery/sports/football"
        images={Array.from({ length: 22 }, (_, i) => `/images/sports/football/football-${i + 1}.JPG`)}
      /> */}

      {/* <GalleryCarousel 
        title="American Football" 
        link="/gallery/sports/americanfootball"
        images={Array.from({ length: 22 }, (_, i) => `/images/sports/americanfootball/americanfootball-${i + 1}.JPG`)}
      /> */}
    </div>
  )
}

function GalleryCarousel({ title, link, images }: { title: string, link: string, images: string[] }) {
  const [offset, setOffset] = useState(0);
  const imageWidth = 300; 
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev - 1;
        return newOffset <= -imageWidth * images.length ? 0 : newOffset;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [images.length, imageWidth]);

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

export default Sports
