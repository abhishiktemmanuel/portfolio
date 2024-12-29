'use client'

import { TypeAnimation } from 'react-type-animation';

const TypeAnimationComponent = ({ 
  strings, 
  delay = 1400, 
  speed = 40,
  className = "" // Tailwind classes
}) => {
  const sequence = strings.reduce((acc, str) => [...acc, str, delay], []);

  return (
    <div className={className}> {/* Wrapper div with Tailwind classes */}
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={speed}
        style={{ display: 'inline-block' }} // Keep essential styles
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeAnimationComponent;



// Usage example:
// const strings = [
//   'We produce food for Mice',
//   'We produce food for Hamsters',
//   'We produce food for Guinea Pigs',
//   'We produce food for Chinchillas'
// ];
// <TypeAnimationComponent strings={strings}className="text-4xl inline-block font-bold text-blue-500" />
