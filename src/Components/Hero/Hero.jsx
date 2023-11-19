import React from 'react'
import './Hero.css'
import hand_icon from '../Asstets/hand_icon.png'
import arrow_icon from '../Asstets/arrow.png'
import hero_image from '../Asstets/hero_image.png'
export const Hero = () => {
  return (
    <div>
       <div className='Hero'>
        <div className='Hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='Hero-hand-icon'>
                <p>&nbsp;&nbsp;new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>&nbsp;&nbsp;collections</p>
            <p>&nbsp;&nbsp;for everyone</p>
        </div>
        
        <div className='Hero-latest-btn btn-outline-danger'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
        <div className='Hero-right'>
            <img src={hero_image} alt="" />
        </div>
       </div>
    </div>
  )
}
