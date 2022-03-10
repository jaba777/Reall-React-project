import React from 'react'
import BoxBenefit from './SectionBoxes/BoxBenefit'
import './Benefits.css'

const Benefits = () => {
    
  return (
    <section className='benefits'>
        <h1>BENEFITS</h1>
        <p>Easily sync dropship products into your online shop.</p>
        <p>Manage your process manually or automatically, exporting all product details</p>  
        <div className='benefit-container'>

        <div className='benefit-boxes'>
        <BoxBenefit title="Only one point of contact" text="365DROPSHIP will take care of the supply chain, no need to talk to hundreds of different suppliers, just choose the products and we will take care of the rest!" />
        <BoxBenefit title="Unique international suppliers" text="365DROPSHIP experienced team works only with trusted and secured suppliers chosen from all over the world! Every Supplier at 365DROPSHIP is certified" />
        <BoxBenefit title="Profit %" text="365DROPSHIP understands the business of dropshipping to its core and knows the value of a good deal." text2="In 365DROPSHIP catalog you will find great products with the best profit margins available!" />
        <BoxBenefit title="Most advanced UI" text="The 365DROPSHIP platform has been around for a while, but we recently updated all of our technology in order to supply the best user experience for you and for your customers.
Come and check it out!" />
        </div>

        </div>
    </section>
  )
}

export default Benefits
