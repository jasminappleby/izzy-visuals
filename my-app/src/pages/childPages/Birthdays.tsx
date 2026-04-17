import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './GalleryChildPages.css'

function Birthday() {
  const navigate = useNavigate()
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  
  const images = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    src: `/images/events/nightlife/nightlife-${i + 1}.JPG`,
    alt: `Nightlife photo ${i + 1}`
  }))

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  const handleClose = () => {
    setSelectedImageIndex(null)
  }

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1)
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImageIndex === null) return
    
    if (e.key === 'ArrowLeft') {
      handlePrevious()
    } else if (e.key === 'ArrowRight') {
      handleNext()
    } else if (e.key === 'Escape') {
      handleClose()
    }
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
        <h1 style={{ fontSize: '30px', textAlign: 'center', margin: 0, flex: 1 }}>Birthday</h1>
        <div style={{ width: '120px' }}></div>
      </div>
      
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => handleImageClick(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="gallery-thumbnail"
            />
          </div>
        ))}
      </div>

      {/* lightbox modal */}
      {selectedImageIndex !== null && (
        <div 
          className="lightbox-overlay"
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          autoFocus
        >
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            {/* close button */}
            <button 
              className="lightbox-close"
              onClick={handleClose}
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* back arrow */}
            <button 
              className="lightbox-arrow lightbox-prev"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* image */}
            <img 
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              className="lightbox-image"
            />

            {/* next arrow */}
            <button 
              className="lightbox-arrow lightbox-next"
              onClick={handleNext}
              aria-label="Next image"
            >
              ›
            </button>

            {/* image number */}
            <div className="lightbox-counter">
              {selectedImageIndex + 1}/{images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Birthday
