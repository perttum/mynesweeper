import React from 'react'
import './index.css'
import GamePlay from './components/GamePlay/GamePlay'
import StartMenu from './components/StartMenu/StartMenu'
import boardGen from './gamelogic/boardgen'
import Header from './components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { setNewBoard } from './reducers/board'
import { setDifficulty } from './reducers/difficulty'
import { startGame } from './reducers/gamestate'
import { setTilesAmount } from './reducers/tilesleft'
import gameplay from './gamelogic/gameplay'

function App() {

  const board = useSelector(state => state.boardReducer)
  const difficulty = useSelector(state => state.difficultyReducer)
  const gameState = useSelector(state => state.gameStateReducer)
  const tileSize = 40

  const dispatch = useDispatch()

  const handleDifficultyButtonClick = (event) => {
    dispatch(setDifficulty(event.target.id))
  }

  const handleStartGameButtonClick = () => {
    const newBoard = boardGen.createBoard(Number(difficulty.boardsize), Number(difficulty.mines))
    const tilesLeft = (difficulty.boardsize * difficulty.boardsize) - difficulty.mines
    dispatch(setTilesAmount(tilesLeft))
    dispatch(setNewBoard(newBoard))
    dispatch(startGame())
    gameplay.startTimer()
  }

  switch(gameState){
  case 'menu':
    return(
      <div>
        <Header />
        <div className="container">
          <StartMenu
            handleStartGameButtonClick = {handleStartGameButtonClick}
            handleSetDifficultyButtonClick = {handleDifficultyButtonClick}
          />
        </div>
      </div>
    )
  case 'game':
    return (
      <div>
        <GamePlay
          board={board !== null ? board : null}
          boardsize={tileSize * difficulty.boardsize}
        />
      </div>
    )
  default: return 'menu'
  }
}

export default App
