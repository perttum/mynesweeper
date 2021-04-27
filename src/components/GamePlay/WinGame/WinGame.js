import React from 'react'
import './WinGame.scss'

const WinGame = (props) => {
  return(
    <div id="win-game">
      <div className="win-game-container">
        <h2>Good job!</h2>
        <button onClick={props.onClick}>menu</button>
      </div>
    </div>
  )
}

export default WinGame