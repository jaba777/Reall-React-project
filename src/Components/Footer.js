import React from 'react'
import './Footer.css';
import Imageicon from '../images/365.png'

const Footer = () => {
  return (
    <footer className='footer'>
     <section className='footer-container'>
     <div className='footer-box footer-image'>
    <img src={Imageicon} alt="365" />
    <br />
    <br />
    365DropShip is a wholesale drop shipping business that provides products and order fulfillment.
     </div>

    <div className='footer-box footer-list'>
     <ul>
         <li className='bold-list'>DROPSHIP PRODUCTS</li>
         <li>Home & Design</li>
         <li>Fashion</li>
         <li>Jewelry</li>
         <li>Beauty</li>
     </ul>
    </div>

    <div className='footer-box footer-list'>
            <ul>
                <li className='bold-list'>ABOUT</li>
                <li>Dropship Suppliers</li>
                <li>Company</li>
                <li>Pricing</li>
                <li>Contact Us</li>
            </ul>
    </div>

    <div className='footer-box footer-list'>
            <ul>
                <li className='bold-list'>SUPPORT</li>
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                
            </ul>
    </div>

     </section>
     <div className='footer-center'>
        <span>© copyright 365Dropship. All Rights Reserved.</span>
    </div>

    </footer>
  )
}

export default Footer
