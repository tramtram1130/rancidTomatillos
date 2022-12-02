import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      posterPath: props.posterPath
    }
  }

  handleClick = (event) => {
    this.props.viewMovie(event.target.id)
  }
  
  render() {
    return (
      <div className='card-container'>
        <img className='card' id={this.state.id} onClick={() => this.props.viewMovie(this.state.id)} src={this.state.posterPath} />
      </div>
    )
  }
}

export default Card