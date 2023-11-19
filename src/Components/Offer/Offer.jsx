import React from 'react'
import './Offer.css'
import exclusive_image from '../Asstets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offers'>
        <div className='offer-left pt-5 mt-5'>
            <h1>Exclusive</h1>
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Offers for you</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ONLY ON BEST SELLERS PRODUCT</p>
            <button type="button" class="btn btn-outline-success me-5
            ">Check Now</button>
        </div>
        <div className='offer-right'>
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offer