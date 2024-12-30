'use client'

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Education from './Education';
// import dynamic from 'next/dynamic'

// const Spline = dynamic(() => import('@splinetool/react-spline'), {
//   ssr: false,
//   loading: () => <div>Loading...</div>
// })


const paragraph = "I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript react redux node.js express HTMLCSS and get I am a quick learner, and I am always looking to expand my knowledge and skill set. I am a team player, and I am excited to work with others to create amazing applications.";

const GridSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="pt-20 h-screen overflow-y-auto">
      <div className="flex">
        {/* Fixed Left section */}
        <div className="w-1/2 p-8 hidden md:block sticky top-0 h-screen">
          {/* <div className={`relative h-full transform transition-transform duration-700 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <Image
              src="/your-image.jpg"
              alt="Description"
              width={1200}
              height={800}
              priority
              className="object-cover rounded-lg h-full w-full"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
              sizes="50vw"
            />

          </div> */}
          <div className="relative h-[calc(100%-60px)] overflow-y-hidden overflow-x-visible">
            <div className="absolute inset-0 h-[calc(100%+60px)]">
              {/* <Spline scene="https://prod.spline.design/8p5ZY0Vwjik7wqs7/scene.splinecode" /> */}
            </div>
          </div>
        </div>
 
        {/* Right section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white/100">
              About Me
            </h2>
            <p className="text-lg text-white/100">
              {paragraph}
            </p>
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
