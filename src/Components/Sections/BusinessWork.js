import React from 'react'

const BusinessWork = (props) => {
  return (
    <div className='business-container'>
            <div className='porto-sicon-box'>
                <div className='photo-container'>
                    <div className='photo-image'>
                        <img src={props.image} alt="" />
                    </div>
                    <div className='business-text-image'>
                        <h4>{props.title}</h4>
                        <p>{props.text}<span><b>{props.span}</b></span></p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BusinessWork
