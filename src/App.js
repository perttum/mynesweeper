import React from 'react'
import './sass/app.scss'
import GamePlay from './components/GamePlay/GamePlay'
import StartMenu from './components/StartMenu/StartMenu'
import { useSelector } from 'react-redux'

function App() {

  const difficulty = useSelector(state => state.difficultyReducer)
  const gameState = useSelector(state => state.gameStateReducer)

  const tileSize = 40 // Tile width and height in pixels

  const gamePlayComponent = <GamePlay
    boardsize={tileSize * difficulty.boardsize}
    difficulty={difficulty.difficulty}
  />

  // Debug log the currently focused element on change
  // document.addEventListener('focus', function() {
  //   console.log('focused: ', document.activeElement)
  // }, true)

  return(
    <div>
      {gameState === 'menu' ? <StartMenu/> : gamePlayComponent}
    </div>
  )
}

export default App
