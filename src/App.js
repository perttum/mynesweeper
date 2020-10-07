import React, { useState } from 'react'
import './index.css'
import Board from './components/Board/Board'
import StartMenu from './components/StartMenu/StartMenu'
import boardGen from './gamelogic/boardgen'
import Header from './components/Header/Header'
import gameplay from './gamelogic/gameplay'

function App() {

  const [boardSize, setBoardSize] = useState(2)
  const [board, setBoard] = useState(null)
  const [mineAmount, setMineAmount] = useState(1)
  // game state can be: 'menu' , 'game' or 'gameOver'
  const [gameState, setGameState] = useState('menu')
  const tileSize = 40

  const startGame = () => {
    const newBoard = boardGen.createBoard(boardSize, mineAmount)
    setBoard(newBoard)
    setGameState('game')
  }

  const handleStartGame = () => {
    startGame()
  }

  const handleDifficultySelectButton = (event) => {
    switch(event.target.name){
    case 'easy':
      // setDifficulty('easy')
      setMineAmount(15)
      setBoardSize(8)
      break

    case 'medium':
      // setDifficulty('medium')
      setMineAmount(40)
      setBoardSize(15)
      break

    case 'hard':
      // setDifficulty('hard')
      setMineAmount(60)
      setBoardSize(18)
      break

    default: break
    }
  }


  const handleTileClick = (event) => {

    // this value is something like "1,3" "13,0" etc.. x/y coords in a string
    const val = event.target.value

    const x = Number(val.substring(0, val.indexOf(',')))
    const y = Number(val.substring(val.indexOf(',') + 1, val.length))

    const newBoard = gameplay.openTile(x,y, board, boardSize)
    setBoard(newBoard)

    // Check for mine
    if(board[x][y].mine){
      gameplay.gameOver(board)
    }
  }

  const gameStates = [
    <StartMenu
      key="menu"
      boardSize={boardSize}
      mineAmount={mineAmount}
      startGame={handleStartGame}
      setDifficulty={handleDifficultySelectButton}
    />,
    <Board
      key="board"
      board={board}
      boardSize={tileSize * boardSize}
      onClickTile={handleTileClick}
    />
  ]
  

  // const openTile = (locX, locY) => {
  //   const newBoard = [...board]

  //   newBoard[locX][locY].open = true

  //   if(board[locX][locY].neighborMines === 0){
  //     //console.log(`I dont have neighbors!`);
  //     for (let x = -1; x <= 1; x++){
  //       for (let y = -1; y <= 1; y++){

  //         let xLoc = locX + x
  //         let yLoc = locY + y

  //         if(xLoc >= 0 && xLoc < boardSize){
  //           if(yLoc >= 0 && yLoc < boardSize){

  //             if(!board[xLoc][yLoc].open){
  //               //console.log(`add mine count to x:${xLoc}/y:${yLoc} from y:${location.x}/y:${location.y}`);
  //               openTile(xLoc, yLoc)
  //             }
  //             else{
  //               //console.log(`..tried loc ${xLoc},${yLoc} but there was a mine.`);
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   setBoard(newBoard)
  // }

  // const gameOver = () => {
  //   console.log('Game Over!')
  //   const newBoard = [...board]
  //   for (let x = 0; x < newBoard.length; x++) {
  //     for (let y = 0; y < newBoard[x].length; y++) {
  //       newBoard[x][y].open = true
  //     }
  //   }
  //   setBoard(newBoard)
  // }

  switch(gameState){
  case 'menu':
    return(
      <div>
        <Header />
        <div className="container">
          <StartMenu
            boardSize={boardSize}
            mineAmount={mineAmount}
            startGame={handleStartGame}
            setDifficulty={handleDifficultySelectButton}
          />
        </div>
      </div>
    )
  case 'game':
    return (
      <div>
        <Board
          board={board !== null ? board : null}
          boardSize={tileSize * boardSize}
          onClickTile={handleTileClick}
        />
      </div>
    )
  default: break
  }
}

export default App
