const debug = false // Turn this on to log debug messages to console

const createBoard = (boardSize, mineAmount) => {

  const boardTmp = []

  for (let y = 0; y < boardSize; y++)  {
    boardTmp.push([])
    for (let x = 0; x < boardSize; x++) {
      const newTile = {
        open: false,
        locationX: x, // tile X Location on board
        locationY: y, // same for Y
        mine: false, // is this a mine?
        neighborMines: 0, // value to show in open tile (if the tile has mines on neighbour tiles)
        mark: 'none' // Tile can be flagged or mark as an questionmark, default is none.
      }
      boardTmp[y][x] = newTile
    }
  }
  const newBoard = createMines(boardTmp, mineAmount, boardSize)
  return newBoard
}

const createMines = (board, mineAmount, boardSize) => {

  let createdMines = 0

  // Store mine locations in here. The locations are used later for adding mine neighbour counts.
  let mineLocations = []

  while(createdMines < mineAmount){
    const randomX = Math.floor(Math.random() * boardSize)
    const randomY = Math.floor(Math.random() * boardSize)
    const randomLocation = {
      x: randomX,
      y: randomY
    }

    if(createdMines === 0){
      board[randomY][randomX].mine = true
      mineLocations.push(randomLocation)
      createdMines++
    } else{
      if(!board[randomY][randomX].mine){
        mineLocations.push(randomLocation)
        board[randomY][randomX].mine = true
        createdMines++
      }
    }
  }

  board = createMineCounts(board, mineLocations, boardSize)
  return board
}

// Counts mine neighbours for opened tiles (that aren't mines)
const createMineCounts = (board, mineLocations, boardSize) => {
  mineLocations.forEach(location => {
    // Loop all mine location surroundings
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        // If not the current mine location
        if(!(x === 0 && y === 0)){

          // x/y Loc is the current tile to count neighbouring mines to
          const xLoc = location.x +x
          const yLoc = location.y +y
          debug && console.log(`count mines on location: x:${xLoc} y:${yLoc}`)

          board = countMines(xLoc, yLoc, board, boardSize, location)
        }
      }
    }
  })
  return board
}

const countMines = (xLoc, yLoc, board, boardSize, location) => {
  // Check if this location is on the board
  if(xLoc >= 0 && xLoc < boardSize){
    if(yLoc >= 0 && yLoc < boardSize){
      // If there is no mine already in this location
      if(!board[yLoc][xLoc].mine){
        debug && console.log(`add mine count to x:${xLoc}/y:${yLoc} from y:${location.x}/y:${location.y}`)
        board[yLoc][xLoc].neighborMines += 1
      }
      // The elses below are just for debugging purposes. Could be removed.
      else{
        debug && console.log(`..tried loc ${xLoc},${yLoc} but there was a mine.`)
      }
    }
  } else{
    debug && console.log(`..tried loc ${xLoc},${yLoc} but it was not on the board.`)
  }
  return board
}

export default { createBoard }