import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <header>
        <h1>SLVSH</h1>
        <NavLink to='/games'>Games</NavLink>
        <NavLink to='/riders'>Riders</NavLink>
        <NavLink to='/create'>Create</NavLink>
      </header>
    )
  }
}

export default Header