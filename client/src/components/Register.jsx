import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Auth from '../modules/Auth'

class Register extends Component {

  constructor(props){
    super(props)
    this.state = {
      registerUsername: "",
      registerPassword: "",
      registerEmail: "",
      registerFirstName: "",
      registerLastName: "",
    }
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleRegisterSubmit(e) {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify({
        user: {
          username: this.state.registerUsername,
          password: this.state.registerPassword,
          email: this.state.registerEmail,
          first_name: this.state.registerFirstName,
          last_name: this.state.registerLastName
        }
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      if (res.token) {
        Auth.authenticateToken(res.token);
        this.props.checkLogin(Auth.isUserAuthenticated())
      }
    }).catch(err => {
      console.log(err);
    })
  }

  handleChange(e){
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  componentWillUnmount(){
    this.setState({
      registerUsername: '',
      registerPassword: '',
      registerEmail: '',
      registerFirstName: '',
      registerLastName: '',
    })
  }

  render(){
    return (
      <div className="inner-contents register">
        <form onSubmit={this.handleRegisterSubmit}>
          <input
            name="registerUsername"
            placeholder="Username" 
            value={this.state.registerUsername}
            onChange={this.handleChange}
          />
          <input
            name="registerPassword"
            placeholder="Password" 
            value={this.state.registerPassword}
            onChange={this.handleChange}
          />
          <input
            name="registerEmail"
            placeholder="E-mail" 
            value={this.state.registerEmail}
            onChange={this.handleChange}
          />
          <input
            name="registerFirstName"
            placeholder="First Name" 
            value={this.state.registerFirstName}
            onChange={this.handleChange}
          />
          <input
            name="registerLastName"
            placeholder="Last Name" 
            value={this.state.registerLastName}
            onChange={this.handleChange}
          />
          <input type="submit" value="Register" />
        </form>
        <Link className="return-link" to="/">Return to search</Link>
      </div>
    )
  }
}

export default Register

