import React, { useState, useEffect } from 'react'
import './Timer.css'

const Timer = ({ active }) => {

  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let interval = null
    if(active){
      interval = setInterval(() => {
        setSeconds((seconds => seconds + 1))
      }, 1000)
    } else{
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [active])

  return(
    <div id="timer">
      <span>
        {seconds}
      </span>
    </div>
  )
}

export default Timer