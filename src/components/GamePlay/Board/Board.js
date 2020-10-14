import React from 'react'
import Tile from './Tile/Tile'

const Board = (props) => {
  if(props.board !== null){
    const size = {
      width: props.boardSize,
      heigth: props.boardSize
    }
    return(
      <div className="board" style={size}>
        {props.board.map((col, x) => {
          return col.map((row, y) => {
            const tileName = `${x}${y}`
            return <Tile
              key={tileName}
              obj={props.board[y][x]}
              onClick={props.onClickTile}
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

export default Board