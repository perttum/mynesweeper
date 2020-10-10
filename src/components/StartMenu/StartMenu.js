import React from 'react'
import './StartMenu.css'

const StartMenu = ({ handleSetDifficultyButtonClick, handleStartGameButtonClick }) => {

  return(
    <div id="start-menu">
      <h2>Start menu</h2>
      <div>
        <button id="0" onClick={handleSetDifficultyButtonClick}>easy</button>
        <button id="1" onClick={handleSetDifficultyButtonClick}>medium</button>
        <button id="2" onClick={handleSetDifficultyButtonClick}>hard</button>
        <button id="start-game-button" onClick={handleStartGameButtonClick}>Start game</button>
      </div>
    </div>
  )
}

export default StartMenu