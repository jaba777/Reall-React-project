import React from 'react'
import CatalogContent from './CatalogContent'
import CatalogWrap from './CatalogWrap';
import './CatalogConteiner.css';
const CatalogContainer = () => {
  return (
    <div className='CatalogConteiner'>
        <CatalogWrap/>
      <CatalogContent/>
    </div>
  )
}

export default CatalogContainer
