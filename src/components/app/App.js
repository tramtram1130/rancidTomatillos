import React, { Component } from 'react'
import './App.css'
import movieData from '/Users/tramtram/turing_work/3mod/projects/2week/rancid-tomatillos/src/moviedata.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: movieData
    }
  }

  render() {
    console.log(this.state.allMovies)
    return (
      <div>
        <h1>Rancid Tomatillos</h1>
      </div>
    )
  }
}

export default App;
