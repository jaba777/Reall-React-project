import React from 'react'

const BoxContent = (props) => {
  return (
   
    <div className='box'>
            <div className='container-of-box'>
                <div className='image'>
                    <img src={props.source} alt="" />
                </div>
                <div className='image-text'> 
                    <h2>{props.number}</h2>
                    <p>{props.text}</p>
                </div>
            </div>

        </div>
   
  )
}

export default BoxContent
