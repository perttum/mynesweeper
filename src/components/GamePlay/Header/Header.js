import React from 'react'
import Timer from './Timer/Timer'
import QuitButton from './QuitButton/QuitButton'

const GameplayHeader = ({ time, setTime, timerActive, handleGameOverButton }) => {
  return(
    <div id="gameplay-header">
      <div>
        <Timer
          time={time}
          setTime={setTime}
          timerActive={timerActive}
        />
      </div>
      <QuitButton onClick={handleGameOverButton} />
    </div>
  )
}

export default GameplayHeader