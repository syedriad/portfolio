import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      {/* Desktop Menu */}
      <div className="sm:flex sm:justify-center sm:items-center hidden sm:block">
        <ul className="text-center cursor-pointer  p-4 space-x-6 text-2xl sm:flex sm:justify-center sm:items-center hidden sm:block ">
          <AnchorLink   offset={50} href='#home'  >
              <li to="/"  id='about' className="nav-link">Home</li> 
          </AnchorLink>
          <AnchorLink    offset={50} href='#abbout'   >

             <li to="/about" className="nav-link">About</li>
          </AnchorLink>
          <AnchorLink     offset={50}  href='#skills'  >
             <li to="/skills" className="nav-link">Skills</li>
          </AnchorLink>
          <AnchorLink      offset={50} href='#projects'  >
             <li to="/projects" className="nav-link">Projects</li>
          </AnchorLink>
          <AnchorLink        offset={50} href='#contact' >
             <li to="/contact" className="nav-link">Contact</li>
          </AnchorLink>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex justify-between items-center p-4">
        <div className="text-2xl">My Portfolio</div>
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>

      {menuOpen && (
        <ul className="sm:hidden flex justify-center items-center flex-col p-4 space-x-6 text-lg">
         <AnchorLink offset={50} href='#home'> <li to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</li></AnchorLink>
         <AnchorLink offset={50} href='#abbout'> <li to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</li></AnchorLink>
         <AnchorLink offset={50} href='#skills'> <li to="/skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</li></AnchorLink>
         <AnchorLink offset={50} href='#projects'> <li to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</li></AnchorLink>
         <AnchorLink offset={50} href='#contact'> <li to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</li></AnchorLink>
        </ul>
      )}
    </div>
  )
}

export default Navbar
