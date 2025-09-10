import React, { useState, useEffect } from 'react'

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const galleryImages = [
    {
      src: '/Oliver-rev-15.0_Page_06.png',
      title: '',
      subtitle: '',
      alt: ''
    },
    {
      src: '/Oliver-rev-15.0_Page_08.png',
      title: '',
      subtitle: '',
      alt: ''
    },
    {
      src: '/Oliver-rev-15.0_Page_18.png',
      title: '',
      subtitle: '',
      alt: ''
    },
    {
      src: '/Oliver-rev-15.0_Page_39.png',
      title: '',
      subtitle: '',
      alt: ''
    }
  ]

  const handleImageClick = (index) => {
    setActiveImage(index)
  }

  return (
    <div className="gallery-background">
      <section id="gallery" className="container section">
        <h2 className="kids-title">מציצים לספר</h2>
        <div className="image-gallery">
          {isMobile ? (
            // Mobile Layout - RealOliver style
            <div className="gallery-container-mobile">
              {/* Featured Image Area - Centered and Big */}
              <div className="featured-area-center">
                <div className="featured-image-large">
                  <img 
                    id="featured-img" 
                    src={galleryImages[activeImage].src} 
                    alt={galleryImages[activeImage].alt}
                    style={{ opacity: 1 }}
                  />
                  <div className="featured-overlay-large">
                    <h3 id="featured-title">{galleryImages[activeImage].title}</h3>
                    <p id="featured-subtitle">{galleryImages[activeImage].subtitle}</p>
                  </div>
                </div>
              </div>
              
              {/* Small Images Grid - Below the main image, NO TEXT */}
              <div className="small-grid-below">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`gallery-item-small ${activeImage === index ? 'active' : ''}`}
                    data-image={image.src}
                    data-title={image.title}
                    data-subtitle={image.subtitle}
                    onClick={() => handleImageClick(index)}
                  >
                    <img src={image.src} alt={image.alt} />
                    {/* NO OVERLAY TEXT ON MOBILE */}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Desktop Layout - Original side-by-side
            <div className="gallery-container">
              {/* Featured Image Area (Right Side) */}
              <div className="featured-area">
                <div className="featured-image">
                  <img 
                    id="featured-img" 
                    src={galleryImages[activeImage].src} 
                    alt={galleryImages[activeImage].alt}
                    style={{ opacity: 1 }}
                  />
                  <div className="featured-overlay">
                    <h3 id="featured-title">{galleryImages[activeImage].title}</h3>
                    <p id="featured-subtitle">{galleryImages[activeImage].subtitle}</p>
                  </div>
                </div>
              </div>
              
              {/* Small Images Grid (Left Side) */}
              <div className="small-grid">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`gallery-item small-item ${activeImage === index ? 'active' : ''}`}
                    data-image={image.src}
                    data-title={image.title}
                    data-subtitle={image.subtitle}
                    onClick={() => handleImageClick(index)}
                  >
                    <img src={image.src} alt={image.alt} />
                    <div className="gallery-overlay">
                      <h3>{image.title}</h3>
                      <p>{image.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Gallery