import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import RealOliver from './components/RealOliver'
import Author from './components/Author'
import FAQ from './components/FAQ'
import Order from './components/Order'
import WhatsAppChat from './components/WhatsAppChat'

function App() {
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
        <Hero />
        <Features />
        <Gallery />
        <RealOliver />
        <Author />
        <Order />
        <FAQ />
      </main>
      <footer className="container foot">
        <div>© <span id="y">{new Date().getFullYear()}</span> אוליבר הכלב המלוכלך</div>
        <div className="muted small">מדיניות פרטיות • תנאי שימוש</div>
      </footer>
      <WhatsAppChat />
    </div>
  )
}

export default App