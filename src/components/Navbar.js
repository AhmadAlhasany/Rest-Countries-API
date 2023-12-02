import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import {faMoon as faMo} from '@fortawesome/free-regular-svg-icons'

function Navbar(props) {
  return (
    <nav className='nav rf'>
        <h2>Where in the world?</h2>
        <div className='mode rf' onClick = {() =>{props.setMode(pre => !pre)}}>
        <FontAwesomeIcon icon={props.mode ? faMoon : faMo} className='icon' />
        <p>Dark Mode</p>
        </div>
    </nav>
    )
}

export default Navbar