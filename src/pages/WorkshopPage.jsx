import React, { useEffect } from 'react'
import Header from '../components/Header'
import WorkshopBooking from '../components/WorkshopBooking'
import WhatsAppChat from '../components/WhatsAppChat'

const WorkshopPage = () => {
  useEffect(() => {
    // Smooth scrolling for internal links
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.slice(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    // Add event listeners to all internal links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return (
    <div className="App">
      <a className="sr-only" href="#main">דלג לתוכן</a>
      <Header />
      <main id="main">
        <WorkshopBooking />
      </main>
      <footer className="container foot">
        <div>© <span id="y">{new Date().getFullYear()}</span> אוליבר הכלב המלוכלך</div>
        <div className="muted small">מדיניות פרטיות • תנאי שימוש</div>
      </footer>
      <WhatsAppChat />
    </div>
  )
}

export default WorkshopPage

