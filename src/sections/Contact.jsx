import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import ResumeDownload from '../components/ResumeDownload.jsx'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // EmailJS configuration
    // You'll need to replace these with your actual EmailJS credentials
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    // Template parameters - these will be sent to your Gmail
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'dinithi.y3@gmail.com'
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      alert('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Sorry, there was an error sending your message. Please try again or email me directly at dinithi.y3@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="c-space section-spacing bg-primary relative overflow-hidden rounded-3xl">
      <h2 className="text-heading relative z-10 mt-6 mb-4">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 relative z-10">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-neutral-400 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-neutral-400 mb-2">Email</p>
              <a href="mailto:dinithi.y3@gmail.com" className="text-aqua hover:text-mint transition-colors">
                dinithi.y3@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm text-neutral-400 mb-2">Connect with me</p>
              <a 
                href="https://www.linkedin.com/in/dinithi-yasasvi-45a270270/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5] hover:bg-[#005885] text-white rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg group mb-3"
                title="Connect on LinkedIn"
              >
                <img 
                  src="/assets/socials/linkedIn.svg" 
                  alt="LinkedIn" 
                  className="w-5 h-5"
                />
                <span>LinkedIn</span>
              </a>
            </div>
            <div>
              <p className="text-sm text-neutral-400 mb-2">Download Resume</p>
              <ResumeDownload />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="field-label block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="field-input field-input-focus w-full"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="field-label block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="field-input field-input-focus w-full"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="field-label block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="field-input field-input-focus w-full resize-none"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-royal to-lavender hover:from-lavender hover:to-royal active:from-lavender active:to-royal text-white font-semibold rounded-full overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg touch-manipulation"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

