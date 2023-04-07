import React from 'react'
import Card from './Card'
import Illustration from '../images/illustration-thank-you.svg'
import './Thanks.css'

function Thanks({rating}) {
  return <Card>
    <div className='illustration-container'>
      <img src={Illustration} alt="" />
    </div>
    <div className='rating-selected'>
      <p>You selected {rating} out of 5</p>
    </div>
    <h2 className='thank-you'>Thank you!</h2>
    <p className='thanks-desc'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  </Card>
}

export default Thanks