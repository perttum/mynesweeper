import React from 'react'
import { useSelector } from 'react-redux'

const DifficultyInfo = () => {

  const difficulty = useSelector(state => state.difficultyReducer)

  return(
    <div id="difficulty-info">
      <p>Board size: {difficulty.boardsize}x{difficulty.boardsize}<br/>Mines: {difficulty.mines}</p>
    </div>
  )
}

export default DifficultyInfo