import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { withRouter } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='nav-btn-div'>
          <NavLink 
            to='/'
          ><img 
              className="slvsh-logo"
              alt='slvsh-logo'
              src="http://d1tajj9tvz4hqc.cloudfront.net/assets/logo_blue_md-94f051d3d0084c821e18d0376a98da8f.png"/>
          </NavLink>
          
          <NavLink 
            to='/games/page/1'
            className='nav-btn nav-games' 
            style={{ textDecoration: 'none' }}
            activeStyle={{color: '#ff0049'}}
          >GAMES</NavLink>
  
          <NavLink 
            to='/riders' 
            className='nav-btn nav-riders' 
            style={{ textDecoration: 'none' }}
            activeStyle={{color: '#ff0049'}}
          >RIDERS</NavLink>
  
          <NavLink 
            to='/create' 
            className='nav-btn nav-create' 
            activeStyle={{color: '#ff0049'}}
            style={{ textDecoration: 'none' }}
          >CREATE</NavLink>
        </div>

        <div className='login-div'>
          <NavLink 
            to='/login' 
            className='nav-btn nav-create' 
            activeStyle={{color: '#ff0049'}}
            style={{ textDecoration: 'none' }}
          >LOGIN</NavLink>        
        </div>
      </header>
    );
  }
}

export default withRouter(Header);