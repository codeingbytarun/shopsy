import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Asstets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} =useContext(ShopContext)
  return (
    <div className='cartitems pb-2 '>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p className='me-5'>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Totel</p>
            <p>Remove</p>
        </div>
        <hr />
       {all_product.map((e)=>{
            if(cartItems[e.id]>0){ 
                return  <div>
                            <div className="cartitems-format cartitems-format-main mb-5 text-start">
                                <img src={e.image} alt="" className='carticon-product-icon'/>
                                <p className=''>{e.name}</p>
                                <p className='ms-5 ps-2'>${e.new_price}</p>
                                <button className='cartitems-quantity  '>{cartItems[e.id]}</button>
                                <p className='ms-5 ps-3'>${e.new_price*cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
            } 
            return null;
       })}
       <div className='cartitems-down text-start pt-5 '>
        <div className='cartitems-total'>
            <h1>Cart Total</h1>
           < div className='cartitems-promocode'>
                <p>If you have a promo code , Enter it here</p>
                <div className='cartitems-promobox'>
                    <div className="input-group mb-3 w-25">
                    <input type="text" className="form-control " placeholder="promo code" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-secondary" type="button" id="button-addon2">Submit</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='cartitems-total-item'>
                    <p>Subtotal</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${getTotalCartAmount()}</p>
                </div>
                
                <hr className='w-50'/>
                <div className='cartitems-total-item mb-1'>
                    <p>Shipping Fee</p>
                    <h className='Size'>Free</h>

                </div>

                <hr className='w-50'/>
                <div className='cartitems-total-item'>
                    <h3>Total</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;${getTotalCartAmount()}</h3>
                </div>
                <button type="button" class="btn btn-info">PROCEED TO CHECKOUT</button>
            </div>
            
        </div>
       </div>
    </div>
  )
}

export default CartItems