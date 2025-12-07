import React from 'react'

const ResumeDownload = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    // You'll need to add your actual resume PDF to public/assets/resume.pdf
    const link = document.createElement('a')
    link.href = '/assets/resume.pdf'
    link.download = 'Dinithi_Yasasvi_Dahanayake_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg group touch-manipulation"
    >
      <svg 
        className="w-5 h-5 transition-transform group-hover:rotate-12" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span>Download Resume</span>
    </button>
  )
}

export default ResumeDownload

