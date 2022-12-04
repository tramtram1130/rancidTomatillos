import React from 'react';
import './MoviePage.css';

const MoviePage = ({ details, viewHome }) => {
  const { backdrop_path, title, genres, release_date, budget, revenue, runtime, average_rating, tagline, overview } = details[0].movie
  let dollarUSLocale = Intl.NumberFormat('en-US');
  console.log(details[0].movie)
  return (
    <div className='movie-display'>
      <img className='movie-poster' src={backdrop_path} />
      <h1 className='movie-title'>{title}</h1>
      <p className='movie-info'>
        Release Date: {release_date} | Run Time: {runtime} min | Avg Rating: {parseInt(average_rating).toFixed(2)}
      </p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <h2 className='movie-tag'>{tagline}</h2>
      <h3 className='movie-overview'>Overview</h3>
      <p className='movie-overview'>
        {overview}
      </p>
      <p>Budget: ${dollarUSLocale.format(budget)} | Revenue: ${dollarUSLocale.format(revenue)}</p>
      <button className='home-btn' onClick={() => viewHome()}>home</button>
    </div>
  )
}

export default MoviePage