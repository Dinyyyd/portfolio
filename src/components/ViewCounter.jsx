import React, { useState, useEffect } from 'react'

const ViewCounter = () => {
  const [views, setViews] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Always show the component immediately - don't wait for any API calls
    setIsVisible(true)
    
    try {
      // Use localStorage for reliable tracking that works everywhere
      const storedViews = localStorage.getItem('portfolioViews')
      const lastVisit = localStorage.getItem('lastVisit')
      const now = Date.now()
      
      // Count as new view if last visit was more than 30 minutes ago
      if (!lastVisit || (now - parseInt(lastVisit)) > 30 * 60 * 1000) {
        const newViews = storedViews ? parseInt(storedViews) + 1 : 1
        setViews(newViews)
        localStorage.setItem('portfolioViews', newViews.toString())
        localStorage.setItem('lastVisit', now.toString())
      } else {
        setViews(storedViews ? parseInt(storedViews) : 0)
      }
    } catch (error) {
      // If localStorage fails, just show 0
      setViews(0)
    }
  }, [])

  return (
    <div className={`fixed bottom-4 left-4 md:bottom-4 md:left-4 z-30 bg-storm/90 backdrop-blur-sm rounded-full px-3 py-2 md:px-4 flex items-center gap-2 border border-aqua/20 transition-all duration-500 touch-manipulation ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <svg className="w-4 h-4 text-aqua shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <span className="text-xs md:text-sm text-neutral-300 whitespace-nowrap">
        <span className="font-semibold text-aqua">{views.toLocaleString()}</span> <span className="hidden sm:inline">views</span>
      </span>
    </div>
  )
}

export default ViewCounter

