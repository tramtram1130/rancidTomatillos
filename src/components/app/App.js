import React, { Component } from 'react'
import './App.css'

import movieData from '../../data/movieData'
import Movies from '../Movies/Movies'
import MoviePage from '../moviepage/MoviePage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: movieData,
      selectedMovie: ''
    }
  }

  viewSelectedMovie = (id) => {
    const userSelectedMovie = this.state.allMovies.movies.filter(movie => movie.id == id)
    this.setState({selectedMovie: userSelectedMovie})
  }

  viewHome = () => {
    this.setState({ selectedMovie: '' })
  }

  render() {
    return (
      <main>
        {
          this.state.selectedMovie ? 
          <MoviePage details={this.state.selectedMovie} viewHome={this.viewHome}/> : 
          <Movies allMovies={this.state.allMovies} viewMovie={this.viewSelectedMovie} />
        }
      </main>
    )
  }
}

export default App;
