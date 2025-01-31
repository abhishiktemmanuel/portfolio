'use client'
import Image from 'next/image';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import hero from '../../../../public/images/hero.png';

const HeroCircle = () => (
  <div className='rounded-full bg-[#181818] w-[30vw] h-[30vw] max-w-[360px] max-h-[360px] relative'>
    <Image 
      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      src={hero}
      alt="hero"
      width={280}
      height={280}
      priority
    />
  </div>
);




const GridSection = () => {
  const content = [
    {
      title: "About Me",
      description: "I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript react redux node.js express HTMLCSS and get I am a quick learner, and I am always looking to expand my knowledge and skill set. I am a team player, and I am excited to work with others to create amazing applications.",
      content: <HeroCircle/>
    },
    {
      title: "Christ (Deemed to be University)",
      degree: "Bachelor of Science",
      year: "2021-2024",
      description: "Triple Major in Computer Science, Mathematics and Statistics",
      location: "Bengaluru, India",
      content: <HeroCircle/>
    },
    {
      title: "Methodist High School",
      degree: "Indian School Certificate",
      year: "2020",
      description: "Science stream with Computer Science",
      location: "Kanpur, India",
      content: <HeroCircle/>
    },
    {
      title: "Methodist High School",
      degree: "Indian Certificate of Secondary Education",
      year: "2018",
      description: "Science stream with Computer Science",
      location: "Kanpur, India",
      content: <HeroCircle/>
    }
  ];

  return (
    <StickyScroll 
        content={content} 
        contentClassName="bg-white/10 backdrop-blur-sm sticky-element"
      />
  );
};


export default GridSection;







// 'use client'

// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';
// import Education from './Education';
// import hero from '../../../../public/images/hero.png';



// const paragraph = "I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript react redux node.js express HTMLCSS and get I am a quick learner, and I am always looking to expand my knowledge and skill set. I am a team player, and I am excited to work with others to create amazing applications.";

// const GridSection = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <div className="pt-20 h-screen overflow-y-auto">
//       <div className="flex">
//         {/* Fixed Left section */}
//         <div className="hidden md:block md:w-1/2 md:p-8 md:sticky md:top-0 md:h-screen">
//           <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[360px] lg:h-[360px] relative'>
//             <Image 
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               src={hero}
//               alt="hero"
//               width={300}
//               height={300}
//               priority
//             />
//           </div>
//         </div>

 
//         {/* Right section */}
//         <div className="w-full md:w-1/2 p-8">
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold text-white/100">
//               About Me
//             </h2>
//             <p className="text-lg text-white/100">
//               {paragraph}
//             </p>
//             <Education />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GridSection;
