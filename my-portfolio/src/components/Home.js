import React from 'react'
import "./Home.css"
import jars from '../assets/jars.gif'

function Home() {
  
  return (
    <div className='home' id ="home">
    <img src={jars} className="main_img" alt="" /> 
   <h2>Diana's page</h2>
    </div>

  )
}

export default Home