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
            </header>
        )
    }
}

export default Header;