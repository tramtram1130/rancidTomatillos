import React, { Component } from 'react';
import './MoviePage.css';
import { getSelectedMovie } from './../../apiCalls';
import { NavLink } from 'react-router-dom'

class MoviePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      movie: {},
      movieId: props.movieId,
    }
  }
  componentDidMount = () => {
    this.setState({isLoading: true})
    getSelectedMovie(this.state.movieId)
      .then(data => {
        this.setState({
          isLoading: false,
          movie: data.movie,
        });
      })
  }
  render() {
    const genres = String(this.state.movie.genres).split(",").map(genre => <li key={genre}>{genre}</li>);
    let dollarUSLocale = Intl.NumberFormat('en-US');
    return (
      <section className='movie-container'>
        {this.state.isLoading && <img alt="Loading..." src="https://i.gifer.com/ZKZg.gif" />}
        <div className='movie-poster-container'>
          <img className='movie-poster' src={this.state.movie.backdrop_path} />
        </div>
        <div className='info-container'>
          <h1 className='movie-title'>{this.state.movie.title}</h1>
          <p className='movie-info'>
            Release Date: {this.state.movie.release_date} | {this.state.movie.runtime} min | Avg Rating: {parseInt(this.state.movie.average_rating).toFixed(2)}
          </p>
          <ul>
            {genres}
          </ul>
          <h2 className='movie-tag'>{this.state.movie.tagline}</h2>
          <h3 className='movie-overview-title'>Overview</h3>
          <p className='movie-overview'>{this.state.movie.overview}</p>
          <p className='movie-money'>Budget: ${dollarUSLocale.format(this.state.movie.budget)} | Revenue: ${dollarUSLocale.format(this.state.movie.revenue)}</p>
          <NavLink to="/"><button className='home-btn'>home</button></NavLink>
        </div>
      </section>
    )
  }
}
export default MoviePage