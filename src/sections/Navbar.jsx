import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className='fixed inset-x-0 top-0 z-20 w-full backdrop-blur-lg bg-primary/40 py-1.5 md:py-4 px-3 md:px-6'>
      <div className='container mx-auto max-w-7xl'>
        <nav className='flex items-center md:justify-between w-full h-10 md:h-auto'>
          <a href='#home' className='flex items-center gap-2 sm:gap-3 group shrink-0' onClick={closeMenu}>
            {/* Modern minimalist animated logo - commonly used in portfolios */}
            <div className='relative w-7 h-7 md:w-10 md:h-10'>
              <svg 
                className='w-full h-full text-aqua group-hover:text-mint transition-colors duration-300' 
                viewBox='0 0 24 24' 
                fill='none' 
                stroke='currentColor' 
                strokeWidth='2'
              >
                <rect 
                  x='3' 
                  y='3' 
                  width='18' 
                  height='18' 
                  rx='2' 
                  className='group-hover:rotate-90 transition-transform duration-500 origin-center'
                />
                <circle 
                  cx='12' 
                  cy='12' 
                  r='3' 
                  className='group-hover:scale-125 transition-transform duration-300'
                />
              </svg>
            </div>
          </a>
          
          {/* Mobile Navigation - Horizontal, spaced to fill header */}
          <ul className='md:hidden flex flex-row items-center justify-between flex-1 ml-3 gap-1'>
            <li className='flex-1 text-center'>
              <a href='#home' className='block py-1.5 px-1 text-[10px] sm:text-xs font-medium text-neutral-300 hover:text-white transition-colors active:text-white touch-manipulation' onClick={closeMenu}>Home</a>
            </li>
            <li className='flex-1 text-center'>
              <a href='#about' className='block py-1.5 px-1 text-[10px] sm:text-xs font-medium text-neutral-300 hover:text-white transition-colors active:text-white touch-manipulation' onClick={closeMenu}>About Me</a>
            </li>
            <li className='flex-1 text-center'>
              <a href='#projects' className='block py-1.5 px-1 text-[10px] sm:text-xs font-medium text-neutral-300 hover:text-white transition-colors active:text-white touch-manipulation' onClick={closeMenu}>Projects</a>
            </li>
            <li className='flex-1 text-center'>
              <a href='#contact' className='block py-1.5 px-1 text-[10px] sm:text-xs font-medium text-neutral-300 hover:text-white transition-colors active:text-white touch-manipulation' onClick={closeMenu}>Contact Me</a>
            </li>
          </ul>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex nav-ul'>
            <li className='nav-li'><a href='#home' className='nav-link'>Home</a></li>
            <li className='nav-li'><a href='#about' className='nav-link'>About</a></li>
            <li className='nav-li'><a href='#projects' className='nav-link'>Projects</a></li>
            <li className='nav-li'><a href='#contact' className='nav-link'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </div> 
  )
}

export default Navbar