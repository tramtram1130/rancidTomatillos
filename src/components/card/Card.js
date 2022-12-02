import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card-container'>
      <img className='card' src={props.posterPath} />
    </div>
  )
}

export default Card