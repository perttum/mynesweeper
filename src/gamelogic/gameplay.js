let tilesToOpen = []
let tilesToCheck = []

const openTile = (locX, locY, board, boardSize) => {

  const newBoard = [...board]
  newBoard[locX][locY].open = true
  checkNeighbours(locX, locY, newBoard, boardSize)
  tilesToOpen.forEach((loc) => {
    newBoard[loc.x][loc.y].open = true
  })

  // if(board[locX][locY].neighborMines === 0){
  //   //console.log(`I dont have mine neighbors!`)
  //   for (let x = -1; x <= 1; x++){
  //     for (let y = -1; y <= 1; y++){

  //       let xLoc = locX + x
  //       let yLoc = locY + y

  //       if(xLoc >= 0 && xLoc < boardSize){
  //         if(yLoc >= 0 && yLoc < boardSize){

  //           if(!board[xLoc][yLoc].open){
  //             //console.log(`add mine count to x:${xLoc}/y:${yLoc} from y:${location.x}/y:${location.y}`)
  //             openTile(xLoc, yLoc, board, boardSize)
  //           }
  //           // else{
  //           //   console.log(`..tried loc ${xLoc},${yLoc} but there was a mine.`)
  //           // }
  //         }
  //       }
  //     }
  //   }
  // }
  return newBoard
}

const checkNeighbours = (startLocX, startLocY, board, boardSize) => {
  tilesToOpen.push({ x: startLocY, y: startLocY })
  if(board[startLocX][startLocY].neighborMines === 0){
    //console.log(`I dont have mine neighbors!`)
    for (let x = -1; x <= 1; x++){
      for (let y = -1; y <= 1; y++){

        let xLoc = startLocX + x
        let yLoc = startLocY + y

        if(xLoc >= 0 && xLoc < boardSize){
          if(yLoc >= 0 && yLoc < boardSize){

            if(!board[xLoc][yLoc].open && !(xLoc === 0 && yLoc === 0)){
              tilesToOpen.push({ x: xLoc, y: yLoc })
              
              // checkNeighbours(xLoc, yLoc, board, boardSize)
            }
          }
        }
      }
    }
  }
}

const markTile = (locX, locY, board, mark) => {
  const newBoard = [...board]
  if(newBoard[locX][locY].mark === mark){
    newBoard[locX][locY].mark = 'none'
  } else {
    newBoard[locX][locY].mark = mark
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

let startTime, endTime

export let timeCount = 0
let timer = 0

const addTime = () => {
  timeCount++
}

const startTimer = () => {
  startTime = new Date()
  timer = 0
  timeCount = 0
  timer = setInterval(addTime, 1000)
}

const endTimer = () => {
  endTime = new Date()
  let timeDifference = endTime - startTime
  timeDifference /= 1000
  console.log('time: ', timeDifference)
  clearInterval(timer)
  timeCount = 0
}

export default { openTile, markTile, gameOver, startTimer, endTimer }