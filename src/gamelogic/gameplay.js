const openTile = (locX, locY, board, boardSize) => {

  const newBoard = [...board]

  newBoard[locX][locY].open = true

  if(board[locX][locY].neighborMines === 0){
    //console.log(`I dont have mine neighbors!`)
    for (let x = -1; x <= 1; x++){
      for (let y = -1; y <= 1; y++){

        let xLoc = locX + x
        let yLoc = locY + y

        if(xLoc >= 0 && xLoc < boardSize){
          if(yLoc >= 0 && yLoc < boardSize){

            if(!board[xLoc][yLoc].open){
              //console.log(`add mine count to x:${xLoc}/y:${yLoc} from y:${location.x}/y:${location.y}`)
              openTile(xLoc, yLoc, board, boardSize)
            }
            // else{
            //   console.log(`..tried loc ${xLoc},${yLoc} but there was a mine.`)
            // }
          }
        }
      }
    }
  }
  return newBoard
}

const gameOver = (board) => {
  console.log('Game Over!')
  const newBoard = [...board]
  for (let x = 0; x < newBoard.length; x++) {
    for (let y = 0; y < newBoard[x].length; y++) {
      newBoard[x][y].open = true
    }
  }
  return newBoard
}

export default { openTile, gameOver }