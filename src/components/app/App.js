import React, { Component } from 'react'
import './App.css'
import Movies from '../Movies/Movies'
import MoviePage from '../MoviePage/MoviePage'
import { Route } from 'react-router-dom'
import { getAllMovies } from './../../apiCalls';
class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      isLoading: true,
      error: ''
    }
  }
  componentDidMount = () => {
    getAllMovies()
      .then(data => this.setState({allMovies: data.movies, isLoading: false}))
      .catch(err => this.setState({error: err}))
  }
  render() {
    return (
      <main>
        <Route exact path="/"
          render={() => {
            return (
              <div>
                {this.state.error && <h3>Oops, something went wrong!</h3>}
                {this.state.isLoading
                ? <img src="https://i.gifer.com/ZKZg.gif" />
                :<Movies allMovies={this.state.allMovies}/>}
              </div>
            )
          }}
        />
        <Route exact path="/:id"
          render={({ match }) => {
            return <MoviePage movieId={match.params.id} />
          }}
        />
      </main>
    )
  }
}

export default App;