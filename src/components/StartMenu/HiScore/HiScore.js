import React, { useState, useEffect } from 'react'
import './HiScore.scss'
import storager from '../../../utils/storager'
import Star from '../../General/Star/Star'

const HiScore = () => {

  const [smallHiScore, setSmallHiScore] = useState(null)
  const [bigHiScore, setBigHiScore] = useState(null)
  const [hugeHiScore, setHugeHiScore] = useState(null)

  useEffect(() => {
    setSmallHiScore(storager.getFromStorage('myne-sweeper-hi-score-easy'))
    setBigHiScore(storager.getFromStorage('myne-sweeper-hi-score-medium'))
    setHugeHiScore(storager.getFromStorage('myne-sweeper-hi-score-hard'))
  }, [])

  const clearHiScore = () => {
    setSmallHiScore(null)
    setBigHiScore(null)
    setHugeHiScore(null)
    storager.clearStorage()
  }

  // Render stuff
  const displaySmallHiScore = smallHiScore ? smallHiScore + ' sec' : '---'
  const displayBigHiScore = bigHiScore ? bigHiScore + ' sec' : '---'
  const displayHugeHiScore = hugeHiScore ? hugeHiScore + ' sec' : '---'

  return(
    <div id="hi-score">
      <h3>BEST PLAYS:</h3>
      <p>Small: {displaySmallHiScore}</p>
      <p>Big: {displayBigHiScore}</p>
      <p>Huge: {displayHugeHiScore}</p>
      <button onClick={clearHiScore}>clear</button>
    </div>
  )
}

export default HiScore