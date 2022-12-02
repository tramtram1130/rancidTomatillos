import React from 'react'

const MoviePage = ({ details }) => {
  console.log('details', details[0].poster_path)
  return (
    <div>
      <img src={details[0].poster_path} />
    </div>
  )
}

export default MoviePage