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
    this.refreshFavorites = this.refreshFavorites.bind(this)
  }

  componentDidMount(){
    setTimeout(
      this.refreshFavorites(),
      5000
    )
  }

  refreshFavorites(){
    this.setState({
      profileData: null,
      profileDataLoaded: false
    })
    this.getFavorites()
  }

  getFavorites(){
    let token = Auth.getToken()
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

  componentWillUnmount(){
    this.setState({
      profileData: null,
      profileDataLoaded: false
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
          <p>Loading...</p>
        )}
      </div>
    )
  }
}

export default Profile
