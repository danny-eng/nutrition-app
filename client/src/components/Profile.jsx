import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Auth from '../modules/Auth'
import axios from 'axios'

class Profile extends Component {

  constructor(props){
    super(props)
    this.state = {
      profileData: null,
      profileDataLoaded: false
    }
    this.getFavorites = this.getFavorites.bind(this)
  }

  componentDidMount(){
    this.getFavorites()
    this.getFavorites()
    this.getFavorites()
    this.getFavorites()
    this.getFavorites()
  }

  getFavorites(){
    let token = Auth.getToken()
    this.setState({
      profileData: null,
      profileDataLoaded: false
    })
    axios(`/users/${token}`, {
      method: 'GET'
    })
    .then(res => {
      this.setState({
        profileData: res.data,
        profileDataLoaded: true
      })
    })
  }

  render(){
    console.log(this.state.profileData)
    return (
      <div>
        <p>Profile</p>
        <Link to="/">Show Search</Link>
        {this.state.profileDataLoaded ? (
          this.state.profileData.favorites.map(favorite => {
              return (
                <p key={favorite.ndbno}><b>{favorite.name}</b></p>
              )
          })
        ) : (
          <p>You do not have any favorites.</p>
        )}
      </div>
    )
  }
}

export default Profile
