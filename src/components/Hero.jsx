import React from 'react'

const Hero = () => {
  return (
    <section className="hero-video container">
      <div className="cloud cloud-a" aria-hidden="true"></div>
      <div className="cloud cloud-b" aria-hidden="true"></div>

      <div className="video-card">
        <video 
          className="hero-media" 
          aria-label="טריילר מצויר של אוליבר" 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="/Oliver-rev-15.0_Page_01.png"
        >
          <source src="/trailer.mp4" type="video/mp4" />
          הדפדפן לא תומך בוידאו. אפשר להטמיע GIF במקום.
        </video>
        <div className="video-over">
          <h1>אוליבר הכלב המלוכלך!</h1>
          <p>סיפור ילדים מחורז, מקסים ומצחיק על הרפתקה אחת בלתי נשכחת בפארק.</p>
        </div>
      </div>
      
      <div className="cta-mobile">
        <a className="btn" href="#order">הזמנה מהירה</a>
        <a className="btn ghost" href="#gallery">עוד על הספר</a>
      </div>

      <div className="wave" aria-hidden="true"></div>
    </section>
  )
}

export default Hero
