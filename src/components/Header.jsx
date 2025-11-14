import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
        <div className="brand">
          <div className="brand-text">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <strong>אוליבר הכלב המלוכלך</strong>
            </Link>
          </div>
        </div>
          <nav className="top-nav">
            <a href="#order" className="btn small">הזמנה</a>
            <a href="#highlights">על הספר</a>
            <a href="#gallery">קצת מהספר</a>
            <a href="#real-oliver">אוליבר האמיתי</a>
            <Link to="/workshop" className="btn small">
              פעילויות לילדים
            </Link>
          </nav>
        </nav>
      </div>
    </header>
  )
}

export default Header