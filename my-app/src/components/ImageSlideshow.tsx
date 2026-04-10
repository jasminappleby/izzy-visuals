import { useState, useEffect } from 'react'
import './ImageSlideshow.css'

interface SlideshowImage {
  src: string
  alt: string
}

function ImageSlideshow() {
  const [images, setImages] = useState<SlideshowImage[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Rugby images available in the public folder - later to implement other folders when available
    const allImages = Array.from({ length: 22 }, (_, i) => ({
      src: `/images/sports/rugby/rugby-${i + 1}.JPG`,
      alt: `Rugby action shot ${i + 1}`
    }))

    const selectedImages = (function selectRandom() {
      const shuffled = [...allImages].sort(() => Math.random() - 0.5)
      return shuffled.slice(0, 15)
    })()

    setImages(selectedImages)
    setCurrentIndex(0)
  }, [])

  useEffect(() => {
    if (images.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  if (images.length === 0) {
    return <div className="slideshow-container loading">Loading slideshow...</div>
  }

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlideshow
