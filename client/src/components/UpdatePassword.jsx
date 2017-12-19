import React, { Component } from 'react'

import Auth from '../modules/Auth'

class UpdatePassword extends Component {

  constructor(props){
    super(props)
    this.state = {
      newPassword: "",
      confirmPassword: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  handleUpdateSubmit(e) {
    e.preventDefault();
    if (this.state.newPassword === this.state.confirmPassword){
      this.updateUser()
      this.props.updatedPassword()
    }
  }

  updateUser(){
    let token = Auth.getToken()
    fetch(`/users/${token}`, {
      method: 'PUT',
      body: JSON.stringify({
          password: this.state.newPassword
        }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
    }).then(res => {
      this.setState({
        newPassword: "",
        confirmPassword: ""
      })
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
      <form onSubmit={(e) => this.handleUpdateSubmit(e)}>
        <input type="password" onChange={(e) => this.handleChange(e)} name="newPassword" value={this.state.newPassword} placeholder="New Password"/>
        <input type="password" onChange={(e) => this.handleChange(e)} name="confirmPassword" value={this.state.confirmPassword} placeholder="Confirm Password" />
        <input type="submit" value="Update" />
      </form>
    )
  }
}

export default UpdatePassword
