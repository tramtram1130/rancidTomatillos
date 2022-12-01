import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <header className='header-container'>
                <div>
                    <h1>Rancid Tomatillos</h1>
                </div>
                <div>
                    <input 
                        type='text'
                        value=''
                        autoComplete='off'
                        name='search'
                        placeholder='Search Movies'
                        autoCorrect='off'
                    />
                </div>
                
            </header>
        )
    }
}

export default Header;