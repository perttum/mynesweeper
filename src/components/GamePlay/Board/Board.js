import React from 'react'
import Tile from './Tile/Tile'

const Board = ({ board, size, handleTileClick }) => {

  // The board prop is an 2D array. [Y cols [X rows] ]

  // Map current board
  const newBoard =
    board.map((column, x) => {
      return column.map((tile, y) => {
        const tileName = `${x}${y}`
        return <Tile
          key={tileName}
          tileData={board[x][y]}
          onClick={handleTileClick}
        />
      })
    })

  return(
    <div style={size}>
      { newBoard }
    </div>
  )
}

export default Board