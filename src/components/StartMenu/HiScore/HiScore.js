import React, { useState, useEffect } from 'react'
import './HiScore.scss'
import storager from '../../../utils/storager'

const HiScore = () => {

  const [smallHiScore, setSmallHiScore] = useState(0)
  const [bigHiScore, setBigHiScore] = useState(0)
  const [hugeHiScore, setHugeHiScore] = useState(0)

  useEffect(() => {
    setSmallHiScore(storager.getFromStorage('myne-sweeper-hi-score-easy') || 0)
    setBigHiScore(storager.getFromStorage('myne-sweeper-hi-score-medium') || 0)
    setHugeHiScore(storager.getFromStorage('myne-sweeper-hi-score-hard') || 0)
  }, [])
  
  const clearHiScore = () => {
    setSmallHiScore(0)
    setBigHiScore(0)
    setHugeHiScore(0)
    storager.clearStorage()
  }

  return(
    <div id="hi-score">
      <p>Small: {smallHiScore}</p>
      <p>Big: {bigHiScore}</p>
      <p>Huge: {hugeHiScore}</p>
      <button onClick={clearHiScore}>clear</button>
    </div>
  )
}

export default HiScore