import React from 'react'
import './Star.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Star = () => {

  return(
    <div className="star">
      <FontAwesomeIcon icon={faStar}/>
    </div>
  )
}

export default Star