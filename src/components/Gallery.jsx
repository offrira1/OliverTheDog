import React, { useState, useEffect } from 'react'

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0)

  const galleryImages = [
    {
      src: '/Oliver-rev-15.0_Page_06.png',
      title: 'אוליבר בגן',
      subtitle: 'עמוד 6',
      alt: 'אוליבר מציץ לשיחים'
    },
    {
      src: '/Oliver-rev-15.0_Page_08.png',
      title: 'אוליבר בבוץ',
      subtitle: 'עמוד 8',
      alt: 'אוליבר מתגלגל בבוץ'
    },
    {
      src: '/Oliver-rev-15.0_Page_18.png',
      title: 'אוליבר המלוכלך',
      subtitle: 'עמוד 18',
      alt: 'אוליבר מלוכלך עם אשפה'
    },
    {
      src: '/Oliver-rev-15.0_Page_39.png',
      title: 'אוליבר באמבטיה',
      subtitle: 'עמוד 39',
      alt: 'אמבטיית בועות עם אוליבר'
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
        </div>
      </section>
    </div>
  )
}

export default Gallery