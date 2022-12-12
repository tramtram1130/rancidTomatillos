import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './Movies.css'

const Movies = ({ allMovies }) => {
  const movieList = allMovies.map(movie => {
    return (
        <Card
          key={movie.id}
          id={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
        />
    )
  })
  return (
    <div className='movies-container'>
      {movieList}
    </div>
  )
}

export default Movies

Movies.propTypes = {
  allMovies: PropTypes.array.isRequired
}