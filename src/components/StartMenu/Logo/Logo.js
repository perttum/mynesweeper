import React from 'react'
import './Logo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb, faBahai } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
  return(
    <>
      <div id="logo">
        <div id="bomb">
          <FontAwesomeIcon icon={faBomb} />
        </div>
        <div id="explosion">
          <FontAwesomeIcon icon={faBahai} />
        </div>
      </div>
      <h1>
          MyneSweeper
      </h1>
    </>
  )
}

export default Logo