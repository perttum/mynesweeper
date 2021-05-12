import React from 'react'

const WinGame = ({ isHiScore, time, onClick }) => {

  return(
    <div id="win-game">
      { isHiScore && <h1>New HiScore!</h1>}
      <h2>Good job!</h2>
      <p>Game completed in {time} seconds</p>
      <button onClick={onClick}>menu</button>
    </div>
  )
}

export default WinGame