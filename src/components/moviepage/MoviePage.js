import React from 'react';
import './MoviePage.css';

const MoviePage = ({ details, viewHome }) => {
  console.log('details', details[0].poster_path)
  return (
    <div className='movie-display'>
      <img className='movie-poster' src={details[0].backdrop_path} />
      <h1 className='movie-title'>{details[0].title}</h1>
      <p className='movie-info'>
        Release Date: {details[0].release_date} | Run Time: 120 min | Genre: Horror | Avg Rating: {parseInt(details[0].average_rating).toFixed(2)}
      </p>
      <h2 className='movie-tag'>Tagline</h2>
      <h3 className='movie-overview'>Overview</h3>
        <p className='movie-overview'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      <p>Budget:$234,234,432 | Revenue: $345,678,907</p>
      <button className='home-btn' onClick={() => viewHome()}>home</button>
    </div>
  )
}

export default MoviePage