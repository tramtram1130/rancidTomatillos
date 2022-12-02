import React, { Component } from 'react'
import './App.css'

import movieData from '../../data/movieData'
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
      <main>
        <Movies allMovies={this.state.allMovies} />
      </main>
    )
  }
}

export default App;
