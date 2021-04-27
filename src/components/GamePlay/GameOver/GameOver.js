import React from 'react'
import './GameOver.scss'

const GameOver = ({ onClick }) => {
  return(
    <div id="game-over">
      <div>
        <h3>GameOver</h3>
        <button onClick={onClick}>Menu</button>
      </div>
    </div>
  )
}

export default GameOver