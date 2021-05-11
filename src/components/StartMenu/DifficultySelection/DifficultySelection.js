import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './DifficultySelection.scss'

const DifficultySelection = ({ handleDifficultyButtonClick }) => {

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
  }, [difficulty])

  const selectedButtonStyle = {
    borderColor: 'rgb(40, 241, 0)',
    pointerEvents: 'none',
    color: 'rgb(40, 241, 0)'
  }

  return(
    <div id="difficulty-selection">
      <button
        style={selectedButton === 0 ? selectedButtonStyle : null}
        id="easy"
        data-testid="easy-difficulty"
        onClick={handleDifficultyButtonClick}
      >
        small
      </button>
      <button
        style={selectedButton === 1 ? selectedButtonStyle : null}
        id="medium"
        data-testid="medium-difficulty"
        onClick={handleDifficultyButtonClick}
      >
        big
      </button>
      <button
        style={selectedButton === 2 ? selectedButtonStyle : null}
        id="hard"
        data-testid="hard-difficulty"
        onClick={handleDifficultyButtonClick}
      >
        huge
      </button>
    </div>
  )
}

export default DifficultySelection