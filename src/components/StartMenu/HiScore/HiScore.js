import React, { useState, useEffect } from 'react'
import './HiScore.scss'
import storager from '../../../utils/storager'

const HiScore = () => {

  const [smallHiScore, setSmallHiScore] = useState('xxx')
  const [bigHiScore, setBigHiScore] = useState('xxx')
  const [hugeHiScore, setHugeHiScore] = useState('xxx')

  useEffect(() => {
    setSmallHiScore(storager.getFromStorage('myne-sweeper-hi-score-easy') || 'xxx')
    setBigHiScore(storager.getFromStorage('myne-sweeper-hi-score-medium') || 'xxx')
    setHugeHiScore(storager.getFromStorage('myne-sweeper-hi-score-hard') || 'xxx')
  }, [])

  const clearHiScore = () => {
    setSmallHiScore('xxx')
    setBigHiScore('xxx')
    setHugeHiScore('xxx')
    storager.clearStorage()
  }

  return(
    <div id="hi-score">
      <h4>Best times</h4>
      <p>Small: {smallHiScore} sec</p>
      <p>Big: {bigHiScore} sec</p>
      <p>Huge: {hugeHiScore} sec</p>
      <button onClick={clearHiScore}>clear</button>
    </div>
  )
}

export default HiScore