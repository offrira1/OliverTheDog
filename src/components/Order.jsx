import React from 'react'

const Order = () => {
  return (
    <section id="order" className="container section card">
      <div className="order" style={{border: 'none', padding: 0, background: 'none'}}>
        <div className="order-copy">
          <h2>הזמנה בקליק</h2>
          <p>הזמינו את הספר עכשיו במחיר השקה מיוחד!</p>
          <div className="kids-plans">
            <div className="plan">
              <h3>עותק מודפס</h3>
              <div className="price">
                <span className="old-price">50 ש"ח</span>
                <span className="new-price">מחיר השקה! 39.90 ש"ח</span>
              </div>
              <ul>
                <li>כריכה צבעונית ומבריקה</li>
                <li>נייר עבה ונעים</li>
                <li>מדבקת "אוליבר" לכל הזמנה 🎁</li>
              </ul>
              <a className="btn wide" href="https://wa.me/972546682114?text=היי%20אשמח%20לשמוע%20על%20הספר%20-%20אוליבר%20הכלב%20המלוכלך" target="_blank" rel="noopener noreferrer">הזמנה</a>
            </div>
          </div>

        </div>

        <div className="order-art">
          <img src="/Oliver-rev-15.0_Page_01.png" alt="כריכת הספר — אוליבר הכלב המלוכלך" />
        </div>
      </div>
    </section>
  )
}

export default Order