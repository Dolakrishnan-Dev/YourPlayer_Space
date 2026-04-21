import { useEffect } from 'react'
import Cursor from './components/Cursor/Cursor'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Screenshots from './components/Screenshots/Screenshots'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Download from './components/Download/Download'
import Footer from './components/Footer/Footer'

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.transitionDelay = `${(i % 3) * 0.1}s`
          e.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <Download />
      <Footer />
    </>
  )
}

export default App
