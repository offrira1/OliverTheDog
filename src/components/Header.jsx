import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
        <div className="brand">
          <div className="brand-text">
            
            <strong>אוליבר הכלב המלוכלך</strong>
          </div>
        </div>
          <nav className="top-nav">
            <a href="#order" className="btn small">הזמנה</a>
            <a href="#highlights">על הספר</a>
            <a href="#gallery">קצת מהספר</a>
            <a href="#real-oliver">אוליבר האמיתי</a>
          </nav>
        </nav>
      </div>
    </header>
  )
}

export default Header