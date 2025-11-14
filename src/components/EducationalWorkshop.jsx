import React from 'react'

const EducationalWorkshop = () => {
  return (
    <section id="workshop" className="container section">
      {/* Core Identity & Headline */}
      <div className="workshop-hero card" style={{ textAlign: 'center', padding: '3rem 2rem', marginBottom: '3rem' }}>
        <h1 className="workshop-h1">הביאו טוב לב, ניקיון וכלב אמיתי לכיתה שלכם!</h1>
        <h2 className="workshop-h2">חוויית 'אוליבר הכלב המלוכלך': סדנה חווייתית רב-חושית על חמלה, עזרה לזולת וטיפול בסביבה.</h2>
        
        {/* Image 1 - Near Introduction/H1 */}
        <div className="workshop-image-container" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <img 
            src="/Oliver-rev-15.0_Page_01.png" 
            alt="סיפור פעיל - סדנת אוליבר הכלב המלוכלך" 
            className="workshop-hero-image"
            style={{ 
              maxWidth: '100%', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '2px solid #e8f4fb'
            }}
          />
          <p className="workshop-image-caption" style={{ marginTop: '1rem', color: '#546274', fontStyle: 'italic' }}>
            סיפור פעיל
          </p>
        </div>
      </div>

      {/* Introduction (Above the Fold) */}
      <div className="workshop-intro card" style={{ padding: '2.5rem', marginBottom: '3rem', textAlign: 'right' }}>
        <p className="workshop-intro-text" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#0b1324', marginBottom: '2rem' }}>
          מחפשים דרך חדשנית ללמד ערכים חשובים כמו אמפתיה, אחריות ומודעות סביבתית? מעבר לסיפור פשוט! הזמינו את הסופרת שירה רשטי ואת אוליבר הכלב המלוכלך האהוב לשעה מלאה של למידה מעוררת, מעשית ובלתי נשכחת.
        </p>
        <a href="#booking" className="btn wide" style={{ maxWidth: '400px', margin: '0 auto', display: 'block', textAlign: 'center' }}>
          הזמינו את חוויית אוליבר עוד היום!
        </a>
      </div>

      {/* The Full Agenda Breakdown */}
      <div className="workshop-agenda card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
        <h2 className="workshop-section-title" style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0b1324', marginBottom: '2rem', textAlign: 'center' }}>
          יותר מסיפור: שעה של למידה חווייתית
        </h2>

        <div className="agenda-items" style={{ display: 'grid', gap: '2rem' }}>
          {/* A. Interactive Story Time */}
          <div className="agenda-item" style={{ background: '#f8fdff', padding: '2rem', borderRadius: '16px', border: '2px solid #e8f4fb' }}>
            <div className="agenda-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexDirection: 'row-reverse' }}>
              <span className="agenda-number" style={{ 
                background: 'linear-gradient(90deg, var(--brand), var(--brand2))', 
                color: '#053144', 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: '800', 
                fontSize: '1.5rem',
                flexShrink: 0
              }}>
                א'
              </span>
              <h3 className="agenda-title" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0b1324', margin: 0 }}>
                זמן הסיפור האינטראקטיבי (15 דקות)
              </h3>
            </div>
            <p className="agenda-description" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#546274', margin: 0, textAlign: 'right' }}>
              הסופרת שירה רשטי מובילה קריאה פעילה ומעוררת של 'אוליבר הכלב המלוכלך', ומכינה את הבמה לדיונים על לכלוך, ניקיון ואחריות.
            </p>
          </div>

          {/* B. SEL Through Role-Playing */}
          <div className="agenda-item" style={{ background: '#f8fdff', padding: '2rem', borderRadius: '16px', border: '2px solid #e8f4fb' }}>
            <div className="agenda-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexDirection: 'row-reverse' }}>
              <span className="agenda-number" style={{ 
                background: 'linear-gradient(90deg, var(--brand), var(--brand2))', 
                color: '#053144', 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: '800', 
                fontSize: '1.5rem',
                flexShrink: 0
              }}>
                ב'
              </span>
              <h3 className="agenda-title" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0b1324', margin: 0 }}>
                למידה רגשית-חברתית דרך משחק תפקידים (10 דקות)
              </h3>
            </div>
            <p className="agenda-description" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#546274', margin: 0, textAlign: 'right' }}>
              באמצעות בובות סיפור מיוחדות ועזרים ויזואליים (כולל פח אשפה ייעודי!), הילדים משתתפים ב-3 סצנות אינטראקטיביות מרכזיות מהספר. הם לומדים על עזרה לחבר, ניקיון הסביבה ותרגול חמלה על ידי מתן פתרונות פעילים לדמויות הבובות. כל ילד מקבל הזדמנות להשתתף!
            </p>
            
            {/* Image 2 - Near Role-Playing Section */}
            <div className="workshop-image-container" style={{ marginTop: '1.5rem' }}>
              <img 
                src="/Oliver-rev-15.0_Page_06.png" 
                alt="למידת חמלה יד ביד" 
                className="workshop-section-image"
                style={{ 
                  maxWidth: '100%', 
                  borderRadius: '16px', 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  border: '2px solid #e8f4fb'
                }}
              />
              <p className="workshop-image-caption" style={{ marginTop: '0.5rem', color: '#546274', fontStyle: 'italic', textAlign: 'center' }}>
                למידת חמלה יד ביד
              </p>
            </div>
          </div>

          {/* C. Meet the Real Oliver! */}
          <div className="agenda-item" style={{ background: '#f8fdff', padding: '2rem', borderRadius: '16px', border: '2px solid #e8f4fb' }}>
            <div className="agenda-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexDirection: 'row-reverse' }}>
              <span className="agenda-number" style={{ 
                background: 'linear-gradient(90deg, var(--brand), var(--brand2))', 
                color: '#053144', 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: '800', 
                fontSize: '1.5rem',
                flexShrink: 0
              }}>
                ג'
              </span>
              <h3 className="agenda-title" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0b1324', margin: 0 }}>
                פגישה עם אוליבר האמיתי! (15 דקות)
              </h3>
            </div>
            <p className="agenda-description" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#546274', margin: 0, textAlign: 'right' }}>
              שיא האירוע! המטפלת עופרי ואוליבר הכלב האמיתי מגיעים למפגש אינטראקציה בטוח, מפוקח ואוהב. זה כולל ליטוף עדין, משחקי כדור כיפיים והדגמת טריקים קצרה. שיעור יפה בעדינות וחמלה לבעלי חיים.
            </p>
            
            {/* Image 3 - Near Real Oliver Section */}
            <div className="workshop-image-container" style={{ marginTop: '1.5rem' }}>
              <img 
                src="/Bug_Ollie.jpg" 
                alt="התרגשות מפגישה עם אוליבר!" 
                className="workshop-section-image"
                style={{ 
                  maxWidth: '100%', 
                  borderRadius: '16px', 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  border: '2px solid #e8f4fb'
                }}
              />
              <p className="workshop-image-caption" style={{ marginTop: '0.5rem', color: '#546274', fontStyle: 'italic', textAlign: 'center' }}>
                התרגשות מפגישה עם אוליבר!
              </p>
            </div>
          </div>

          {/* D. Creative Cleanup & Wrap-Up */}
          <div className="agenda-item" style={{ background: '#f8fdff', padding: '2rem', borderRadius: '16px', border: '2px solid #e8f4fb' }}>
            <div className="agenda-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexDirection: 'row-reverse' }}>
              <span className="agenda-number" style={{ 
                background: 'linear-gradient(90deg, var(--brand), var(--brand2))', 
                color: '#053144', 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: '800', 
                fontSize: '1.5rem',
                flexShrink: 0
              }}>
                ד'
              </span>
              <h3 className="agenda-title" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0b1324', margin: 0 }}>
                פעילות יצירתית וסיכום (15 דקות)
              </h3>
            </div>
            <p className="agenda-description" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#546274', margin: 0, textAlign: 'right' }}>
              אנחנו עוברים לפעילות אמנות קצרה. הילדים מקבלים דפי צביעה של אוליבר נקי ומעודדים 'להלכלך אותו' עם צבעים וחומרים! פעילות משחקית ומעשית זו מחזקת את הניגוד בין נקי למלוכלך, וסוגרת את המעגל על המסר המרכזי של הספר.
            </p>
            
            {/* Image 4 - Near Creative Section */}
            <div className="workshop-image-container" style={{ marginTop: '1.5rem' }}>
              <img 
                src="/Oliver-rev-15.0_Page_08.png" 
                alt="פעילות למידה יצירתית" 
                className="workshop-section-image"
                style={{ 
                  maxWidth: '100%', 
                  borderRadius: '16px', 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  border: '2px solid #e8f4fb'
                }}
              />
              <p className="workshop-image-caption" style={{ marginTop: '0.5rem', color: '#546274', fontStyle: 'italic', textAlign: 'center' }}>
                פעילות למידה יצירתית
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Takeaways & Values */}
      <div className="workshop-values card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
        <h2 className="workshop-section-title" style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0b1324', marginBottom: '2rem', textAlign: 'center' }}>
          ערכים שנשארים: מה הילדים ילמדו
        </h2>
        
        <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div className="value-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', border: '2px solid #e8f4fb', textAlign: 'right' }}>
            <div className="value-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💝</div>
            <h3 className="value-title" style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0b1324', marginBottom: '0.5rem' }}>
              חמלה ואמפתיה
            </h3>
            <p className="value-description" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#546274', margin: 0 }}>
              דרך אינטראקציה עם דמויות הסיפור והכלב האמיתי.
            </p>
          </div>

          <div className="value-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', border: '2px solid #e8f4fb', textAlign: 'right' }}>
            <div className="value-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
            <h3 className="value-title" style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0b1324', marginBottom: '0.5rem' }}>
              עזרה לחסרי אונים
            </h3>
            <p className="value-description" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#546274', margin: 0 }}>
              יישום מעשי של 'תיקון עולם' על ידי סיוע לדמויות הזקוקות לעזרה.
            </p>
          </div>

          <div className="value-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', border: '2px solid #e8f4fb', textAlign: 'right' }}>
            <div className="value-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌍</div>
            <h3 className="value-title" style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0b1324', marginBottom: '0.5rem' }}>
              מודעות סביבתית
            </h3>
            <p className="value-description" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#546274', margin: 0 }}>
              הבנת החשיבות של ניקיון ושימוש בפח אשפה.
            </p>
          </div>

          <div className="value-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', border: '2px solid #e8f4fb', textAlign: 'right' }}>
            <div className="value-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎨</div>
            <h3 className="value-title" style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0b1324', marginBottom: '0.5rem' }}>
              מעורבות רגשית
            </h3>
            <p className="value-description" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#546274', margin: 0 }}>
              חוויה רב-חושית שמקבעת את הלמידה בצורה בלתי נשכחת.
            </p>
          </div>

          <div className="value-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', border: '2px solid #e8f4fb', textAlign: 'right' }}>
            <div className="value-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
            <h3 className="value-title" style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0b1324', marginBottom: '0.5rem' }}>
              בטיחות וכבוד
            </h3>
            <p className="value-description" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#546274', margin: 0 }}>
              למידה על אינטראקציות בטוחות ועדינות עם בעלי חיים.
            </p>
          </div>
        </div>
      </div>

      {/* Closing & Call to Action */}
      <div className="workshop-cta card" style={{ padding: '3rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)', border: '3px solid #bae6fd' }}>
        <p className="workshop-closing-text" style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#0b1324', marginBottom: '2rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          אל תפספסו את ההזדמנות לספק לתלמידים שלכם חוויה חינוכית מהנה וייחודית. סדנת 'אוליבר' היא שעה של שמחה ולמידה טהורה, המותאמת בדיוק לצרכים של לומדים צעירים.
        </p>
        <a href="#booking" className="btn" style={{ fontSize: '1.2rem', padding: '18px 40px', display: 'inline-block' }}>
          בדקו תאריכים זמינים והזמינו עכשיו!
        </a>
      </div>
    </section>
  )
}

export default EducationalWorkshop
