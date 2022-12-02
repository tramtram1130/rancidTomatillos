import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card-container'>
      <img className='card' id={props.id} onClick={() => props.viewMovie(props.id)} src={props.posterPath} />
    </div>
  )
}

export default Card