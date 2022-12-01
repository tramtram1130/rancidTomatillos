import React, { Component } from 'react'
import './App.css'
import movieData from '/Users/tramtram/turing_work/3mod/projects/2week/rancid-tomatillos/src/moviedata.js'
import Movies from '/Users/tramtram/turing_work/3mod/projects/2week/rancid-tomatillos/src/components/movies/Movies.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: movieData
    }
  }

  render() {
    return (
      <div>
        <h1>Rancid Tomatillos</h1>
        <Movies allMovies={this.state.allMovies} />
      </div>
    )
  }
}

export default App;
