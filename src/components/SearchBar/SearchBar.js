import React, { Component } from 'react'
import { getAllMovies } from '../../apiCalls'
import './SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)
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

  clearSearch = () => {
    if (this.state.search === "") {
      this.setState({filteredMovies: []})
      console.log('clearing')
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({search: event.target.value})
    this.handleFiltering()
  }

  handleFiltering = () => {
    let noMovieMatch = false
    const search = this.state.search
    const matchedMovies = this.state.allMovies.filter(movie => (movie.title.toLowerCase()).match(search.toLowerCase()))
    if (matchedMovies.length === 0) {
      noMovieMatch = true
    }
    this.setState({filteredMovies: matchedMovies})
    this.props.displaySearchedMovies(matchedMovies, noMovieMatch)
    noMovieMatch = false
  }

  render() {
    return (
      <div className='search-container'>
        <input
          className='search' 
          type='text'
          value={this.state.search}
          autoComplete='off'
          name='search'
          placeholder='Search Movies'
          autoCorrect='off'
          onChange={this.handleChange}
          onKeyUp={this.handleChange}
        />
      </div>
    )
  }
}

export default SearchBar
