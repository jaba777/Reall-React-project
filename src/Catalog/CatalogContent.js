import React from 'react'
import './CatalogContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStoreAlt, faQuestion } from '@fortawesome/free-solid-svg-icons';
import IconLogo from '../Catalog/Menu image/search.jpg'



const CatalogContent = () => {
  return (
    <div className='CatalogContent'>
      
      <div className='Catalog-searches'>
          <div className='Catalog-search'>
          <button className='selectBtn'>SELECT ALL</button>
          <p>selected 0 out of 0 products</p> 
           <form>
            <input type="text" id="html" name="fav_language" placeholder='search'/>

            <label for="html"> <img src={IconLogo} /> </label>
            </form>
            <div>
            <button className='selectBtn Inventory'>ADD TO INVENTORY</button>
            <span><FontAwesomeIcon icon={faQuestion}/></span>
            </div>
          
          </div>

          <form action="/action_page.php">
          <label for="cars">Sort By:</label>
          <select name="cars" id="cars">
          <option value="New Arrivals">New Arrivals</option>
          <option value="High To Low">Price: High To Low</option>
          <option value="Alphabetic">Price: Alphabetic</option>
          <option value="non Alphabetic">Price: Non-Alphabetic</option>
          </select>
        </form>
         
      </div>

      
    </div>
  )
}

export default CatalogContent
