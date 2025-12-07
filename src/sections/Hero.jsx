import React from 'react'
import HeroText from '../components/HeroText.jsx'
import ParallaxBackground from '../components/ParallaxBackground.jsx'

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center justify-center md:items-start md:justify-start min-h-screen overflow-x-hidden c-space px-4 sm:px-6 md:px-0">
      <ParallaxBackground/>
      <HeroText />
    </section>
  )
}

export default Hero