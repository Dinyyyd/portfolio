import React from 'react'
import Card from '../components/Card.jsx'

const BASE_URL = import.meta.env.BASE_URL

const About = () => {
  return (
    <section id="about" className="c-space section-spacing bg-primary relative overflow-hidden rounded-3xl">
      <h2 className="text-heading relative z-10 mt-6 mb-4">
        About Me
      </h2>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20 rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(122, 87, 219, 0.15) 1px, transparent 0),
            radial-gradient(circle at 2px 2px, rgba(92, 51, 204, 0.1) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px, 80px 80px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-midnight/50 to-navy/30 pointer-events-none" />

      <div className="grid grid-cols-1 gap-2 md:grid-cols-6 md:auto-rows-[11.5rem] mt-12 relative z-10">
        
        {/*Grid 1*/}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden">
          <img 
            src={`${BASE_URL}assets/coding-pov.png`}
            className="absolute scale-[1.0] -right-[4rem] -top-[2rem] md:scale-[2] md:left-60 md:inset-y-5 lg:scale-[2.5]"
            alt="Coding perspective"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Dinithi Yasasvi Dahanayake</p>
            <p className="subtext">
              I am an IT undergrad specializing in Artificial Intelligence, 
              studying and developing my skills in modern web technologies, 
              data processing, and machine learning.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none bottom-4 h-1/2 bg-gradient-to-t from-indigo to-transparent"></div>
        </div>

        {/*Grid 2*/}
        <div className="grid-default-color grid-2 relative">
            <div className="flex items-center justify-center w-full h-full relative"> 
            
            <p className="flex items-end text-5xl text-gray-500 ">
            CODE IS CRAFT</p>
            <Card style={{transform: "rotate(75deg)", top:"30%", left:"20%"}} text="GRASP" />
            <Card style={{transform: "rotate(-30deg)", top:"60%", left:"45%"}} text="SOLID" />
            <Card style={{transform: "rotate(90deg)", bottom:"30%", left:"70%"}} text="Design Patterns" />
            <Card style={{transform: "rotate(-45deg)", top:"55%", left:"0%"}} text="Design Principles" />
            <Card style={{transform: "rotate(20deg)", top:"10%", left:"38%"}} text="SRP" />
            <Card style={{transform: "rotate(30deg)", top:"70%", left:"70%"}} image={`${BASE_URL}assets/logos/csharp-pink.png`} />
            <Card style={{transform: "rotate(-45deg)", top:"70%", left:"25%"}} image={`${BASE_URL}assets/logos/dotnet-pink.png`} />
            <Card style={{transform: "rotate(-45deg)", top:"5%", left:"10%"}} image={`${BASE_URL}assets/logos/blazor-pink.png`} />
            
            </div> 
       
        </div>

        {/*Grid 3*/}
        <div className="grid-black-color grid-3 h-[11.5rem] md:h-[11.5rem] relative overflow-hidden flex items-center justify-center group">
          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
            <img 
              src={`${BASE_URL}assets/logos/react.svg`}
              alt="React" 
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity translate-x-4 translate-y-4">
            <img 
              src={`${BASE_URL}assets/logos/javascript.svg`}
              alt="JavaScript" 
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <p className="text-center text-neutral-300 text-sm md:text-base relative z-10 font-medium">
            AI & ML<br/>Enthusiast
          </p>
        </div>

        {/*Grid 4*/}
        <div className="grid-special-color grid-4 relative overflow-hidden flex items-center justify-center group">
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-40 transition-opacity">
            <img 
              src={`${BASE_URL}assets/logos/tailwindcss.svg`}
              alt="Tailwind CSS" 
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity -translate-x-4 -translate-y-4">
            <img 
              src={`${BASE_URL}assets/logos/html5.svg`}
              alt="HTML5" 
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity translate-x-4 translate-y-4">
            <img 
              src={`${BASE_URL}assets/logos/css3.svg`}
              alt="CSS3" 
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <p className="text-center text-white text-sm md:text-base font-medium relative z-10">
            Web Development
          </p>
        </div>

        {/*Grid 5*/}
        <div className="grid-default-color grid-5 relative overflow-hidden flex items-center justify-center group">
          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
            <img 
              src={`${BASE_URL}assets/logos/github.svg`}
              alt="GitHub" 
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-25 transition-opacity -translate-x-6 translate-y-6">
            <img 
              src={`${BASE_URL}assets/logos/git.svg`}
              alt="Git" 
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-25 transition-opacity translate-x-6 -translate-y-6">
            <img 
              src={`${BASE_URL}assets/logos/vitejs.svg`}
              alt="Vite" 
              className="w-14 h-14 md:w-18 md:h-18"
            />
          </div>
          <p className="text-center text-neutral-300 text-sm md:text-base relative z-10 font-medium">
            Data Processing &<br/>Machine Learning
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
