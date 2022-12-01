import React from 'react'
import Card from '/Users/tramtram/turing_work/3mod/projects/2week/rancid-tomatillos/src/components/card/Card.js'

const Movies = (props) => {
  console.log('props', props)
  const mooovies = props.allMovies.movies.map(movie => {
    return <Card
      key={movie.id}
      posterPath={movie.poster_path}
    />
  })
  return mooovies
}

export default Movies