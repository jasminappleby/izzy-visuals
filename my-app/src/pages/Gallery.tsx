import { Outlet, useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Gallery.css'

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
        title="Events" 
        link="/gallery/events"
        images={[
          '../images/landscape-placeholder.jpg',
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

{/* wedding - currently archived till needed - also can be used for deeper pages in future */}
      {/* <GalleryCarousel 
        title="Wedding" 
        link="/gallery/wedding"
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
    }, 50);

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

export default Gallery
