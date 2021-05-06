import React from 'react'
import './Timer.css'

const Timer = ({ time }) => {

  return(
    <div id="timer">
      <span>
        {time}
      </span>
    </div>
  )
}

export default Timer