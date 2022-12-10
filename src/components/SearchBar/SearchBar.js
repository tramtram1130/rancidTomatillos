import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import Card from '../Card/Card'
import { getAllMovies } from '../../apiCalls'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      search: "",
      filteredMovies: []
    }
  }

  componentDidMount = () => {
    getAllMovies()
      .then(data => this.setState({allMovies: data.movies}))
      .catch(err => console.log(err))
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({search: event.target.value})
    this.handleFiltering()
  }

  handleFiltering = () => {
    const search = this.state.search
    const matchedMovies = this.state.allMovies.filter(movie => (movie.title.toLowerCase()).includes(search.toLowerCase()))
    this.setState({filteredMovies: matchedMovies})
  }

  render() {
    const filteredMovieList = this.state.filteredMovies.map(movie => 
    <Card 
      key={movie.id}
      id={movie.id}
      posterPath={movie.poster_path}
      title={movie.title}
    />)
    return (
      <div>
        <input 
          type='text'
          value={this.state.search}
          autoComplete='off'
          name='search'
          placeholder='Search Movies'
          autoCorrect='off'
          onChange={this.handleChange}
        />
        <div>{filteredMovieList}</div>
      </div>
    )
  }
}

export default SearchBar