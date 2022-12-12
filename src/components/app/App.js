import React, { Component } from 'react'
import './App.css'
import Movies from '../Movies/Movies'
import MoviePage from '../MoviePage/MoviePage'
import { Route } from 'react-router-dom'
import { getAllMovies } from './../../apiCalls';
import SearchBar from '../SearchBar/SearchBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      isLoading: true,
      error: '',
      filteredMovieSearch: []
    }
    this.displaySearchedMovies = this.displaySearchedMovies.bind(this.displaySearchedMovies)
  }

  componentDidMount = () => {
    getAllMovies()
      .then(data => this.setState({allMovies: data.movies, isLoading: false}))
      .catch(err => this.setState({error: err}))
  }

  displaySearchedMovies = (filteredMovies) => {
    if (filteredMovies.length > 0) {
      this.setState({filteredMovieSearch: filteredMovies})
    } 
  }

  render() {
    return (
      <main>
        <Route exact path="/"
          render={() => {
            return (
              <div>
                <div className="search-bar-container">{<SearchBar displaySearchedMovies={this.displaySearchedMovies}/>}</div>
                {this.state.error && <h3>Oops, something went wrong!</h3>}
                {this.state.isLoading && <img src="https://i.gifer.com/ZKZg.gif" />}
                {this.state.filteredMovieSearch.length === 0 
                ? <Movies allMovies={this.state.allMovies}/>
                : <Movies allMovies={this.state.filteredMovieSearch}/>
              }
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