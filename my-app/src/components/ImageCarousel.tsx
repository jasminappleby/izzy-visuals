import { useState, useEffect } from 'react'
import './ImageCarousel.css'

interface ImageCarouselProps {
  images: string[]
}

function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="carousel-container">
      <div className="carousel-images-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`portfolio-${index}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      
      <div className="carousel-overlay">
        <h1 className="carousel-title">IZZY VISUALS</h1>
        <p className="carousel-slogan">Photographer based in Bedfordshire</p>
      </div>
    </div>
  )
}

export default ImageCarousel
