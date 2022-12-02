import React, { Component } from 'react'
import './App.css'

import movieData from '../../data/movieData'
import Movies from '/Users/tramtram/turing_work/3mod/projects/2week/rancid-tomatillos/src/components/movies/Movies.js'
import MoviePage from '/Users/tramtram/turing_work/3mod/projects/2week/rancid-tomatillos/src/components/moviepage/MoviePage.js'

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

  render() {
    return (
      <main>
        {
          this.state.selectedMovie ? 
          <MoviePage details={this.state.selectedMovie}/> : 
          <Movies allMovies={this.state.allMovies} viewMovie={this.viewSelectedMovie} />
        }
      </main>
    )
  }
}

export default App;
