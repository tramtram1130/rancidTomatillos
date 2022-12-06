import React from 'react';
import './MoviePage.css';

const MoviePage = ({ details, viewHome }) => {
  const { backdrop_path, title, genres, release_date, budget, revenue, runtime, average_rating, tagline, overview } = details[0].movie
  let dollarUSLocale = Intl.NumberFormat('en-US');
  console.log(details[0].movie)
  return (
    <section className='movie-container'>

      <div className='movie-poster-container'>
        <img className='movie-poster' src={backdrop_path} />
      </div>

      <div className='info-container'>
        <h1 className='movie-title'>{title}</h1>
        <p className='movie-info'>
          Release Date: {release_date} | {runtime} min | Avg Rating: {parseInt(average_rating).toFixed(2)}
        </p>
        <ul className='genre-container'>
          {genres.map((genre) => (
            <li className='genre' key={genre}>{genre}</li>
          ))}
        </ul>
        <h2 className='movie-tag'>{tagline}</h2>
        <h3 className='movie-overview-title'>Overview</h3>
        <p className='movie-overview'>{overview}</p>
        <p className='movie-money'>Budget: ${dollarUSLocale.format(budget)} | Revenue: ${dollarUSLocale.format(revenue)}</p>
        <button className='home-btn' onClick={() => viewHome()}>home</button>
      </div>
      
    </section>
  )
}

export default MoviePage