import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Food extends Component {

  notBasic(){
    return(
      <div className="identifier">
        <p className="r-item">{this.props.foodData.report.food.manu}</p>
        <p className="bold r-item">{this.props.foodData.report.food.name}</p>
        <p className="r-item">{this.props.foodData.report.food.ing.desc}</p>
      </div>
    )
  }

  basic(){
    return(
      <div className="identifier">
        <p className="bold">{this.props.foodData.report.food.name}</p>
      </div>
    )
  }

  render(){
    return (
      <div>
        {this.props.foodData.report.food.ing ?
          this.notBasic()
          :
          this.basic()
        }
        <br/>
        <p className="identifier r-item blue">NUTRIENTS</p>
        <div className="nutrient-table">
          <br/>
          {this.props.foodData.report.food.nutrients.map(nutrient => {
            return (
              <div className="nutrient" key={nutrient.nutrient_id}>
                <p>{nutrient.name}</p>
                <p>{nutrient.value} {nutrient.unit}</p>
              </div>
            )}
          )}
          <br/>
        </div>
        <div className="fake-tray">
          <div className="fake-button back-fix" onClick={() => this.props.returnToSearch()}><p>Back</p></div>
          <Link className="fake-button save-fix" to="/profile" onClick={() => this.props.saveFood(this.props.foodData.report.food.ndbno, this.props.foodData.report.food.name)}><p>Save</p></Link>
        </div>
      </div>
    )
  }
}

export default Food
