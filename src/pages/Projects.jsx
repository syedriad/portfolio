import React from 'react'

import pizza from "../images/pizza.png"
import expense from "../images/expense.png"
import tech from "../images/tech.png"
import nikee from "../images/nikee.png"
import todo from "../images/todo.png"
import movie from "../images/movie.png"


const projectsData = [
  {
    p_id : 1,
    p_image: pizza,
    p_name: "React Pizza Website",
    p_live: "https://pizza-jsreact.netlify.app/",
    p_github: "https://github.com/syedriad/pizzawebs"

  },
 
  {
    p_id : 2,
    p_image: expense,
    p_name: "Firebase ExpenseTracker",
    p_live: "https://expensereact-8cc4b.firebaseapp.com/expense-tracker",
    p_github: "https://github.com/syedriad/expense-react-firebase"

  },
 
  {
    p_id : 3,
    p_image: tech,
    p_name: "Shopping Cart Ecommerce",
    p_live: "https://techshopcart-react.netlify.app/",
    p_github: "https://github.com/syedriad/ShopCart"

  },
 
  {
    p_id : 4,
    p_image: nikee,
    p_name: "React Nike Website",
    p_live: "https://nike-rjs.netlify.app/",
    p_github: "https://github.com/syedriad/simpleUi"

  },
 
  {
    p_id : 5,
    p_image: todo,
    p_name: "React Todo App",
    p_live: "https://todo-react-v.netlify.app/",
    p_github: "https://github.com/syedriad"

  },
 
  {
    p_id : 6,
    p_image: movie,
    p_name: "React Movie Website",
    p_live: "https://mymovie-react.netlify.app/",
    p_github: "https://github.com/syedriad/MovieApp"

  },
 
]

function Projects() {
  return (
    <div  id='projects' className=' w-5/6  mx-auto mt-32 ' >
            <h1 className='text-center text-2xl sm:text-4xl font-semibold text-blue-600 mb-16' >MY PORTFOLIO</h1>


        <div className=' w-full grid sm:grid-cols-3 grid-cols-1 p-6 gap-10' >
          
          { projectsData.map((pro, indx)=> (
              // <p> <img src={pro.p_image} alt="" /> </p>
              <div className=' w-full flex flex-col justify-center rounded-xl items-center item border border-blue-400 p-4 sm:p-5  ' >
                <img className='sm:h-48 h-32 sm:w-3/4 w-full sm:w-5/6 border rounded-xl bg-center bg-no-repeat bg-cover '  src={pro.p_image} alt="" />
                <p className='mt-2 text-md sm:text-xl font-semibold font' > {pro.p_name} </p>

                <div className='mt-4 sm:space-x-3 space-x-1 font-semibold font-mono ' >
                  <button className='sm:px-2 px-1 py-1 bg-blue-300 text-black rounded text-sm sm:text-md'  > <a href={pro.p_live} target="_blank" rel="noopener noreferrer" >Live Demo</a> </button>
                  <button className='sm:px-2 px-1 py-1 bg-blue-300 text-black rounded text-sm sm:text-md  ' > <a href={pro.p_github} target="_blank" rel="noopener noreferrer" >Github</a> </button>
                </div>
              </div>

          )) }
        </div>
        

    </div>
  )
}

export default Projects