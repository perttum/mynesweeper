import React, { useState, useEffect } from 'react'
import Tile from './Board/Tile/Tile'
import GameOver from './GameOver/GameOver'
import { useDispatch, useSelector } from 'react-redux'
import { gameOver } from '../../reducers/gamestate'
import { setNewBoard } from '../../reducers/board'
import gameplay from '../../gamelogic/gameplay'
import Footer from './Footer/Footer'
import WinGame from './WinGame/WinGame'
import GameplayHeader from './GameplayHeader/GameplayHeader'
import './GamePlay.css'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import storager from '../../utils/storager'

const GamePlay = (props) => {

  const dispatch = useDispatch()
  const board = useSelector(state => state.boardReducer)
  const difficulty = useSelector(state => state.difficultyReducer)
  const pointer = useSelector(state => state.pointerReducer)
  const tilesLeft = useSelector(state => state.tilesLeftReducer)
  const [gameover, setGameover] = useState(false)
  const [winGame, setWinGame] = useState(false)
  const [timerActive, setTimerActive] = useState(true)
  const [time, setTime] = useState(0)
  // const [currentHiScore, setCurrentHiScore] = useState(null)

  const setHiScore = () => {
    // setTimerActive(false)
    const key = `myne-sweeper-hi-score-${difficulty.difficulty}`

    const currentHiScore = storager.getFromStorage(key)
    if(!currentHiScore || currentHiScore > time){
      console.log('new hiscore! ', time)
      storager.saveToStorage(key, time)
    }
  }

  useEffect(() => {
    let interval = null
    if(timerActive){
      interval = setInterval(() => {
        setTime((time => time + 1))
      }, 1000)
    } else{
      clearInterval(interval)
      // console.log('seconds: ', time)
    }
    return () => clearInterval(interval)
  }, [timerActive])

  useEffect(() => {
    console.log('tiles on board: ', tilesLeft)
    if(tilesLeft === 0){
      setTimerActive(false)
      setHiScore()
      gameplay.openBoard(board)

    }
  }, [tilesLeft])

  const handleTileClick = async (event) => {

    // this value is something like "1,3" "13,0" etc.. x/y coords in string format
    const val = event.target.value
    const x = Number(val.substring(0, val.indexOf(',')))
    const y = Number(val.substring(val.indexOf(',') + 1, val.length))

    let newBoard

    switch(pointer){
    case 'default':
      // Check for mine
      if(board[y][x].mine){
        gameplay.openBoard(board)
        setGameover(true)
        setTimerActive(false)
        gameplay.endTimer()
      } else {
        newBoard = gameplay.openTile(x,y, board, difficulty.boardsize)
      }
      break
    case 'flag':
      newBoard = gameplay.markTile(x,y,board,'flag')
      break
    case 'questionmark':
      newBoard = gameplay.markTile(x,y,board,'questionmark')
      break
    default: break
    }
    newBoard && dispatch(setNewBoard(newBoard))
    // checkGameStatus()
  }

  const handleGameOverButton = () => {
    dispatch(gameOver())
  }

  if(board !== null){

    const size = {
      width: props.boardsize,
      height: props.boardsize,
    }

    const wrapperOptions = {
      limitToBounds: false,
      limitToWrapper: false,
      defaultPositionX: window.innerWidth / 2,
      defauttPositionY: window.innerHeight / 2
    }

    return(
      <div>
        { !winGame && <GameplayHeader time={time} timerActive={timerActive} handleGameOverButton={handleGameOverButton}/> }

        <TransformWrapper options={wrapperOptions}>
          <div id="board-container">
            {tilesLeft === 0 && <WinGame onClick={handleGameOverButton} time={time} isHiScore={true}/>}
            {gameover && <GameOver onClick={handleGameOverButton}/>}
            <TransformComponent>

              <div className="board" style={size}>
                {board.map((col, x) => {
                  return col.map((row, y) => {
                    const tileName = `${x}${y}`
                    return <Tile
                      key={tileName}
                      obj={board[x][y]}
                      onClick={handleTileClick}
                    />
                  })
                })}
              </div>
            </TransformComponent>
          </div>
        </TransformWrapper>
        <Footer />
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