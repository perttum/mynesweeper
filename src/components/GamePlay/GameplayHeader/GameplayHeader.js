import React from 'react'
import Timer from './Timer/Timer'
import './GameplayHeader.css'

const GameplayHeader = (props) => {
  return(
    <div id="gameplay-header">
      <div>
        <Timer time={props.time} timerActive={props.timerActive}/>
      </div>
      <div id="quit-button" onClick={props.handleGameOverButton}>
        <span>X</span>
      </div>
    </div>
  )
}

export default GameplayHeader