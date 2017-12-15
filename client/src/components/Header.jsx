import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Search from './Search'

class Header extends Component {

  render(){
    return (
      <div className="header">
        <Search
          sendResults={this.props.sendResults}
        />
        {this.props.auth ? (
          <div className="navigation-buttons">
            <Link className="navigation-button" to="/" onClick={this.props.clearSearch}>Show Search</Link>
            <Link className="navigation-button" to="/profile">Profile</Link>
            <Link className="navigation-button" to="/logout" onClick={this.props.logoutUser}>Logout</Link>
          </div>
        ) : (
          <div className="navigation-buttons">
            <Link className="navigation-button" to="/">Show Search</Link>
            <Link className="navigation-button" to="/login">Login</Link>
            <Link className="navigation-button" to="/register">Register</Link>
          </div>
        )}
      </div>
    )
  }
}

export default Header
