import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import ViewCounter from './components/ViewCounter.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

const App = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <div className="container mx-auto max-w-7xl relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <ViewCounter />
      <ScrollToTop />
    </>
  )
}

export default App
