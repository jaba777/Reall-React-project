import React from 'react'
import './SlideImage.css';
import secondlogo from '../images/hero-1.jpg';

const SlideImage = () => {
  return (
    <div className='slide-image'>
    
    <div className='container'>
            <div className='image-title'>
                <img src={secondlogo} alt="photo2" />
            </div>
          
        </div>

        <div className='wrapper'>
            <div className='WrapContent'>
                <img src="https://www.365dropship.com/wp-content/uploads/2020/06/356Logo.svg" alt="" />
                <div className='h4'>
                    <h4>WE GOT YOUR SUPPLY CHAIN COVERED</h4>
                    <h4>365 DAYS A YEAR!</h4>
                </div>
            </div> 
            <span>SIGN UP NOW</span>
        </div>

      
    </div>
  )
}

export default SlideImage
