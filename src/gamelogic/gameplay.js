import store from '../store'
import { subtractTile } from '../reducers/tilesleft'

const debug = false // Turn on to console log debug messages

const openTile = (locX, locY, board, boardSize) => {
  const newBoard = [...board]
  // Open the tile that was clicked
  newBoard[locY][locX].open = true
  store.dispatch(subtractTile())

  // If the opened tile has no neighbouring mines, open closed neighbour tiles
  if(newBoard[locY][locX].neighborMines === 0){
    debug && console.log(`Loc ${locX}/${locY} doesn't have any mine neighbors.`)

    // Calling openNeighbourTiles() will call openTile() again if it finds a closed neighbour tile.
    // The process will loop until no closed and zero neighbour tiles 'connected' to the original
    // opentTile() call location can be found.
    openNeighbourTiles(locX, locY, boardSize, newBoard)
  }
  return newBoard
}

// Find & open closed tiles
const openNeighbourTiles = (locX, locY, boardSize, newBoard) => {
  // Loop through X axis
  for (let x = -1; x <= 1; x++){
    // Loop Y axis
    findAndOpenClosedTilesOnYAxis(x, locX, locY,  boardSize, newBoard)
  }
}

// Best function name ever
const findAndOpenClosedTilesOnYAxis = (x, locX, locY, boardSize, newBoard) => {
  const currentXLoc = locX + x
  for (let y = -1; y <= 1; y++){
    const currentYLoc = locY + y

    // If not the tile/loc that called openTile()
    if(!(x === 0 && y === 0)){
      // If currenXYLoc is on board
      if(currentXLoc >= 0 && currentXLoc < boardSize){
        if(currentYLoc >= 0 && currentYLoc < boardSize){
          // Call openTile() on currentX/Y location if not open already
          if(!newBoard[currentYLoc][currentXLoc].open){
            debug && console.log(`open tile: x:${currentXLoc}/y:${currentYLoc}`)
            openTile(currentXLoc, currentYLoc, newBoard, boardSize)
          }
        }
      }
    }
  }
}

// Flag or question tile
const markTile = (locX, locY, board, mark) => {
  const newBoard = [...board]
  newBoard[locY][locX].mark = newBoard[locY][locX].mark === mark ? 'none' : mark
  return newBoard
}

// Open all tiles
const openBoard = (board) => {
  const newBoard = [...board]
  for (let x = 0; x < newBoard.length; x++) {
    for (let y = 0; y < newBoard.length; y++) {
      newBoard[y][x].open = true
    }
  }
  return newBoard
}

export default { openTile, markTile, openBoard }