const createBoard = (boardSize, mineAmount) => {

  const newBoard = []

  for (let x = 0; x < boardSize; x++)  {
    newBoard.push([])
    for (let y = 0; y < boardSize; y++) {
      const newTile = {
        open: false,
        locationX: x, // tile X Location on board
        locationY: y, // same for Y
        mine: false, // is this a mine?
        neighborMines: 0, // value to show in open tile (if the tile has mines on neighbour tiles)
        mark: 'none'
      }
      newBoard[x][y] = newTile
    }
  }
  let boardTmp = createMines(newBoard, mineAmount, boardSize)
  return boardTmp
}

const createMines = (board, mineAmount, boardSize) => {

  let createdMines = 0

  // Store mine locations in here. The locations are used later for adding mine neighbor counts.
  let mineLocations = []

  while(createdMines < mineAmount){
    let randomX = Math.floor(Math.random() * boardSize)
    let randomY = Math.floor(Math.random() * boardSize)
    let randomLocation = {
      x: randomX,
      y: randomY
    }

    if(createdMines === 0){
      board[randomX][randomY].mine = true
      mineLocations.push(randomLocation)
      createdMines++
    } else{
      if(!board[randomX][randomY].mine){
        mineLocations.push(randomLocation)
        board[randomX][randomY].mine = true
        createdMines++
      }
    }
  }

  board = createMineCounts(board, mineLocations, boardSize)
  return board
}

const createMineCounts = (board, mineLocations, boardSize) => {
  mineLocations.forEach(location => {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if(!(x === 0 && y === 0)){
          let xLoc = location.x +x
          let yLoc = location.y +y
          //console.log(`trying location... x:${xLoc} y:${yLoc}`)

          // Check if this location is on the board
          if(xLoc >= 0 && xLoc < boardSize){
            if(yLoc >= 0 && yLoc < boardSize){
              // If there is not already a mine in this location
              if(!board[xLoc][yLoc].mine){
                //console.log(`add mine count to x:${xLoc}/y:${yLoc} from y:${location.x}/y:${location.y}`)
                board[xLoc][yLoc].neighborMines += 1
              }
              else{
                //console.log(`..tried loc ${xLoc},${yLoc} but there was a mine.`)
              }
            }
          } else{
            //console.log(`..tried loc ${xLoc},${yLoc} but it was not on board.`)
          }
        }
      }
    }
  })
  return board
}

export default { createBoard }