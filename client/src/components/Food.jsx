import React, { Component } from 'react'

class Food extends Component {

  render(){
    console.log(this.props.foodData.report.food)
    return (
      <div className="margin-t">
        <p><b>Name: </b>{this.props.foodData.report.food.name}</p>
        <p><b>Ingredients: </b>{this.props.foodData.report.food.ing.desc}</p>
        <p><b>Manufacturer: </b>{this.props.foodData.report.food.manu}</p>
        <p><b>Nutrients: </b></p>
        {this.props.foodData.report.food.nutrients.map(nutrient => {
          return (
            <div key={nutrient.nutrient_id}>
              <p>{nutrient.name}</p>
              <p>{nutrient.value} {nutrient.unit}</p>
            </div>
          )}
        )}
        <div onClick={() => this.props.returnToSearch()}><p>Return to search results</p></div>
      </div>
    )
  }
}

export default Food
