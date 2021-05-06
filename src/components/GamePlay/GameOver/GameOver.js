import React from 'react'
import './GameOver.scss'

const GameOver = ({ onClick }) => {
  return(
    <div id="game-over">
      <h2>Game Over</h2>
      <button onClick={onClick}>Menu</button>
    </div>
  )
}

export default GameOver