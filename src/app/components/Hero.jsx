import React from 'react'
import Image from 'next/image'
import TypeAnimationComponent from './TypeAnimation' 
import SplineComponent from './ui/SplineComponent'

const strings = [
    'Abhishikt',
    'Web Developer',
    'Ui/Ux Designer'
  ]

  const handleDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=1PhNzoe_wNWTihrr8fTV6qAIdT5RKoUnK', '_blank');
  };
  
function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center">
    <div className="container mx-auto px-4 md:px-6">
      <div className="py-24 md:py-32 flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12">
        {/* Text Column */}
        <div className="lg:col-span-7 place-self-center text-center lg:text-left space-y-6">
          <h1 className="bg-custom-gradient-2 text-transparent bg-clip-text text-4xl lg:text-6xl font-extrabold">
            Hello, I'm
          </h1>
          <div>
            <TypeAnimationComponent 
              strings={strings} 
              className='text-3xl inline-block font-bold text-white lg:text-6xl'
            />
          </div>
          <p className="text-[#e2e2e2] text-base lg:text-xl max-w-2xl mx-auto lg:mx-0">
          When I'm not crafting pixel-perfect interfaces or optimizing user experiences, you'll find me exploring new technologies and pushing the boundaries of what's possible on the web. I believe in writing clean, efficient code that makes a difference.          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView()}
            className="bg-[#ffffff] hover:bg-[#dadada] text-black px-6 py-2 rounded-full font-semibold"
          >
            Contact
          </button>

          <button 
            onClick={handleDownload}
            className="bg-[#181818] hover:bg-[#292929] text-white px-6 py-2 rounded-full font-semibold border border-white"
          >
            Download CV
          </button>

          </div>
        </div>
        
        {/* Image Column */}
        <div className='lg:col-span-5 '>
          <SplineComponent />
        </div>

      </div>
    </div>
  </section>
  




  )
}

export default Hero