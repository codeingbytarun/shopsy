import React, { useContext, useState } from 'react'
import logo from '../Asstets/logo.png'
import './NavBar.css'
import cart from '../Asstets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const NavBar = () => {
    const [menu,setMenu] = useState('shop');
    const {getTotalCartItem}=useContext(ShopContext);
  return (
    <div className='border-bottom border-dark-subtle'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ps-5 pe-5 m-2">
  <div className="container-fluid">
    <img src={logo}></img>
    <li className="nav-item " style={{listStyle:'none'}}   onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none '}} className='text-danger fs-2' to='/'>SHOPSY</Link></li>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mt-2 ps-5 ms-5">
        <li className="nav-item "    onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none '}} className='text-secondary' to='/'>SHOP</Link>{menu=== "shop"?<hr/>:<></>}</li>
        <li className="nav-item ps-5"onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none '}} className='text-secondary' to='/mens'>MEN</Link>{menu=== "mens"?<hr/>:<></>}</li>
        <li className="nav-item ps-5"onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none '}} className='text-secondary' to='/womens'>WOMEN</Link>{menu=== "womens"?<hr/>:<></>}</li>
        <li className="nav-item ps-5"onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none '}} className='text-secondary' to='/kids'>KIDS</Link>{menu=== "kids"?<hr/>:<></>}</li>
      </ul>
     <Link to='/login'> <button type="button" className="btn btn-outline-danger  rounded-pill ">LOGIN</button></Link>

     <Link to='/cart'> <button type="button" class="btn btn-light position-relative me-5"> <img src={cart}></img>
  <span class="position-absolute top-0 start-95 translate-middle badge rounded-pill bg-danger mt-2">
   {getTotalCartItem()}
    <span class="visually-hidden">unread messages</span>
  </span>
</button></Link>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar