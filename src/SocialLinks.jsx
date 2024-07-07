// src/components/SocialLinks.js

import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <a
        href="https://www.linkedin.com/in/muhammad-riad-a15387276/"
        
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        <FaLinkedin size={40} />
      </a>
      <a
        href="https://github.com/syedriad"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-600 transition-colors duration-300"
      >
        <FaGithub size={40} />
      </a>
      <a
        href="https://www.facebook.com/muhammad.riad.528/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-800 hover:text-blue-600 transition-colors duration-300"
      >
        <FaFacebook size={40} />
      </a>
    </div>
  );
};

export default SocialLinks;
