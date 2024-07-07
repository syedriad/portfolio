// src/components/Skills.jsx

import React from 'react';

const frontendSkills = [
  { skill: 'HTML5', },
  { skill: 'CSS3', },
  { skill: 'Bootstrap5', },
  { skill: 'Tailwind CSS', },
  { skill: 'JavaScript', },
  { skill: 'React JS', },
  { skill: 'Next JS', },
  { skill: 'Java', },
];

const backendSkills = [
  { skill: 'Node JS',  },
  { skill: 'Express JS',  },
  { skill: 'Mongo DB',  },
  { skill: 'Git',  },
  { skill: 'GitHub',  },
  { skills: 'Responsive Design'},
  { skill: 'Problem Solving'},
  { skill: 'Team Collaboration'},
];

const Skills = () => {
  return (
    <div  id='skills' className='mt-32'>
      <h1 className='text-center text-2xl sm:text-4xl  text-blue-600 font-semibold mb-18'>MY SKILLS</h1>
      <div className='flex flex-col sm:flex-row justify-between px-4 sm:px-10 m-6 items-center mt-12'>
        <div className='w-full sm:w-1/2  text-lg sm:text-xl'>

          <ul className='flex flex-col items-center ' >
          <h2 className='font-mono text-black bg-gray-600 rounded px-2 py-1 mb-10 mt-10 ' > Development Skills </h2>

              {frontendSkills.map((item, indx)=>(
                  <li key={indx} className='cursor-pointer hover:text-blue-400 '  >
                    <p> {item.skill} </p>
                  </li>
              ))}
          </ul>
         
          
        </div>
        <div className='w-full sm:w-1/2 text-lg sm:text-xl'>

              <ul className='flex flex-col items-center' >
              <h1 className='font-mono text-black bg-gray-600 rounded px-2 py-1 mb-10 mt-10 ' >Backend & Other Skills</h1>
                {backendSkills.map((item, indx)=> (
                    <li key={indx}  className='cursor-pointer hover:text-blue-400 ' >
                      <p>
                        {item.skill}
                      </p>
                    </li>
                ))}
              </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
