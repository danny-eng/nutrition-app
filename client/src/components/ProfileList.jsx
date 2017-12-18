import React, { Component } from 'react'

class ProfileList extends Component {

  render(){
    return (
      <div className="favorite-item wide-fix">
        <div onClick={() => this.props.getFood(this.props.ndbno)}><p><b>{this.props.name}</b></p></div>
        <div onClick={() => this.props.deleteFavorite(this.props.id)}><p>X</p></div>
      </div>
    )
  }
}

export default ProfileList
