import React, { Component } from 'react'

import Auth from '../modules/Auth'

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      loginUserName: "",
      loginPassword: "",
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleLoginSubmit(e){
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.loginUserName,
        password: this.state.loginPassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.token) {
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          loginUserName: '',
          loginPassword: '',
        })
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

  render(){
    return (
      <form onSubmit={this.handleLoginSubmit}>
        <input
          name="loginUserName"
          placeholder="Username" 
          value={this.state.loginUserName}
          onChange={this.handleChange}
        />
        <input
          name="loginPassword"
          placeholder="Password" 
          value={this.state.loginPassword}
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" />
      </form>
    )
  }
}

export default Login

