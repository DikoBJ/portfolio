import React from 'react'
import './NavBar.css';
import {HashLink} from "react-router-hash-link"


function NavBar() {
  return (

    <nav className='app__navbar '>
    <ul className='app_navbar_links'>
      <li className='p__opensans'>
        <HashLink to ="#home" smooth >About</HashLink>
      </li>
      <li className='p__opensans'>
      <HashLink to ="#work" smooth >Work</HashLink>
      </li>
      <li className='p__opensans'>
      <HashLink to ="#contact" smooth >Contact</HashLink>
      </li>

    </ul>
  </nav>

  )
}

export default NavBar