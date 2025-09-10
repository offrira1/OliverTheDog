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
          poster="/assets/Oliver-rev-15.0_Page_01.png"
        >
          <source src="/assets/trailer.mp4" type="video/mp4" />
          הדפדפן לא תומך בוידאו. אפשר להטמיע GIF במקום.
        </video>
        <div className="video-over">
          <h1>הכירו את אוליבר! 🫧</h1>
          <p>סיפור מצחיק וצבעוני על כלב שובב שמגלה כמה כיף להיות נקי.</p>
            <div className="cta">
              <a className="btn" href="https://wa.me/972546682114?text=היי%20אשמח%20לשמוע%20על%20הספר%20-%20אוליבר%20הכלב%20המלוכלך" target="_blank" rel="noopener noreferrer">הזמנה מהירה</a>
              <a className="btn ghost" href="#highlights">עוד על הספר</a>
            </div>
        </div>
      </div>

      <div className="wave" aria-hidden="true"></div>
    </section>
  )
}

export default Hero
