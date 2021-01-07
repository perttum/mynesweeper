import React, { useState, useEffect } from 'react'
import './StartMenu.css'
import boardGen from '../../gamelogic/boardgen'
import { setNewBoard } from '../../reducers/board'
import { useDispatch, useSelector } from 'react-redux'
import { setDifficulty } from '../../reducers/difficulty'
import { startGame } from '../../reducers/gamestate'
import { setTilesAmount } from '../../reducers/tilesleft'
import gameplay from '../../gamelogic/gameplay'

const StartMenu = () => {

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
      <h2>Start menu</h2>
      <div className={selectedButton === 0 ? 'menu-button difficulty-select active' : 'menu-button difficulty-select'} id="0" onClick={handleDifficultyButtonClick}>
        <span>easy</span>
      </div>
      <div className={selectedButton === 1 ? 'menu-button difficulty-select active' : 'menu-button difficulty-select'} id="1" onClick={handleDifficultyButtonClick}>
        <span>medium</span>
      </div>
      <div className={selectedButton === 2 ? 'menu-button difficulty-select active' : 'menu-button difficulty-select'} id="2" onClick={handleDifficultyButtonClick}>
        <span>hard</span>
      </div>

      <button id="start-game-button" className="menu-button" onClick={handleStartGameButtonClick}>Start game</button>
    </div>
  )
}

export default StartMenu