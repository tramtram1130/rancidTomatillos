import React, { Component } from 'react'
import './Header.css'
import title from './HeaderAssets/TITLE.png'
import icon from './HeaderAssets/rotten.png'

class Header extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <header className='header-container'>
                <img className='tomato' src={icon} alt='tomato icon'></img>
                <img src={title} alt='title'></img>
                <img className='tomato2' src={icon} alt='tomato icon'></img>
                <div>
                </div>
            </header>
        )
    }
}

export default Header;