import React from 'react'

const GameOver = ({ onClick }) => {
  return(
    <div id="game-over">
      <h2>Game Over</h2>
      <button onClick={onClick}>Menu</button>
    </div>
  )
}

export default GameOver