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

function App() {

  const board = useSelector(state => state.boardReducer)
  const difficulty = useSelector(state => state.difficultyReducer)
  const gameState = useSelector(state => state.gameStateReducer)
  const tileSize = 40

  const dispatch = useDispatch()

  const handleDifficultyButtonClick = (event) => {
    console.log('event.target.id: ', event.target.id)
    dispatch(setDifficulty(event.target.id))
  }

  const handleStartGameButtonClick = () => {
    console.log('difficulty: ', difficulty)

    const newBoard = boardGen.createBoard(Number(difficulty.boardsize), Number(difficulty.mines))
    dispatch(setNewBoard(newBoard))
    dispatch(startGame())
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
