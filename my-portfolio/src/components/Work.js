import React from 'react'
import  "./Work.css"
import images from "../images"


function Work() {

  return (
    <div className='work'id="work">
      <h1>Work</h1>

      <div className='vid-anim'>
      <div className='animations'>
     
      <video autoPlay loop muted width="720" height="480"  controls>
      <source src={images.anim} type="video/mp4"/>
      </video>

      </div>


    <div className='videos'>


    <video autoPlay loop muted width="720" height="480" controls>
      <source src={images.video} type="video/mp4"/>
      </video>

    </div>
</div>

      <div className='websites'>
      <h3>Websites and Design</h3>  
      <div className='website-content'> 
      <img src={images.web} alt=""></img>
      <img src={images.banner} alt=""></img>
      </div>

      </div>


      <h3>Games</h3>
      <div className='games'>

      <video autoPlay loop muted width="1280" height="720"  controls>

      <source src={images.games} type="video/mp4"/>
      </video>
      </div>

    </div>
  )}

export default Work