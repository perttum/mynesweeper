import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GameOver from './GameOver/GameOver'
import Footer from './Footer/Footer'
import WinGame from './WinGame/WinGame'
import GameplayHeader from './GameplayHeader/GameplayHeader'
import Board from './Board/Board'
import { gameOver } from '../../reducers/gamestate'
import { updateBoard } from '../../reducers/board'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import storager from '../../utils/storager'
import gameplay from '../../gamelogic/gameplay'
import './GamePlay.css'

const GamePlay = (props) => {

  const dispatch = useDispatch()

  const board = useSelector(state => state.boardReducer)
  const difficulty = useSelector(state => state.difficultyReducer)
  const pointer = useSelector(state => state.pointerReducer)
  const tilesLeft = useSelector(state => state.tilesLeftReducer)

  const [gameover, setGameover] = useState(false)
  const [winGame, setWinGame] = useState(false)
  const [isNewHiScore, setIsNewHiScore] = useState(false)
  const [timerActive, setTimerActive] = useState(true)
  const [time, setTime] = useState(0)

  // HiScore is saved to (and read from) localStorage only. It's not stored as a state.
  const setHiScore = () => {
    const key = `myne-sweeper-hi-score-${difficulty.difficulty}`

    const currentHiScore = storager.getFromStorage(key)
    if(!currentHiScore || currentHiScore > time){
      console.log('new hiscore! ', time)
      setIsNewHiScore(true)
      storager.saveToStorage(key, time)
    }
  }

  // Start timer
  useEffect(() => {
    let interval = null
    if(timerActive){
      interval = setInterval(() => {
        setTime((time => time + 1))
      }, 1000)
    } else{
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerActive])

  // Check if all tiles are clear - if so Win Game!
  useEffect(() => {
    if(tilesLeft === 0){
      setTimerActive(false)
      setHiScore()
      gameplay.openBoard(board)
      setWinGame(true)
    }
  }, [tilesLeft])

  const handleTileClick = async (event) => {

    // Event value is something like "1,3" "13,0" etc.. ie. x/y coords in string format
    const val = event.target.value
    const x = Number(val.substring(0, val.indexOf(',')))
    const y = Number(val.substring(val.indexOf(',') + 1, val.length))

    let newBoard

    // Pointer can be Flag, Question mark or default open tiles glove
    switch(pointer){
    case 'default':
      // Check for mine
      if(board[y][x].mine){
        gameplay.openBoard(board)
        setGameover(true)
        setTimerActive(false)
        gameplay.endTimer()
      } else {
        newBoard = gameplay.openTile(x, y, board, difficulty.boardsize)
      }
      break
    case 'flag':
      newBoard = gameplay.markTile(x, y, board, 'flag')
      break
    case 'questionmark':
      newBoard = gameplay.markTile(x, y, board, 'questionmark')
      break
    default: break
    }
    newBoard && dispatch(updateBoard(newBoard))
  }

  const handleGameOverButton = () => {
    dispatch(gameOver())
  }

  // Options for pin-pan-zoom
  const wrapperOptions = {
    limitToBounds: false,
    limitToWrapper: false,
    defaultPositionX: window.innerWidth / 2,
    defauttPositionY: window.innerHeight / 2
  }

  const header = <GameplayHeader
    time={time}
    timerActive={timerActive}
    handleGameOverButton={handleGameOverButton}
  />

  const winGameScreen = <WinGame
    onClick={handleGameOverButton}
    time={time}
    isHiScore={isNewHiScore}
  />

  // The size of board div. The div is a flex wrapper. If not set, board layout will be a mess.
  const size = {
    width: props.boardsize,
    height: props.boardsize,
  }

  return(
    <div>
      { (!winGame && !gameover) &&  header }
      { winGame && winGameScreen }
      {gameover && <GameOver onClick={handleGameOverButton}/>}
      <div id="board-container">
        <TransformWrapper options={wrapperOptions}>
          <TransformComponent>
            <div>
              <Board
                board={board}
                size={size}
                handleTileClick={handleTileClick}
              />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
      <Footer />
    </div>
  )

  // if(board !== null){

  //   const size = {
  //     width: props.boardsize,
  //     height: props.boardsize,
  //   }

  //   const wrapperOptions = {
  //     limitToBounds: false,
  //     limitToWrapper: false,
  //     defaultPositionX: window.innerWidth / 2,
  //     defauttPositionY: window.innerHeight / 2
  //   }

  //   return(
  //     <div>
  //       { (!winGame && !gameover) && <GameplayHeader time={time} timerActive={timerActive} handleGameOverButton={handleGameOverButton}/> }
  //       {winGame && <WinGame onClick={handleGameOverButton} time={time} isHiScore={true}/>}
  //       {gameover && <GameOver onClick={handleGameOverButton}/>}
  //       <div id="board-container">
  //         <TransformWrapper options={wrapperOptions}>
  //           <TransformComponent>
  //             <div className="board" style={size}>
  //               <Board
  //                 board={board}
  //                 size={size}
  //                 handleTileClick={handleTileClick}
  //               />
  //             </div>
  //           </TransformComponent>
  //         </TransformWrapper>
  //       </div>
  //       <Footer />
  //     </div>
  //   )
  // }
  // else{
  //   return(
  //     <p>
  //         Board has not been created yet.
  //     </p>
  //   )
  // }
}

export default GamePlay