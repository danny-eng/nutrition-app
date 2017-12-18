import React, { Component } from 'react'

class ProfileList extends Component {

  render(){
    return (
      <div className="favorite-list">
        <div onClick={() => this.props.getFood(this.props.ndbno)}><p className="under">{this.props.name}</p></div>
        <div onClick={() => this.props.deleteFavorite(this.props.id)}><p className="red">✖</p></div>
      </div>
    )
  }
}

export default ProfileList
