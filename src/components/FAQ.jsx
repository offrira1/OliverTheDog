import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "למה בחרת לכתוב דווקא על כלב מלוכלך?",
      answer: "כי אוליבר מראה לנו שלפעמים, כדי לעשות טוב ולעזור לאחרים, מתלכלכים קצת בדרך – וזה בסדר גמור."
    },
    {
      question: "כמה זמן לקח לכתוב את הספר?",
      answer: "הרעיון נולד מזמן, אבל תהליך הכתיבה, העריכה והאיורים לקח כמה חודשים טובים עד שהספר הפך למציאות."
    },
    {
      question: "האם זה ספר ראשון מתוך סדרה?",
      answer: "זה הספר הראשון שלי, ואני כבר חולמת על עוד סיפורים והרפתקאות בהמשך. אולי אפילו על עוד ספרים של אוליבר 😉"
    },
    {
      question: "מי אייר את הספר?",
      answer: "עופרי רשתי אחי הבכור והמוכשר בזכות האיורים הצבעוניים והחיים, אוליבר קפץ מהדפים ישר ללב."
    },
    {
      question: "למה כדאי להורים לקנות את הספר?",
      answer: "מעבר להנאה מהקריאה המשותפת, הספר מעודד שיח על ערכים, עזרה לזולת ואחריות – בדרך קלילה, מצחיקה ומלאת צבע."
    },
    {
      question: "איך אפשר לרכוש את הספר?",
      answer: "הספר זמין לרכישה אונליין דרך ביט ופייבוקס (לינקים בעמוד)"
    }
  ]

  const bookFaqs = [
    {
      question: "מי זה אוליבר?",
      answer: "אוליבר הוא כלב טוב-לב שלא מפחד להתלכלך – העיקר לעזור לאחרים."
    },
    {
      question: "על מה הסיפור?",
      answer: "זהו סיפור מחורז ומצחיק על יום אחד מלא הפתעות בפארק, שבו אוליבר לומד שכשעוזרים לאחרים – לפעמים מתלכלכים, אבל הלב נשאר נקי ושמח."
    },
    {
      question: "לאיזה גילאים הספר מתאים?",
      answer: "הספר מתאים לילדים מגיל 3 עד 8, וגם להורים שנהנים מקריאה בקול ורגעי צחוק משותפים."
    },
    {
      question: "מה מיוחד בספר הזה?",
      answer: "השילוב של חריזה קלילה, הומור, איורים צבעוניים ומסר עדין לחיים – יוצר חוויה שגם ילדים וגם הורים נהנים ממנה."
    },
    {
      question: "מה הילדים יכולים ללמוד מאוליבר?",
      answer: "חברות, נתינה, חמלה, ואיך להפוך גם רגעים \"מלוכלכים\" לחוויה חיובית ומשמעותית"
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2 className="faq-title">שאלות ותשובות על אוליבר הכלב המלוכלך ❓</h2>
        
        <div className="faq-grid">
          <div className="faq-category">
            <h3 className="category-title">על הספר 📚</h3>
            <div className="faq-list">
              {bookFaqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button 
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>+</span>
                  </button>
                  {openIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="faq-category">
            <h3 className="category-title">על הכותבת ✍️</h3>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button 
                    className="faq-question"
                    onClick={() => toggleFAQ(index + bookFaqs.length)}
                  >
                    <span>{faq.question}</span>
                    <span className={`faq-icon ${openIndex === index + bookFaqs.length ? 'open' : ''}`}>+</span>
                  </button>
                  {openIndex === index + bookFaqs.length && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
