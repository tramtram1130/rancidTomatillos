import React, { Component } from 'react'
import './App.css'

import movieData from '../../data/movieData'
import Movies from '../Movies/Movies'

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
        <h1>Rancid Tomatillos</h1>
        <Movies allMovies={this.state.allMovies} />
      </main>
    )
  }
}

export default App;
