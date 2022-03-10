import React from 'react'
import Header from './Header'
import CatalogWrap from './CatalogWrap'
import './Catalog.css'
import CatalogContent from './CatalogContent'

const Catalog = () => {
  return (
    <div className='Catalog'>
        <Header/>
        <CatalogWrap/>
        <CatalogContent />
    </div>
  )
}

export default Catalog
