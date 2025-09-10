import React, { useState } from 'react'

const RealOliver = () => {
  const [activeMedia, setActiveMedia] = useState(0)

  const mediaItems = [
    {
      type: 'video',
      src: '/assets/Jumping_ollie.mp4',
      title: 'אוליבר קופץ!',
      description: 'הכלב האמיתי שלנו אוהב לקפוץ ולשחק בפארק'
    },
    {
      type: 'image',
      src: '/assets/Bug_Ollie.jpg',
      title: 'אוליבר עם החרק',
      description: 'רגע מתוק של אוליבר עם חבר קטן מהטבע'
    },
    {
      type: 'video',
      src: '/assets/Smile.mp4',
      title: 'אוליבר מחייך',
      description: 'החיוך הכי מתוק שיש! אוליבר תמיד מצליח להעלות חיוך על הפנים.'
    },
    {
      type: 'video',
      src: '/assets/Jumping_2.mp4',
      title: 'אוליבר קופץ שוב!',
      description: 'עוד קפיצה מלאת אנרגיה - אוליבר לא מפסיק לזוז!'
    },
    {
      type: 'image',
      src: '/assets/dirty_1.jpg',
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
          <h2 className="kids-title">הכירו את אוליבר האמיתי! 🐕</h2>
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
              אוליבר הוא כלב אמיתי שחי עם המשפחה שלנו. הוא אוהב לחקור את העולם, 
              לשחק עם ילדים, ולגלות דברים חדשים כל יום. לפעמים הוא מתלכלך 
              קצת כשהוא משחק, אבל זה חלק מהכיף!
            </p>
            <p>
              הוא אוהב לקפוץ, לרוץ, ולחקור את הטבע. לפעמים הוא מוצא חרקים 
              מעניינים או צמחים חדשים, וזה תמיד מרגש אותו!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RealOliver
