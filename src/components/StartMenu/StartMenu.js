import React from 'react'
import './StartMenu.scss'
import boardGen from '../../gamelogic/boardgen'
import { updateBoard } from '../../reducers/board'
import { useDispatch, useSelector } from 'react-redux'
import DifficultySelection from './DifficultySelection/DifficultySelection'
import { startGame } from '../../reducers/gamestate'
import { setTilesAmount } from '../../reducers/tilesleft'
import Logo from './Logo/Logo'
import DifficultyInfo from './DifficultyInfo/DifficultyInfo'
import HiScore from './HiScore/HiScore'
import StartGameButton from './StartGameButton/StartGameButton'
import { setDifficulty } from '../../reducers/difficulty'

const StartMenu = () => {

  const dispatch = useDispatch()
  const difficulty = useSelector(state => state.difficultyReducer)

  const handleDifficultyButtonClick = (event) => {
    dispatch(setDifficulty(event.target.id))
  }

  // Creates a new board and launches the game
  const handleStartGameButtonClick = () => {
    const newBoard = boardGen.createBoard(Number(difficulty.boardsize), Number(difficulty.mines))
    const tilesLeft = (difficulty.boardsize * difficulty.boardsize) - difficulty.mines
    dispatch(setTilesAmount(tilesLeft))
    dispatch(updateBoard(newBoard))
    dispatch(startGame())
  }

  return(
    <>
      <div id="start-menu">
        <Logo/>
        <HiScore/>
        <DifficultySelection handleDifficultyButtonClick={handleDifficultyButtonClick}/>
        <DifficultyInfo/>
        <StartGameButton onClick={handleStartGameButtonClick}/>
      </div>
    </>
  )
}

export default StartMenu