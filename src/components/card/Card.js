import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
const Card = ({ id, posterPath, title }) => {
  return (
    <NavLink to={`/${id}`}>
    <div className='card-container'>
      <img className='card' id={id} src={posterPath} alt={title + ' movie poster'}/>
    </div>
    </NavLink>
  )
}
export default Card