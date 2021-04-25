import React, { useState, useEffect } from 'react'
import './StartMenu.scss'
import boardGen from '../../gamelogic/boardgen'
import { setNewBoard } from '../../reducers/board'
import { useDispatch, useSelector } from 'react-redux'
import DifficultySelection from './DifficultySelection/DifficultySelection'
import { startGame } from '../../reducers/gamestate'
import { setTilesAmount } from '../../reducers/tilesleft'
import Logo from './Logo/Logo'
import gameplay from '../../gamelogic/gameplay'

const StartMenu = () => {

  const dispatch = useDispatch()

  const difficulty = useSelector(state => state.difficultyReducer)
  // const [selectedButton, setSelectedButton] = useState(0)

  // useEffect(() => {
  //   if(difficulty){
  //     switch(difficulty.difficulty){
  //     case 'easy':
  //       setSelectedButton(0)
  //       break
  //     case 'medium':
  //       setSelectedButton(1)
  //       break
  //     case 'hard':
  //       setSelectedButton(2)
  //       break

  //     default: return null
  //     }
  //   }
  // }, [])

  // const handleDifficultyButtonClick = (event) => {
  //   dispatch(setDifficulty(event.target.id))
  //   setSelectedButton(Number(event.target.id))
  // }

  const handleStartGameButtonClick = () => {
    const newBoard = boardGen.createBoard(Number(difficulty.boardsize), Number(difficulty.mines))
    const tilesLeft = (difficulty.boardsize * difficulty.boardsize) - difficulty.mines
    dispatch(setTilesAmount(tilesLeft))
    dispatch(setNewBoard(newBoard))
    dispatch(startGame())
    gameplay.startTimer()
  }

  return(
    <div id="start-menu">
      <Logo/>
      <DifficultySelection/>
      <button id="start-game-button"
        onClick={handleStartGameButtonClick}
      >
        Start game
      </button>
    </div>
  )
}

export default StartMenu