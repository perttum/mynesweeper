import store from '../store'
import { subtractTile } from '../reducers/tilesleft'

const openTile = (locX, locY, board, boardSize) => {
  const newBoard = [...board]
  newBoard[locY][locX].open = true
  store.dispatch(subtractTile())

  if(newBoard[locY][locX].neighborMines === 0){
    //console.log(`I dont have mine neighbors!`)
    for (let x = -1; x <= 1; x++){
      for (let y = -1; y <= 1; y++){

        let xLoc = locX + x
        let yLoc = locY + y

        if(xLoc >= 0 && xLoc < boardSize){
          if(yLoc >= 0 && yLoc < boardSize){

            if(!newBoard[yLoc][xLoc].open){
              //console.log(`add mine count to x:${xLoc}/y:${yLoc} from y:${location.x}/y:${location.y}`)
              openTile(xLoc, yLoc, newBoard, boardSize)
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

const markTile = (locX, locY, board, mark) => {
  const newBoard = [...board]
  if(newBoard[locY][locX].mark === mark){
    newBoard[locY][locX].mark = 'none'
  } else {
    newBoard[locY][locX].mark = mark
  }
  return newBoard
}

const openBoard = (board) => {
  const newBoard = [...board]
  for (let x = 0; x < newBoard.length; x++) {
    for (let y = 0; y < newBoard.length; y++) {
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

export default { openTile, markTile, openBoard, startTimer, endTimer }