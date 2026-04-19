import { Outlet, useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Gallery.css'

// Helper function to get all images from categories
function getAllImagesForCategory(categories: { folder: string; prefix: string; count: number }[]): string[] {
  const images: string[] = []
  categories.forEach(({ folder, prefix, count }) => {
    for (let i = 1; i <= count; i++) {
      images.push(`/images/${folder}/${prefix}-${i}.jpg`)
    }
  })
  return images
}

// Helper function to shuffle array and get N random items
function getRandomImages(images: string[], count: number): string[] {
  const shuffled = [...images].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

function Gallery() {
  const location = useLocation();
  const isSubPage = location.pathname !== '/gallery';

  const [sportsImages, setSportsImages] = useState<string[]>([])
  const [eventsImages, setEventsImages] = useState<string[]>([])
  const [lifestyleImages, setLifestyleImages] = useState<string[]>([])

  useEffect(() => {
// counts will need to change as photos are added in future.

    // Sports
    const sportsCats = [
      { folder: 'sports/americanfootball', prefix: 'americanfootball', count: 14 },
      { folder: 'sports/football', prefix: 'football', count: 15 },
      { folder: 'sports/rugby', prefix: 'rugby', count: 31 }
    ]
    setSportsImages(getRandomImages(getAllImagesForCategory(sportsCats), 16))

    // Events
    const eventsCats = [
      { folder: 'events/birthday', prefix: 'birthday', count: 21 },
      { folder: 'events/nightlife', prefix: 'nightlife', count: 4 },
      { folder: 'events/private', prefix: 'private', count: 10 }
    ]
    setEventsImages(getRandomImages(getAllImagesForCategory(eventsCats), 16))

    // Lifestyle 
    const lifestyleCats = [
      { folder: 'lifestyle/graduation', prefix: 'graduation', count: 8 },
      { folder: 'lifestyle/portraits', prefix: 'portraits', count: 4 }
    ]
    setLifestyleImages(getRandomImages(getAllImagesForCategory(lifestyleCats), 16))
  }, [])

  if (isSubPage) {
    return <Outlet />;
  }

  return (
    <div className="page-content">
      <h1 style={{fontSize: '50px', textAlign:'center', marginBottom: '3rem'}}>Gallery</h1>
      
      <GalleryCarousel 
        title="Sports" 
        link="/gallery/sports"
        images={sportsImages}
      />
      
      <GalleryCarousel 
        title="Events" 
        link="/gallery/events"
        images={eventsImages}
      />
      
      
      <GalleryCarousel 
        title="Lifestyle" 
        link="/gallery/lifestyle"
        images={lifestyleImages}
      />

    {/* Wedding to come soon , maybe go into events? */}

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
