import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom'

class Food extends Component {

  notBasic(){
    return(
      <div className="identifier">
        <p><b>Name: </b>{this.props.foodData.report.food.name}</p>
        <p><b>Ingredients: </b>{this.props.foodData.report.food.ing.desc}</p>
        <p><b>Manufacturer: </b>{this.props.foodData.report.food.manu}</p>
      </div>
    )
  }

  basic(){
    return(
      <div className="identifier">
        <p><b>Name: </b>{this.props.foodData.report.food.name}</p>
      </div>
    )
  }

  render(){
    console.log(this.props.foodData.report)
    return (
      <div className="margin-t">
        {this.props.foodData.report.type === "Basic" ?
          this.basic()
          :
          this.notBasic()
        }
        <p><b>Nutrients: </b></p>
        {this.props.foodData.report.food.nutrients.map(nutrient => {
          return (
            <div key={nutrient.nutrient_id}>
              <p>{nutrient.name}</p>
              <p>{nutrient.value} {nutrient.unit}</p>
            </div>
          )}
        )}
        <Switch>
          <Router exact path="/" render={() => {
            <div>
              <div onClick={() => this.props.returnToSearch()}><p>Return to search results</p></div>
              <Link to="/profile" onClick={() => this.props.saveFood(this.props.foodData.report.food.ndbno, this.props.foodData.report.food.name)}><p>Save</p></Link>
            </div>
          }} />
          <Router exact path="/profile" render={() => {
            <div onClick={() => this.props.returnToProfile()}><p>Return to profile</p></div>
          }} />
        </Switch>
      </div>
    )
  }
}

export default Food
