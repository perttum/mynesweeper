import React, { useState } from 'react'
import Tile from './Board/Tile/Tile'
import GameOver from './GameOver/GameOver'
import { useDispatch, useSelector } from 'react-redux'
import { gameOver } from '../../reducers/gamestate'
import { setNewBoard } from '../../reducers/board'
import gameplay from '../../gamelogic/gameplay'
import './GamePlay.css'

const GamePlay = (props) => {

  const dispatch = useDispatch()
  const board = useSelector(state => state.boardReducer)
  const difficulty = useSelector(state => state.difficultyReducer)
  const [gameover, setGameover] = useState(false)

  const handleTileClick = (event) => {

    // this value is something like "1,3" "13,0" etc.. x/y coords in string format
    const val = event.target.value
    const x = Number(val.substring(0, val.indexOf(',')))
    const y = Number(val.substring(val.indexOf(',') + 1, val.length))

    const newBoard = gameplay.openTile(x,y, board, difficulty.boardsize)
    dispatch(setNewBoard(newBoard))

    // Check for mine
    if(board[x][y].mine){
      gameplay.gameOver(board)
      setGameover(true)
    }
  }

  const handleGameOverButton = () => {
    dispatch(gameOver())
  }

  if(props.board !== null){
    const size = {
      // boardsize={tileSize * difficulty.boardsize}
      width: props.boardsize,
      heigth: props.boardsize
    }
    return(
      <div className="board" style={size}>
        {gameover && <GameOver onClick={handleGameOverButton}/>}
        {props.board.map((col, x) => {
          return col.map((row, y) => {
            const tileName = `${x}${y}`
            return <Tile
              key={tileName}
              obj={props.board[x][y]}
              onClick={handleTileClick}
            />
          })
        })}
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