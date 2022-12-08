import React from 'react'
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