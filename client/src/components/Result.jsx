import React from 'react'
import { Link } from 'react-router-dom'

function Result (props) {

    return (
      <Link to="/food" onClick={() => props.sendFood(props.ndbno)}>
        <div key={props.offset} className="search-result">
          <p><b> ::{props.name}:: </b> NDBNO: {props.ndbno}</p>
        </div>
      </Link>
    )

}

export default Result
