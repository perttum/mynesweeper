import React from 'react'
import './Logo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
  return(
    <>
      <div id="logo">
        <h1>
            Myne Sweeper
        </h1>
        <div id="bomb">
          <FontAwesomeIcon icon={faBomb} />
        </div>
      </div>
    </>
  )
}

export default Logo