import React, { useState } from 'react'
import Tile from './Board/Tile/Tile'
import GameOver from './GameOver/GameOver'
import { useDispatch, useSelector } from 'react-redux'
import { gameOver } from '../../reducers/gamestate'
import { setNewBoard } from '../../reducers/board'
import gameplay from '../../gamelogic/gameplay'
import Footer from './Footer/Footer'
import Timer from './Timer/Timer'
import WinGame from './WinGame/WinGame'
import './GamePlay.css'

const GamePlay = (props) => {

  const dispatch = useDispatch()
  const board = useSelector(state => state.boardReducer)
  const difficulty = useSelector(state => state.difficultyReducer)
  const pointer = useSelector(state => state.pointerReducer)
  const tilesLeft = useSelector(state => state.tilesLeftReducer)
  const [gameover, setGameover] = useState(false)
  const [winGame, setWinGame] = useState(false)
  const [timerActive, setTimerActive] = useState(true)

  const handleTileClick = (event) => {

    // this value is something like "1,3" "13,0" etc.. x/y coords in string format
    const val = event.target.value
    const x = Number(val.substring(0, val.indexOf(',')))
    const y = Number(val.substring(val.indexOf(',') + 1, val.length))

    let newBoard

    switch(pointer){
    case 'default':
      // Check for mine
      if(board[y][x].mine){
        gameplay.openBoard(board)
        setGameover(true)
        setTimerActive(false)
        gameplay.endTimer()
      } else {
        newBoard = gameplay.openTile(x,y, board, difficulty.boardsize)
      }
      break
    case 'flag':
      newBoard = gameplay.markTile(x,y,board,'flag')
      break
    case 'questionmark':
      newBoard = gameplay.markTile(x,y,board,'questionmark')
      break
    default: break
    }
    newBoard && dispatch(setNewBoard(newBoard))
    if(tilesLeft - 1 === 0){
      setWinGame(true)
      gameplay.openBoard(newBoard)
      setTimerActive(false)
    }
  }

  const handleGameOverButton = () => {
    dispatch(gameOver())
  }

  if(board !== null){
    const size = {
      // boardsize={tileSize * difficulty.boardsize}
      width: props.boardsize,
      height: props.boardsize
    }

    return(
      <div>
        <Timer active={timerActive}/>
        <div id="board-container">
          <div className="board" style={size}>
            {board.map((col, x) => {
              return col.map((row, y) => {
                const tileName = `${x}${y}`
                return <Tile
                  key={tileName}
                  obj={board[x][y]}
                  onClick={handleTileClick}
                />
              })
            })}
          </div>
        </div>
        <Footer />
        {gameover && <GameOver onClick={handleGameOverButton}/>}
        {winGame && <WinGame onClick={handleGameOverButton} />}
      </div>
    )
  }
  else{
    return(
      <p>
          Board has not been created yet.
      </p>
    )
  }
}

export default GamePlay