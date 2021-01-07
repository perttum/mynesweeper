import React from 'react'
import './index.css'
import GamePlay from './components/GamePlay/GamePlay'
import StartMenu from './components/StartMenu/StartMenu'
// import boardGen from './gamelogic/boardgen'
// import Header from './components/Header/Header'
// import { setNewBoard } from './reducers/board'
import { useSelector } from 'react-redux'
// import { setDifficulty } from './reducers/difficulty'
// import gameStateReducer, { startGame } from './reducers/gamestate'
// import { setTilesAmount } from './reducers/tilesleft'
// import gameplay from './gamelogic/gameplay'

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


  // switch(gameState){
  // case 'menu':
  //   return(
  //     <div>
  //       {/* <Header /> */}
  //       <StartMenu/>
  //     </div>
  //   )
  // case 'game':
  //   return (
  //     <div>
  //       <GamePlay
  //         board={board !== null ? board : null}
  //         boardsize={tileSize * difficulty.boardsize}
  //       />
  //     </div>
  //   )
  // default: return 'menu'
  // }
}

export default App
