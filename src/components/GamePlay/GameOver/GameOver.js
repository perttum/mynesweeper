import React from 'react'
import './GameOver.css'

const GameOver = ({ onClick }) => {
  return(
    <div id="game-over">
      <div className="game-over-container">
        <h3>GameOver</h3>
        <button onClick={onClick}>Menu</button>
      </div>
    </div>
  )
}

export default GameOver