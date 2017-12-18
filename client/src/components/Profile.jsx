import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Auth from '../modules/Auth'
import axios from 'axios'

import Food from './Food'
import ProfileList from './ProfileList'
import UpdatePassword from './UpdatePassword'

class Profile extends Component {

  constructor(props){
    super(props)
    this.state = {
      profileData: null,
      profileDataLoaded: false,
      profileFoodData: null,
      profileFoodDataLoaded: false,
    }
    this.getFavorites = this.getFavorites.bind(this)
    this.getFood = this.getFood.bind(this)
    this.refreshFavorites = this.refreshFavorites.bind(this)
    this.returnToProfile = this.returnToProfile.bind(this)
    this.deleteFavorite = this.deleteFavorite.bind(this)
  }

  componentDidMount(){
    this.refreshFavorites()
    this.refreshFavorites()
    this.refreshFavorites()
    this.refreshFavorites()
    this.refreshFavorites()
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

  getFood(ndbno){
    this.setState({
      profileFoodData: null,
      profileFoodDataLoaded: false,
    })
    fetch(`https://api.nal.usda.gov/ndb/reports/?ndbno=${ndbno}&type=b&format=json&api_key=QIH0VoWhfdeREixvllH9ohRQLHfp9TPKk5F78Owm`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        profileFoodData: res,
        profileFoodDataLoaded: true,
      })
    })
  }

  returnToProfile(){
    this.setState({
      profileFoodData: null,
      profileFoodDataLoaded: false,
    })
  }

  componentWillUnmount(){
    this.setState({
      profileData: null,
      profileDataLoaded: false,
      profileFoodData: null,
      profileFoodDataLoaded: false,
    })
  }

  deleteFavorite(id){
    fetch(`/favorites/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
    }).then(res => {
      this.refreshFavorites()
      this.refreshFavorites()
      this.refreshFavorites()
      this.refreshFavorites()
      this.refreshFavorites()
    })
  }

  render(){
    return (
      <div>
        <p>Profile</p>
        <Link to="/">Show Search</Link>
        <UpdatePassword />
        {this.state.profileDataLoaded ? (
          this.state.profileFoodDataLoaded ? (
            <Food
              foodData={this.state.profileFoodData}
              returnToSearch={this.returnToProfile}
            />
          ) : (
            this.state.profileData.favorites.map(favorite => {
                return (
                  <ProfileList
                    deleteFavorite={this.deleteFavorite}
                    id={favorite.id}
                    getFood={this.getFood}
                    name={favorite.name}
                    key={favorite.ndbno}
                    ndbno={favorite.ndbno}
                  />
                )
            })
          )
          ) : (
            <p>Loading...</p>
          )}
      </div>
    )
  }
}

export default Profile
