import React from 'react'
import Card from '../Card/Card'
import './Movies.css'

const Movies = (props) => {
  console.log('props', props)
  const movieList = props.allMovies.movies.map(movie => {
    return (
        <Card
          key={movie.id}
          posterPath={movie.poster_path}
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