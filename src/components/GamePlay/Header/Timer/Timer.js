import React, { useEffect } from 'react'

const Timer = ({ time, setTime, timerActive }) => {

  // Start timer
  useEffect(() => {
    let interval = null
    if(timerActive){
      interval = setInterval(() => {
        setTime((time => time + 1))
      }, 1000)
    } else{
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerActive, setTime])

  return(
    <div id="timer">
      <span>
        {time}
      </span>
    </div>
  )
}

export default Timer