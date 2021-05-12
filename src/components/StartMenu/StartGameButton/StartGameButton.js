import React from 'react'

const StartGameButton = ({ onClick }) => {
  return(
    <button id="start-game-button"
      onClick={onClick}
    >
      Start
    </button>
  )
}

export default StartGameButton