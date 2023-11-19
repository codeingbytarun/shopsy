import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox m-5 p-5'>
        <div className="descriptionbox-navigator d-flex g-5">
            <div className="descriptionbox-nav-box-des text-start  ">Description</div>
            <div className="descriptionbox-nav-box text-start">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description p-2 ">
            <p className='text-start mt-4 ms-4'>
                An e-commerce website is an online platfrom that facilitates the buying ans selling of product or services over the internet. 
                it serves as a virtual marketplace where business and individuals can showcase their product,intract with customers, and conduct
                 transations without the need for a physical presence. E-commerce website have gained immense popularity die to thier convenience, accessibility,
                and the global reach they offer.
            </p>
            <p className='text-start pb-4 ms-4'>
                E-commerce website typcally display product or services along with detailed description,images,price,and any available variatios(e.g.sizes,colors).Each product usually has its own dedicated page with relevant information.
            </p>
        </div>
    </div>
  )
}
