import React from 'react'
import Card from '/Users/tramtram/turing_work/3mod/projects/2week/rancid-tomatillos/src/components/card/Card.js'
import './Movies.css'

const Movies = (props) => {
  console.log('props', props)
  const movieList = props.allMovies.movies.map(movie => {
    return (
        <Card
          key={movie.id}
          id={movie.id}
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