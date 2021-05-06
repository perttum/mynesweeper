import React from 'react'
import './StartGameButton.scss'

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