import React from 'react'
import PropTypes from 'prop-types'
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

Card.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}