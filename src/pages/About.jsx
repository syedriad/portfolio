import React from 'react';
import SocialLinks from '../SocialLinks.jsx';

function About() {
  return (
    <div id='abbout' className='mt-16 '>
      <h1 className='text-center text-2xl sm:text-4xl font-semibold text-blue-600 ' >ABOUT ME</h1>
      <div className='flex flex-col sm:flex-row justify-between px-4 sm:px-10 m-6 items-center mt-28'>
        <div className='w-full sm:w-1/2 mb-8 sm:mb-0'>
          <h2></h2>
          <SocialLinks />
        </div>
        <div className='w-full sm:w-1/2 text-lg sm:text-xl'>
          My name is Muhammad Riad, an enthusiastic Computer Science (BSCS) Undergraduate at the University of Karachi, dept. UBIT. I specialize in Web Development skills using modern web technologies. I'm proficient in problem-solving and I thrive in collaborative environments. I'm passionate about continuous learning and innovation in web development.
        </div>
      </div>
    </div>
  );
}

export default About;
