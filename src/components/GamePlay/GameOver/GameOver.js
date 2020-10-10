import React from 'react'
import './GameOver.css'

const GameOver = ({ onClick }) => {
  return(
    <div>
      <h3>GameOver</h3>
      <button onClick={onClick}>Menu</button>
    </div>
  )
}

export default GameOver