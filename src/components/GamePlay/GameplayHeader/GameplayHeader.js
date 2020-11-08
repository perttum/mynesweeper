import React from 'react'
import Timer from './Timer/Timer'

const GameplayHeader = (props) => {
  return(
    <div>
      <Timer timerActive={props.timerActive}/>
    </div>
  )
}

export default GameplayHeader