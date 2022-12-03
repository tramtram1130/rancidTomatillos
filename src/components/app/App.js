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
      isLoading: true
    }
  }

  componentDidMount = () => {
    console.log('Component Did Mount')
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({allMovies: data, isLoading: false}))
      .then(() => console.log('static data', this.state.allMovies))
      .catch(err => console.log(err))
  }

  componentDidUpdate = () => {
    console.log('Component Did Update')
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
        {this.state.isLoading && <img src="https://i.gifer.com/ZKZg.gif" />}
        {this.state.selectedMovie && <MoviePage details={this.state.selectedMovie} viewHome={this.viewHome}/>}
        {!this.state.isLoading && <Movies allMovies={this.state.allMovies} viewMovie={this.viewSelectedMovie}/>}
      </main>
    )
  }
}

export default App;
