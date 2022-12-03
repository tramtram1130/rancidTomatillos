import React, { Component } from 'react'
import './App.css'

import movieData from '../../data/movieData'
import Movies from '/Users/tramtram/turing_work/3mod/projects/2week/rancid-tomatillos/src/components/movies/Movies.js'
import MoviePage from '../moviepage/MoviePage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: 'movieData',
      selectedMovie: '',
      allMoviesLoading: true,
      singleMovieLoading: true
    }
  }

  componentDidMount = () => {
    // console.log('Component Did Mount')
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({allMovies: data, allMoviesLoading: false}))
      // .then(() => console.log('static data', this.state.allMovies))
      .catch(err => console.log(err))
  }

  getSingleMovie = (id) => {
    const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + id
    fetch(url)
      .then(response => response.json())
      // .then(data => console.log('single movie api', data))
      .then(data => this.setState({selectedMovie: [data], singleMovieLoading: false}))
      .catch(err => console.log(err))
  }

  viewSelectedMovie = (id) => {
    this.getSingleMovie(id)
    console.log(this.state.selectedMovie)
    // const userSelectedMovie = this.state.allMovies.movies.filter(movie => movie.id === id)
    // console.log(this.getSingleMovie(id))
    // this.setState({selectedMovie: userSelectedMovie})
  }

  viewHome = () => {
    this.setState({ selectedMovie: '' })
  }

  render() {
    return (
      <main>
        {this.state.allMoviesLoading && <img src="https://i.gifer.com/ZKZg.gif" />}
        {this.state.selectedMovie 
        ? (!this.state.singleMovieLoading && <MoviePage details={this.state.selectedMovie} viewHome={this.viewHome}/>)
        : (!this.state.allMoviesLoading && <Movies allMovies={this.state.allMovies} viewMovie={this.viewSelectedMovie}/>)}
      </main>
    )
  }
}

export default App;
