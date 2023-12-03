import React from 'react'
import { Link } from 'react-router-dom'
function Country(props) {

  return (
      <div className='cf'>
        <Link to = {`/Rest-Countries-API/country/${props.name}`} className='an'>
        <div className='img'>
            <img src={props.img}/>
        </div>
        <div className='det'>
            <strong>{props.name}</strong> <br></br>
            <span>Population: </span> {props.population} <br></br>
            <span> Region: </span> {props.region} <br></br>
            <span>Capital: </span> {props.capital} <br></br>
        </div>
        </Link>
    </div>
  )
}

export default Country