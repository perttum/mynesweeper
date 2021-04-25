import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDifficulty } from '../../../reducers/difficulty'
import './DifficultySelection.scss'

const DifficultySelection = () => {
  const dispatch = useDispatch()

  const difficulty = useSelector(state => state.difficultyReducer)
  const [selectedButton, setSelectedButton] = useState(0)

  useEffect(() => {
    if(difficulty){
      switch(difficulty.difficulty){
      case 'easy':
        setSelectedButton(0)
        break
      case 'medium':
        setSelectedButton(1)
        break
      case 'hard':
        setSelectedButton(2)
        break

      default: return null
      }
    }
  }, [])

  const handleDifficultyButtonClick = (event) => {
    dispatch(setDifficulty(event.target.id))
    setSelectedButton(Number(event.target.id))
  }
  return(
    <>
      <h3>Set board size:</h3>
      <div id="difficulty-selection">
        <button
          className={selectedButton === 0 ? 'menu-button difficulty-select active' : 'menu-button difficulty-select'}
          id="0"
          onClick={handleDifficultyButtonClick}
        >
          small
        </button>
        <button
          className={selectedButton === 1 ? 'menu-button difficulty-select active' : 'menu-button difficulty-select'}
          id="1"
          onClick={handleDifficultyButtonClick}
        >
          big
        </button>
        <button
          className={selectedButton === 2 ? 'menu-button difficulty-select active' : 'menu-button difficulty-select'}
          id="2"onClick={handleDifficultyButtonClick}
        >
          huge
        </button>
      </div>
    </>
  )
}

export default DifficultySelection