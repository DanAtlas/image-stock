import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../img/cam_white.svg';

class Navbar extends Component {
  state = {
    active: false,
  }

  render(){
    return(
      <header>
        <div className="container">
          <nav>
            <NavLink className="logo" exact to="/">
              <img src={logo} alt="logo"/>
              <span>ImageStock</span>
            </NavLink>

            <ul>
              <li>
                <NavLink className="nav_link" to="/search">
                  <i className="fas fa-search"></i>
                  <span>Search</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_link" to="/fav">
                  <i className="fas fa-heart"></i>
                  <span>Favorite</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_link" to="/history">
                  <i className="fas fa-history"></i>
                  <span>History</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}


export default Navbar;