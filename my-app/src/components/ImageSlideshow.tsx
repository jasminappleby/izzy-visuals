import { useState, useEffect } from 'react'
import './ImageSlideshow.css'

interface SlideshowImage {
  src: string
  alt: string
}

function ImageSlideshow() {
  const [images, setImages] = useState<SlideshowImage[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Helper function to shuffle array
function shuffleArray(array: string[]): string[] {
  return [...array].sort(() => Math.random() - 0.5)
}

  useEffect(() => {
    // Only images with 2048 x 1638 aspect ratio
    const correctAspectRatioImages = [
      '/images/events/birthday/birthday-1.jpg',
      // '/images/events/birthday/birthday-2.jpg',
      '/images/events/birthday/birthday-3.jpg',
      '/images/events/birthday/birthday-4.jpg',
      // '/images/events/birthday/birthday-5.jpg',
      // '/images/events/birthday/birthday-6.jpg',
      '/images/events/birthday/birthday-7.jpg',
      '/images/events/birthday/birthday-8.jpg',
      // '/images/events/birthday/birthday-9.jpg',
      // '/images/events/birthday/birthday-10.jpg',
      // '/images/events/birthday/birthday-11.jpg',
      '/images/events/birthday/birthday-12.jpg',
      '/images/events/birthday/birthday-13.jpg',
      '/images/sports/rugby/rugby-1.jpg',
      // '/images/sports/rugby/rugby-5.jpg',
      '/images/sports/rugby/rugby-6.jpg',
      '/images/sports/rugby/rugby-8.jpg',
      // '/images/sports/rugby/rugby-14.jpg',
      '/images/sports/rugby/rugby-16.jpg',
      '/images/sports/rugby/rugby-17.jpg',
      '/images/sports/rugby/rugby-18.jpg',
      // '/images/sports/rugby/rugby-19.jpg',
      '/images/sports/rugby/rugby-21.jpg',
      '/images/sports/americanfootball/americanfootball-3.jpg',
      '/images/sports/americanfootball/americanfootball-4.jpg',
      '/images/sports/americanfootball/americanfootball-6.jpg',
      '/images/sports/americanfootball/americanfootball-9.jpg',
      // '/images/sports/americanfootball/americanfootball-10.jpg',
      '/images/sports/americanfootball/americanfootball-12.jpg',
      '/images/events/private/private-1.jpg',
      '/images/events/private/private-6.jpg',
      '/images/events/private/private-7.jpg',
      '/images/events/private/private-8.jpg',
      '/images/events/private/private-10.jpg',
    ]

    const shuffledImages = shuffleArray(correctAspectRatioImages)
    const selectedImages = shuffledImages.map((src, i) => ({
      src,
      alt: `Photo ${i + 1}`
    }))

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
