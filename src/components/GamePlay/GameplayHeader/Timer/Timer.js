import React, { useState, useEffect } from 'react'
import './Timer.css'
// import storager from '../../../../utils/storager'

const Timer = ({ time }) => {

  // const [seconds, setSeconds] = useState(0)

  // const setHiScore = () => {
  //   // setTimerActive(false)
  //   const key = `myne-sweeper-hi-score-easy`
  //   console.log('key: ', key)

  //   const currentHiScore = storager.getFromStorage(key)
  //   if(!currentHiScore || currentHiScore > seconds){
  //     console.log('secs: ', seconds)
  //     storager.saveToStorage(key, seconds)
      
  //   }
  //   console.log('hi score: ', currentHiScore)
    
  //   // storager.saveToStorage(`myne-sweeper-hi-score-${props.difficulty}`, {hiscore: })

  // }

  // useEffect(() => {
  //   let interval = null
  //   if(timerActive){
  //     interval = setInterval(() => {
  //       setSeconds((seconds => seconds + 1))
  //     }, 1000)
  //   } else{
  //     clearInterval(interval)
  //     console.log('seconds: ', seconds)
      
  //     setHiScore()
  //   }
  //   return () => clearInterval(interval)
  // }, [timerActive])

  return(
    <div id="timer">
      <span>
        {time}
      </span>
    </div>
  )
}

export default Timer