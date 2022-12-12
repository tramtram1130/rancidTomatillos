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
    this.handleFiltering()
    this.clearSearch()
    this.setState({search: event.target.value})
  }

  handleFiltering = () => {
    const search = this.state.search
    const matchedMovies = this.state.allMovies.filter(movie => (movie.title.toLowerCase()).includes(search.toLowerCase()))
    this.setState({filteredMovies: matchedMovies})
    this.props.displaySearchedMovies(matchedMovies)
  }

  render() {
    return (
      <div>
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