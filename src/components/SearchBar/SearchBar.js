import React, { Component } from 'react'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }

  handleChange = () => {
    this.setState()
  }

  render() {
    return (
      <div>
        <input 
          type='text'
          value={this.state.search}
          autoComplete='off'
          name='search'
          placeholder='Search Movies'
          autoCorrect='off'
          onClick={() => this.handleChange}
        />
      </div>
    )
  }
}

export default SearchBar