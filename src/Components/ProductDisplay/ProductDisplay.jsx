import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Asstets/star_icon.png'
import star_dull_icon from '../Asstets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className='productdisplay-img'>
                <img  className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className='productdisplay-right '>
            <h1 className='text-start'>{product.name}</h1>
            <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
          
            </div>
            <div className="productdisplay-right-prices text-start ">
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-price-new '>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description text-start'>
                A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt an undershit or outer garment.
            </div>
            <div className="productdisplay-right-size text-start">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size d-flex mb-3">
                    <div className='size'>S</div>
                    <div className='size'>M</div>
                    <div className='size'>L</div>
                    <div className='size'>XL</div>
                    <div className='size'>XXl</div>
                </div>
            </div>
            <button type="button" class="btn btn-primary w-25" onClick={()=>{addToCart(product.id)}}>Add to cart</button>
            <p className='productdisplay-right-category text-start mt-4 '><span>Category :</span> Women , T-shirt,Crop Top
            <br /><br /><span>Tags :</span>Modern, Latest</p>
            
        </div>
    </div>
  )
}

export default ProductDisplay