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
      '/images/events/birthday/birthday-3.jpg',
      '/images/events/birthday/birthday-4.jpg',
      '/images/events/birthday/birthday-7.jpg',
      '/images/events/birthday/birthday-8.jpg',
      '/images/events/birthday/birthday-12.jpg',
      '/images/events/birthday/birthday-13.jpg',
      '/images/sports/rugby/rugby-1.jpg',
      '/images/sports/rugby/rugby-6.jpg',
      '/images/sports/rugby/rugby-8.jpg',
      '/images/sports/rugby/rugby-15.jpg',
      '/images/sports/rugby/rugby-16.jpg',
      '/images/sports/rugby/rugby-17.jpg',
      '/images/sports/rugby/rugby-19.jpg',
      '/images/sports/americanfootball/americanfootball-3.jpg',
      '/images/sports/americanfootball/americanfootball-4.jpg',
      '/images/sports/americanfootball/americanfootball-6.jpg',
      '/images/sports/americanfootball/americanfootball-9.jpg',
      '/images/sports/americanfootball/americanfootball-12.jpg',
      '/images/sports/americanfootball/americanfootball-15.jpg',
      '/images/sports/americanfootball/americanfootball-20.jpg',
      '/images/sports/americanfootball/americanfootball-24.jpg',
      '/images/sports/americanfootball/americanfootball-27-crop.jpg',
      //'/images/sports/americanfootball/americanfootball-28.jpg',//wrong size - OG is 1920 × 2400
      //'/images/sports/americanfootball/americanfootball-29.jpg',//wrong size - OG is 1920 × 2400
      '/images/sports/americanfootball/americanfootball-38.jpg',
      '/images/sports/americanfootball/americanfootball-40.jpg',
      //'/images/sports/americanfootball/americanfootball-53.jpg',//wrong size - OG is 1920 × 2400
      //'/images/sports/americanfootball/americanfootball-55.jpg',//wrong size - OG is 1920 × 2400
      '/images/sports/americanfootball/americanfootball-62.jpg',
      '/images/sports/americanfootball/americanfootball-65.jpg',
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
