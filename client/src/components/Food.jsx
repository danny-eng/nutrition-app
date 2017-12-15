import React, { Component } from 'react'

class Food extends Component {

  constructor(props){
    super(props)
    this.state = {
      food: null
    }
  }

  componentDidMount(){
    this.setState({
      food: this.props.recentFoodData.report.food
    })
  }

  render(){
    console.log("food")
    console.log(this.props)
    return (
      <div className="margin-t">
        {this.state.food ? (
          <div>
            <p><b>Name: </b>{this.state.food.name}</p>
            <p><b>Ingredients: </b>{this.state.food.ing.desc}</p>
            <p><b>Manufacturer: </b>{this.state.food.manu}</p>
            <p><b>Nutrients: </b></p>
            {this.state.food.nutrients.map(nutrient => {
              return (
                <div key={nutrient.nutrient_id}>
                  <p>{nutrient.name}</p>
                  <p>{nutrient.value} {nutrient.unit}</p>
                </div>
              )
            })}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }
}

export default Food
