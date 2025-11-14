import React, { useState, useEffect } from 'react'

const WorkshopBooking = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    fullName: '',
    phone: '',
    numberOfChildren: '',
    ageGroup: '',
    additionalNotes: ''
  })

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
      src: '/s3.jpg',
      title: '',
      subtitle: '',
      alt: 'פעילות בגילאי 3-4'
    },
    {
      src: '/s4.jpg',
      title: '',
      subtitle: '',
      alt: 'פעילות בחוץ- הקראה בעגלת קפה'
    },
    {
      src: '/s5.jpg',
      title: '',
      subtitle: '',
      alt: 'פעילות בחוץ- הקראה בעגלת קפה'
    },
    {
      src: '/s6.jpg',
      title: '',
      subtitle: '',
      alt: 'פעילות בחוץ- הקראה בעגלת קפה'
    },
    {
      src: '/s7.jpg',
      title: '',
      subtitle: '',
      alt: 'פעילות בחוץ- הקראה בעגלת קפה'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const generateWhatsAppMessage = () => {
    return `היי! אני ${formData.fullName} מ-${formData.schoolName}
אני מעוניין/ת להזמין את סדנת "אוליבר הכלב המלוכלך" לבית הספר שלנו.

פרטי הקשר:
שם מלא: ${formData.fullName}
שם גן: ${formData.schoolName}
פלאפון: ${formData.phone}

פרטי הסדנה:
מספר ילדים: ${formData.numberOfChildren}
קבוצת גיל: ${formData.ageGroup}

הערות נוספות:
${formData.additionalNotes || 'אין'}`
  }

  const handleBooking = () => {
    const requiredFields = ['schoolName', 'fullName', 'phone', 'numberOfChildren', 'ageGroup']
    const missingFields = requiredFields.filter(field => !formData[field].trim())
    
    if (missingFields.length > 0) {
      alert('אנא מלא את כל השדות הנדרשים')
      return
    }

    const message = generateWhatsAppMessage()
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/972546682114?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  const handleImageClick = (index) => {
    setActiveImage(index)
  }

  const scheduleData = [
    {
      time: '0-15 דקות',
      stage: '1. הקראת הסיפור ופתיחה',
      description: 'הסופרת שירה רשתי מקריאה את הספר "אוליבר הכלב המלוכלך" בהקראה פעילה ואינטראקטיבית.',
      notes: 'פתיחה ושיח: הדגשת החשיבות של שמירה על חברים ועל הסביבה.'
    },
    {
      time: '15-25 דקות',
      stage: '2. המחזה: מוסר השכל בפעולה (3 סצנות)',
      description: 'המחזה עם הבובות: הסופרת והמלווה משתמשים בבובות של דמויות מהספר כדי להציג 3 סצנות קצרות בהן יש צורך בעזרה:',
      subItems: [
        'סצנה 1 - עזרה לברווז שבצרה - וניקיון הנהר.',
        'סצנה 2 - עזרה לדביבון שתקוע בפח וניקיון המגבונים מסביב',
        'סצנה 3 - עזרה לארנבת להגיע לגזר ולנקות את העלים שנפלו.'
      ],
      notes: 'שיתוף פעולה מלא: לאחר הצגת כל סצנה, הילדים מתבקשים לעזור: לנקות, לזרוק לפח, לחמול, או להציע פתרון לדמות. כל הילדים משתתפים בפתרון בכל סצנה (למשל, ילד אחד "מנקה" בסיבוב הראשון, ילד אחר בסיבוב השני).'
    },
    {
      time: '25-40 דקות',
      stage: '3. המפגש עם אוליבר הכלב האמיתי',
      description: 'כניסה מרגשת: הופעת האורחים של עופרי ואוליבר הכלב האמיתי.',
      subItems: [
        'ליטוף והכרות (5 דקות): סשן ליטופים מבוקר ומודרך (כל ילד בתורו) עם דגש על חמלה ויחס עדין לבעלי חיים.',
        'משחקי כדור (5 דקות): משחק קצר ומהנה של זריקת כדור עם אוליבר, בו הילדים מעורבים כקבוצה.',
        'תעלולים (5 דקות): הצגת 2-3 תעלולים קצרים.'
      ],
      notes: 'בטיחות: הדרכה קצרה וממוקדת של עופרי על כללי זהירות וליטוף עדין לפני תחילת המפגש עם הכלב. שילוב עם הילדים: משחקי כדור קצרים תוך שיתוף של הילדים בזריקה קבוצתית.'
    },
    {
      time: '40-50 דקות',
      stage: '4. יצירה: "מלכלכים את אוליבר"',
      description: 'פעילות יצירה קצרה: הילדים מקבלים דפי צביעה של אוליבר (כדמות נקייה).',
      subItems: [
        'המשימה: לצבוע/ללכלך את אוליבר, תוך שימוש בחומרי יצירה מגוונים.'
      ],
      notes: 'המטרה החינוכית: שימוש בצבעים ובחומרי יצירה קטנים כדי "ללכלך" את אוליבר, כמעין משחק יצירתי המדגים את הניגוד בין לכלוך וניקיון.'
    },
    {
      time: '50-60 דקות',
      stage: '5. סיכום, סוף ותשורות',
      description: 'שיח סיכום (5 דקות): הסופרת מסכמת את מסר היום כולו: החשיבות לשמור על סביבה ועל חברים, ואיך מגע עם בעלי חיים דורש חמלה ורגישות.',
      notes: 'סגירה נעימה: פרידה מאוליבר הכלב וחמימה.'
    }
  ]

  return (
    <>
      {/* Introduction CTA Box */}
      <section className="container section" style={{ paddingTop: '7rem' }}>
        <div className="workshop-intro card" style={{ padding: '2.5rem', marginBottom: '3rem', textAlign: 'right' }}>
          <p className="workshop-intro-text" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#0b1324', marginBottom: '2rem' }}>
            מחפשים דרך חדשנית ללמד ערכים חשובים כמו אמפתיה, אחריות ומודעות סביבתית? מעבר לסיפור פשוט! הזמינו את הסופרת שירה רשתי ואת אוליבר הכלב המלוכלך האהוב לשעה מלאה של למידה מעוררת, מעשית ובלתי נשכחת.
          </p>
          <a href="#booking" className="btn wide" style={{ maxWidth: '400px', margin: '0 auto', display: 'block', textAlign: 'center' }}>
            הזמינו את חוויית אוליבר עוד היום!
          </a>
        </div>
      </section>

      {/* Schedule Table Section */}
      <section id="schedule" className="container section card" style={{ marginBottom: '3rem' }}>
        <div style={{ padding: '2rem' }}>
          <h2 className="workshop-section-title" style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0b1324', marginBottom: '2rem', textAlign: 'center' }}>
            לוח זמנים מפורט של הסדנה
          </h2>
          
          <div className="schedule-table-container" style={{ overflowX: 'auto' }}>
            <table className="schedule-table" style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(90deg, var(--brand), var(--brand2))', color: '#053144' }}>
                  <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '700', fontSize: '1rem', borderBottom: '2px solid #e8f4fb' }}>זמן משוער</th>
                  <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '700', fontSize: '1rem', borderBottom: '2px solid #e8f4fb' }}>שלב הפעילות</th>
                  <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '700', fontSize: '1rem', borderBottom: '2px solid #e8f4fb' }}>תיאור מפורט</th>
                  <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '700', fontSize: '1rem', borderBottom: '2px solid #e8f4fb' }}>הערות והנחיות</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #e8f4fb', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f8fdff'} onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}>
                    <td data-label="זמן משוער" style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#2c5aa0', verticalAlign: 'top', minWidth: '120px' }}>
                      {item.time}
                    </td>
                    <td data-label="שלב הפעילות" style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#0b1324', verticalAlign: 'top', minWidth: '200px' }}>
                      {item.stage}
                    </td>
                    <td data-label="תיאור מפורט" style={{ padding: '1rem', textAlign: 'right', color: '#546274', lineHeight: '1.6', verticalAlign: 'top' }}>
                      <div>{item.description}</div>
                      {item.subItems && (
                        <ul style={{ marginTop: '0.5rem', paddingRight: '1.5rem', listStyleType: 'disc' }}>
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex} style={{ marginTop: '0.3rem' }}>{subItem}</li>
                          ))}
                        </ul>
                      )}
                    </td>
                    <td data-label="הערות והנחיות" style={{ padding: '1rem', textAlign: 'right', color: '#546274', lineHeight: '1.6', verticalAlign: 'top', fontSize: '0.95rem', fontStyle: 'italic', minWidth: '250px' }}>
                      {item.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="container section card">
        <div className="booking-section" style={{ padding: '2rem' }}>
          <h2 className="booking-title" style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0b1324', marginBottom: '1rem', textAlign: 'center' }}>
            הזמינו את סדנת אוליבר
          </h2>
          <p className="booking-subtitle" style={{ fontSize: '1.1rem', color: '#546274', marginBottom: '2rem', textAlign: 'center' }}>
            מלאו את הטופס למטה ואנו ניצור איתכם קשר לאישור הפרטים
          </p>

          <div className="booking-form" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="form-section" style={{ marginBottom: '25px', padding: '20px', background: '#f8fdff', borderRadius: '12px', border: '1px solid #e8f4fb' }}>
              <h5 style={{ margin: '0 0 15px 0', color: '#2c5aa0', fontSize: '18px', fontWeight: '600', textAlign: 'right' }}>
                פרטי הקשר
              </h5>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input
                  type="text"
                  name="schoolName"
                  placeholder="שם גן *"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '12px 16px', border: '2px solid #e8f4fb', borderRadius: '12px', fontSize: '16px', background: 'white', color: '#0b1324', textAlign: 'right' }}
                />
                <input
                  type="text"
                  name="fullName"
                  placeholder="שם מלא *"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '12px 16px', border: '2px solid #e8f4fb', borderRadius: '12px', fontSize: '16px', background: 'white', color: '#0b1324', textAlign: 'right' }}
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="פלאפון *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '12px 16px', border: '2px solid #e8f4fb', borderRadius: '12px', fontSize: '16px', background: 'white', color: '#0b1324', textAlign: 'right' }}
                />
              </div>
            </div>

            <div className="form-section" style={{ marginBottom: '25px', padding: '20px', background: '#f8fdff', borderRadius: '12px', border: '1px solid #e8f4fb' }}>
              <h5 style={{ margin: '0 0 15px 0', color: '#2c5aa0', fontSize: '18px', fontWeight: '600', textAlign: 'right' }}>
                פרטי הסדנה
              </h5>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <input
                  type="number"
                  name="numberOfChildren"
                  placeholder="מספר ילדים *"
                  value={formData.numberOfChildren}
                  onChange={handleInputChange}
                  min="1"
                  required
                  style={{ width: '100%', padding: '12px 16px', border: '2px solid #e8f4fb', borderRadius: '12px', fontSize: '16px', background: 'white', color: '#0b1324', textAlign: 'right' }}
                />
                <select
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '12px 16px', border: '2px solid #e8f4fb', borderRadius: '12px', fontSize: '16px', background: 'white', color: '#0b1324', textAlign: 'right' }}
                >
                  <option value="">בחר קבוצת גיל *</option>
                  <option value="3-4">גילאי 3-4 (גן טרום חובה)</option>
                  <option value="4-5">גילאי 4-5 (גן חובה)</option>
                  <option value="5-6">גילאי 5-6 (כיתה א')</option>
                  <option value="6-7">גילאי 6-7 (כיתה ב')</option>
                </select>
              </div>
            </div>

            <div className="form-section" style={{ marginBottom: '25px', padding: '20px', background: '#f8fdff', borderRadius: '12px', border: '1px solid #e8f4fb' }}>
              <h5 style={{ margin: '0 0 15px 0', color: '#2c5aa0', fontSize: '18px', fontWeight: '600', textAlign: 'right' }}>
                הערות נוספות
              </h5>
              <textarea
                name="additionalNotes"
                placeholder="הערות, בקשות מיוחדות, או מידע נוסף..."
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows="4"
                style={{ width: '100%', padding: '12px 16px', border: '2px solid #e8f4fb', borderRadius: '12px', fontSize: '16px', background: 'white', color: '#0b1324', textAlign: 'right', fontFamily: 'inherit', resize: 'vertical' }}
              />
            </div>

            <button 
              className="btn wide" 
              onClick={handleBooking}
              style={{ fontSize: '1.1rem', padding: '16px 32px', marginTop: '1rem' }}
            >
              הזמנה
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="gallery-background" style={{ marginTop: '3rem' }}>
        <section id="workshop-gallery" className="container section">
          <h2 className="kids-title">תמונות מהפעילויות האחרונות</h2>
          <div className="image-gallery">
            {isMobile ? (
              // Mobile Layout
              <div className="gallery-container-mobile">
                <div className="featured-area-center">
                  <div className="featured-image-large">
                    <img 
                      src={galleryImages[activeImage].src} 
                      alt={galleryImages[activeImage].alt}
                      style={{ opacity: 1 }}
                    />
                  </div>
                </div>
                
                <div className="small-grid-below">
                  {galleryImages.map((image, index) => (
                    <div 
                      key={index}
                      className={`gallery-item-small ${activeImage === index ? 'active' : ''}`}
                      onClick={() => handleImageClick(index)}
                    >
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Desktop Layout
              <div className="gallery-container">
                <div className="featured-area">
                  <div className="featured-image">
                    <img 
                      src={galleryImages[activeImage].src} 
                      alt={galleryImages[activeImage].alt}
                      style={{ opacity: 1 }}
                    />
                  </div>
                </div>
                
                <div className="small-grid">
                  {galleryImages.map((image, index) => (
                    <div 
                      key={index}
                      className={`gallery-item small-item ${activeImage === index ? 'active' : ''}`}
                      onClick={() => handleImageClick(index)}
                    >
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default WorkshopBooking
