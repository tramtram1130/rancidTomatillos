import React from 'react'

const MoviePage = ({ details, viewHome }) => {
  console.log('details', details[0].poster_path)
  return (
    <div>
      <h1>{details[0].title}</h1>
      <p>Release Date: {details[0].release_date} | Run Time: 120 min | Genre: Horror | Avg Rating: {parseInt(details[0].average_rating).toFixed(2)}</p>
      <h2>Tagline</h2>
      <h2>Overview</h2>
      <p>Budget:$234,234,432 | Revenue: $345,678,907</p>
      <button onClick={() => viewHome()}>home</button>
      <img src={details[0].poster_path} />
    </div>
  )
}

export default MoviePage