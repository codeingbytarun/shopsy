import React from 'react'
import './Footer.css'
import footer_logo from '../Asstets/logo.png'
import instgram_logo from '../Asstets/instagram_icon.png'
import pintester_icon from '../Asstets/pintester_icon.png'
import whatsapp_icon from '../Asstets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className=''>
        <div className='footer'>
            <div className='footer-logo d-flex justify-content-center mb-4'>
                <img src={footer_logo} alt="" />
                <h2 className='mt-2 ms-2 text-secondary-emphasis'>SHOPPER</h2>
            </div>
            <ul className='footer_links d-flex justify-content-center' >
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer_social_icon d-flex justify-content-center'>
                <div className='footer-icon-container m-3 '>
                    <img src={instgram_logo} alt="" />
                </div>
                <div className='footer-icon-container m-3'>
                    <img src={pintester_icon} alt="" />
                </div>
                <div className='footer-icon-container m-3'>
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className='footer-copyright'>
                <hr />
                <p>Copyright @ 2023 - All Right Reserved. </p>
            </div>
        </div>
    </div>
  )
}

export default Footer