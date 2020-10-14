import React from 'react'
import './WinGame.css'

const WinGame = (props) => {
  return(
    <div id="win-game">
      <h2>Good job!</h2>
      <button onClick={props.onClick}>menu</button>
    </div>
  )
}

export default WinGame