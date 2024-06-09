import React from 'react'
import logo from './images/my page.png'
import './Nav.css'

function Nav(){
  return (
    <div>
        <nav className='header'>
            <div className="logo">
                <img src={logo} alt="logo" className='top-logo'  />
            </div>
            <ul className="nav-contents">
                <a href=""><li className="items">Home</li></a>
                <a href=""><li className="items">Blog</li></a>
                <a href=""><li className="items">Features</li></a>
                <a href=""><li className="items">About</li></a>
            </ul>
            <button>Hire Me</button>
            </nav>
    </div>
  )
}

export default Nav
