import React from 'react'
import './Header.css';
import firstlogo from '../images/365.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCediSign} from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return (
   <header className='header'>
       <div className='header-main'>
            <div className='image'>
                <img src={firstlogo} alt="photo" />
            </div>
            <div className='header-right'>
                <ul className='menu'>
                    <li>ABOUT</li>
                    <li>CATALOG</li>
                    <li>PRICING</li>
                    <li>SUPPLIERS</li>
                    <li>CENTER</li>
                    <li>BLOG</li>
                    <li className='sing-up'>SIGN UP NOW</li>
                    <li className='login'>LOGIN</li>
                    </ul>
                    <span className='fb-icon'><FontAwesomeIcon icon={faCediSign} /></span>
                    <button className='menu-icon'><i class="fas fa-bars"></i></button>
            </div>
           
        </div>
   </header>
  )
}

export default Header
