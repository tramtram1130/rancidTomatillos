import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
  return (
    <NavLink to={`/${props.id}`}>
    <div className='card-container'>
      <img className='card' id={props.id} src={props.posterPath} />
    </div>
    </NavLink>
  )
}
export default Card