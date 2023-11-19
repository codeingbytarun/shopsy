import React from 'react'
import './NewsLatter.css'
const NewsLatter = () => {
  return (
    <div>
        <div className='newslatter_bg'>
            <h1 className='mt-5 fw-bolder'>Get Exclusive Offers On Your Email</h1>
            <h6 className='text-secondary mt-2'>Subsceibe to the our newsletter and stay updated</h6>
            <div>
            <input  type="search" placeholder="Your Email id"/>
            <button type="button " className='btn btn-danger '>Subscribe</button>
            </div>
        </div>
    
    </div>
  )
}

export default NewsLatter