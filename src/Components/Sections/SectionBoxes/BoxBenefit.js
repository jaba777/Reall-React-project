import React from 'react'

const BoxBenefit = (props) => {
  return (
    <div className='box-benefit'>
       <div class="benefit-image">
        <img src="https://www.365dropship.com/wp-content/uploads/2020/06/group-52.svg" alt="" />
        </div>
        <div class="benefit-text">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
        <p>{props.text2}</p>

        </div>
    </div>
  )
}

export default BoxBenefit
