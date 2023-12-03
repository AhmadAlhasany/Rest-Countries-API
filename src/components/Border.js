import React from 'react'
import { Link } from 'react-router-dom'

function Border(props) {
  return (
        <Link to = {`/Rest-Countries-API/country/${props.name}`} > 
          <div className='border'>
            <div>  <small>{props.name}&nbsp;</small> </div>
          </div>
        </Link>
  )
}

export default Border