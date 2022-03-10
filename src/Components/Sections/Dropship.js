import React from 'react'
import './Dropship.css';
import Producticonbox from './SectionBoxes/Producticonbox';

const Dropship = () => {
  return (
    <section className='dropship'>
      <h1>DROPSHIP PRODUCT FEATURES</h1>
        <div className='product-icons'>
        <div className='product-icon selected'>
        <img src="https://www.365dropship.com/wp-content/uploads/2020/06/1-1.svg" alt="icon" />
        <p>Advanced Ul</p>
      </div>

      <Producticonbox image={'https://www.365dropship.com/wp-content/uploads/2020/06/6-1.svg'} text='Activity Dashboard' />
      <Producticonbox image={'https://www.365dropship.com/wp-content/uploads/2020/06/2-1.svg'} text='Products sync' />
      <Producticonbox image={'https://www.365dropship.com/wp-content/uploads/2020/06/3-1.svg'} text='Transaction board' />
      <Producticonbox image={'https://www.365dropship.com/wp-content/uploads/2020/06/4-1.svg'} text='Supply & support' />
      <Producticonbox image={'https://www.365dropship.com/wp-content/uploads/2020/06/5-1.svg'} text='Account setup' />
     </div>

     <div className='product-title'>
            <div id="container">
                <div className='title-image'>
                   <img src="https://www.365dropship.com/wp-content/uploads/2020/06/4-1536x863.jpg" alt="picture" />
                </div>
                <button className='left'><i class="fas fa-chevron-left"></i></button>
                <button className='right'> <i class="fas fa-chevron-right"></i></button>
            </div>

            <div id="box-container">
                <h3 id="box-title">Advanced UI</h3>
                <p id="box-text1">In the 365DROPSHIP platform you’ll find the most user-friendly UI enabling easy product search, inventory management, and order placement.</p>
                <p id="box-text2">Our User Interface is simple and sophisticated at the same time. Using a modern product search system, you can find anything you need in seconds.</p>
                <p id="box-text3">Here you can easily manage your inventory and place the desired orders. The interface is adjusted to your needs and designed so that everything is straightforward from your first click. Our advanced user interface saves your time and allows you to easily surf through the dropship platform features.</p>
                
                
            </div>
            
        </div>

        <div id="porto-btn">
            <span>GET STARTED</span>
        </div>

    </section>
      
  )
}

export default Dropship
