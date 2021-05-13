import React from 'react'

const WinGame = ({ isHiScore, time, onClick }) => {

  return(
    <div id="win-game">
      <h2>Good job!</h2>
      <p>Game completed in {time} seconds</p>
      { isHiScore && <h1>New HiScore!</h1>}
      <button onClick={onClick}>menu</button>
    </div>
  )
}

export default WinGame