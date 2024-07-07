import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile2 from "../images/profile2.jpg"
import resume from "../assets/RiadResume.pdf"


function Home() {
  return (
    
    <div>


    <header className="flex flex-col items-center justify-center min-h-screen text-white p-6">
      
      <img
        src="https://via.placeholder.com/150?text=Profile" // Replace with your image URL
        alt="Profile"
        className="rounded-full hidden sm:block bg-cover w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-6"
      />
      <p className="sm:text-xl text-md text-center">
        Hello, I'm 
        
      </p>
      <h1 className="sm:text-5xl text-3xl text-center mt-4">
        Muhammad Riad
      </h1>
      <h1 className="sm:text-xl text-md sm:font-semibold  text-center mt-4">
         FRONTEND DEVELOPER
      </h1>
      <div className="flex space-x-4 mt-8">
        <AnchorLink offset={50} href='#contact'  className=" text-blue-300 cursor-pointer py-1 sm:py-2 px-2 sm:px-4 hover:bg-gray-300 hover:text-black rounded-lg border-blue-400 sm:text-lg text-sm border-2"
        > 
          Connect With me
        {/* <a
          href=''
          to="/contact"
          className=" text-blue-300 cursor-pointer py-1 sm:py-2 px-2 sm:px-4 hover:bg-gray-300 hover:text-black rounded-lg border-blue-400 sm:text-lg text-sm border-2"
        >
          Connect with me
        </a> */}
        </AnchorLink>
        <a
          href={resume}
          download='resume'
          to="/resume"
          className=" text-black bg-blue-300 cursor-pointer hover:bg-gray-300  py-1 sm:py-2 px-2 sm:px-4 rounded-lg border-blue-400 sm:text-lg text-sm border-2"        >
          My resume
        </a>
      </div>
    </header>
  
    </div>
  );
}




export default Home