import React from 'react'
import "./Contact.css"
import images from "../images"
import cv from "../assets/cv.pdf"



function Contact() {
  const followLink = event => {
    console.log(event.currentTarget);
  }
    return (
      <div id= "contact">

        <h1>Contact Me</h1>
        <div className='icons'>

        <a href="https://www.linkedin.com/in/diana-amralina-689142191/"><img src={images.linkedin} alt=""></img></a>

          <a href="https://www.instagram.com/di.kooooo/"><img src={images.insta} alt=""></img></a>

          <img onClick={() => window.location = 'mailto:Amralina.Diana@gmail.com'} src={images.gmail} alt=""></img>

          <a href={cv}><img src={images.cv} alt=""></img></a>

        </div>
      </div>
  )}

export default Contact