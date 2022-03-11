import React from 'react'
import './Header.css'
import  picture from '../Catalog/Menu image/Profilepicture.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faListUl,
  faCube,
  faCheckSquare,
  faArrowsAltH,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import MenuLogo from '../Catalog/Menu image/dropship_logo.png';

const Header = () => {
  return (
    <div className='Header'>
        <div className='image'>
        <img src={MenuLogo} alt="365" />   
        </div>
        <div className='menu'>
         <div className='profile-image'>
           <img src={picture} alt="picture" />  
         </div>    
        </div>

        <div className='icons-menu'>
            <ul className='icons'>
             <li><FontAwesomeIcon icon={faTachometerAlt} /></li>
             <li className='purple'><FontAwesomeIcon icon={faListUl} /></li>
             <li><FontAwesomeIcon icon={faCube} /></li>
             <li><FontAwesomeIcon icon={faCheckSquare} /></li>
             <li><FontAwesomeIcon icon={faArrowsAltH} /></li>
             <li><FontAwesomeIcon icon={faClipboardList} /></li>
            </ul>
        </div>
      
    </div>
    
  )
}

export default Header
