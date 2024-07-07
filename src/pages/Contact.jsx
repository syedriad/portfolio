import React from 'react';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';


  






const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sfss0eo', 'template_ug0phv5', form.current, {
        publicKey: 'yF6NCUrLZ71mr4J8_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  
    } 

  return (
    <div  id='contact' className='mt-32'>
            <h1 className='text-center text-2xl sm:text-4xl  text-blue-600 font-semibold mb-24'>CONTACT ME</h1>

    <div className="w-4/5 mx-auto my-10 p-10 bg-gray-900 text-white shadow-md rounded-lg flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-5">
        <h2 className="text-3xl font-bold mb-4"   style={{ color: 'gray' }}>Let's talk</h2>
        <p className="mb-4">
          Im currently available for any job role related to Web Developement. Contact me through my Email & via my WhatsApp.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 2h16c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4zM8 11h8v2H8zm-3 4h14v2H5zm0-8h14v2H5z"/>
            </svg>
            <span>imriad55@gmail.com</span>
          </div>
          <div className="flex items-center">
            
            <span> WhatsApp: 03182864471</span>
          </div>
          
        </div>
      </div>

      <div className="w-full md:w-1/2 p-5">
        <form className="space-y-6"  ref={form} onSubmit={sendEmail} >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Your Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="to_name"
                id="name"
                className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Your Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="from_name"
                id="email"
                className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Write your message here
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contact;
