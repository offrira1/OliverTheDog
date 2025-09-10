import React, { useState } from 'react'

const RealOliver = () => {
  const [activeMedia, setActiveMedia] = useState(0)

  const mediaItems = [
    {
      type: 'video',
      src: '/Jumping_ollie.mp4',
      title: 'אוליבר קופץ!',
      description: 'אוליבר יעשה הכל כדי להגיע לכדור שלו'
    },
    {
      type: 'image',
      src: '/Bug_Ollie.jpg',
      title: 'אוליבר מתחפש בפורים',
      description: 'רגע מתוק של אוליבר מחופש לחיפושית'
    },
    {
      type: 'video',
      src: '/Smile.mp4',
      title: 'אוליבר מחייך',
      description: 'החיוך הכי מתוק שיש!'
    },
    {
      type: 'video',
      src: '/jumping_2.mp4',
      title: 'אוליבר קופץ !',
      description: 'עוד קפיצה מלאת אנרגיה - שמלכלכת את הסובבים!'
    },
    {
      type: 'image',
      src: '/dirty_1.jpg',
      title: 'אוליבר המלוכלך',
      description: 'כמו בסיפור - אוליבר לא מפחד להתלכלך!'
    }
  ]

  const handleMediaClick = (index) => {
    setActiveMedia(index)
  }

  return (
    <section id="real-oliver" className="container section card">
      <div className="real-oliver-content">
        <div className="real-oliver-header">
          <h2 className="kids-title">אוליבר שלנו</h2>
          <p className="real-oliver-intro">
            זהו אוליבר האמיתי - הכלב החמוד שעליו מבוסס הסיפור! 
            הוא אוהב לשחק, לקפוץ ולגלות הרפתקאות חדשות כל יום.
          </p>
        </div>

        <div className="real-oliver-gallery">
          {/* Featured Media Area - Centered and Big */}
          <div className="featured-media-center">
            <div className="featured-media-large">
              {mediaItems[activeMedia].type === 'video' ? (
                <video 
                  src={mediaItems[activeMedia].src}
                  controls
                  autoPlay
                  muted
                  loop
                  className="featured-video-large"
                >
                  הדפדפן לא תומך בוידאו
                </video>
              ) : (
                <img 
                  src={mediaItems[activeMedia].src}
                  alt={mediaItems[activeMedia].title}
                  className="featured-image-large"
                />
              )}
              <div className="featured-media-overlay-large">
                <h3>{mediaItems[activeMedia].title}</h3>
                <p>{mediaItems[activeMedia].description}</p>
              </div>
            </div>
          </div>
          
          {/* Small Media Grid - Below the main media */}
          <div className="small-media-grid-below">
            {mediaItems.map((item, index) => (
              <div 
                key={index}
                className={`media-item-small ${activeMedia === index ? 'active' : ''}`}
                onClick={() => handleMediaClick(index)}
              >
                {item.type === 'video' ? (
                  <video 
                    src={item.src}
                    muted
                    className="media-thumbnail-small"
                  />
                ) : (
                  <img 
                    src={item.src}
                    alt={item.title}
                    className="media-thumbnail-small"
                  />
                )}
                <div className="media-overlay-small">
                  <div className="media-type-icon">
                    {item.type === 'video' ? '🎥' : '📸'}
                  </div>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="real-oliver-story">
          <div className="story-card">
            <h3>הסיפור של אוליבר האמיתי</h3>
            <p>
              אוליבר כלב בורדר קולי, היום בן 9. הוא אוהב לחקור את העולם, 
              לשחק עם ילדים, ולגלות דברים חדשים כל יום. לפעמים הוא מתלכלך 
              קצת כשהוא משחק, אבל זה חלק מהכיף!
            </p>
            <p>
הוא אוהב לקפוץ, לרוץ ולשחק עם ילדים וכדורים, לעולם לא יסרב למשחק טוב או טיול ארוך.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RealOliver
