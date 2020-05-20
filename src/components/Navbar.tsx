import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar  = () =>(
    <nav>
        <div className="nav-wrapper pink accent-4 px1">
      <a href="/" className="brand-logo">React + Typescript</a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">List</NavLink></li>
        <li><NavLink to="/about">Information</NavLink></li>
        <li><NavLink to="/piton">Piton</NavLink></li>
      </ul>
    </div>
    </nav>
)