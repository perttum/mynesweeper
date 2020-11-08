import React, { useState, useEffect } from 'react'
import './Timer.css'

const Timer = ({ timerActive }) => {

  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let interval = null
    if(timerActive){
      interval = setInterval(() => {
        setSeconds((seconds => seconds + 1))
      }, 1000)
    } else{
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerActive])

  return(
    <div id="timer">
      <span>
        {seconds}
      </span>
    </div>
  )
}

export default Timer