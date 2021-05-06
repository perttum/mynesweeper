import React, { useState, useEffect } from 'react'
import './WinGame.scss'
import storager from '../../../utils/storager'

const WinGame = (props) => {
  console.log('time: ', props.time)
  // const [isHiScore, setIsHiScore] = useState(props.isHiScore)

  // useEffect(() => {
  //   const currentHiScore = storager.getFromStorage('myne-sweeper-hi-score-easy')
  //   currentHiScore < props.time && setIsHiScore(true)
  // }, [])

  return(
    <div id="win-game">
      { props.isHiScore && <h1>New HiScore!</h1>}
      <h2>Good job!</h2>
      <p>Game completed in {props.time} seconds</p>
      <button onClick={props.onClick}>menu</button>
    </div>
  )
}

export default WinGame