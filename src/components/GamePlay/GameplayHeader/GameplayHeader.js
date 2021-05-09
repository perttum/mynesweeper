import React from 'react'
import Timer from './Timer/Timer'
import './GameplayHeader.scss'

const GameplayHeader = (props) => {
  return(
    <div id="gameplay-header">
      <div>
        <Timer time={props.time} timerActive={props.timerActive}/>
      </div>
      <button id="quit-button" onClick={props.handleGameOverButton}>
        X
      </button>
    </div>
  )
}

export default GameplayHeader