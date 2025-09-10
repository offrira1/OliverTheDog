import React from 'react'

const Author = () => {
  return (
    <section id="author" className="author-section">
      <div className="container">
        <h2 className="author-title">קצת עליי ועל אוליבר</h2>
        
        <div className="author-content">
          <div className="author-text">
            <div className="author-intro">
              <h3>נעים להכיר! אני שירה רשתי וזהו הספר הראשון שלי – "אוליבר הכלב המלוכלך".</h3>
              <p>
                כתבתי אותו מתוך אהבה גדולה לסיפורים לילדים ומתוך אמונה שספר טוב יכול להצחיק, לרגש וגם ללמד ערכים חשובים.
              </p>
            </div>
            
            <div className="oliver-story">
              <h4>🐕 על אוליבר</h4>
              <p>
                אוליבר, הגיבור של הספר, הוא כלב מתוק וטוב-לב שמוכן להתלכלך שוב ושוב – רק כדי לעזור לאחרים.
                זהו סיפור מלא הומור, חריזה ואיורים צבעוניים, שילדים מתאהבים בו מהשורה הראשונה.
              </p>
            </div>

            <div className="illustrator-info">
              <h4>🎨 על המאייר</h4>
              <p>
                עופרי רשתי אחי הבכור והמוכשר אייר את הספר במיוחד.
                בזכות האיורים הצבעוניים והחיים, אוליבר קפץ מהדפים ישר ללב.
              </p>
            </div>
          </div>
          
          <div className="author-visual">
            <div className="author-card">
              <div className="author-avatar">👩‍💼</div>
              <h4>שירה רשתי</h4>
              <p>כותבת הספר "אוליבר הכלב המלוכלך"</p>
              <div className="author-badges">
                <span className="badge">📚 סופרת</span>
                <span className="badge">💝 אוהבת ילדים</span>
                <span className="badge">✨ יוצרת</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Author
