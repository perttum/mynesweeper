import React from 'react'
import './index.css'
import GamePlay from './components/GamePlay/GamePlay'
import StartMenu from './components/StartMenu/StartMenu'
import { useSelector } from 'react-redux'

function App() {

  const board = useSelector(state => state.boardReducer)
  const difficulty = useSelector(state => state.difficultyReducer)
  const gameState = useSelector(state => state.gameStateReducer)
  const tileSize = 40

  const gamePlayComponent = <GamePlay
    board={board !== null ? board : null}
    boardsize={tileSize * difficulty.boardsize}
  />

  return(
    <div>
      {gameState === 'menu' ? <StartMenu/> : gamePlayComponent}
    </div>
  )
}

export default App
