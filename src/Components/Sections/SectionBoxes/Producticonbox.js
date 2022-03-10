import React from 'react'

const Producticonbox = (props) => {
  return (
    <div className='product-icon'>
      <img src={props.image} alt="icon" />
      <p>{props.text}</p>
    </div>
  )
}

export default Producticonbox
