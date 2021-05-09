import React from 'react'
import './Tile.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb, faFlag, faQuestion } from '@fortawesome/free-solid-svg-icons'

const Tile = ({ tileData, onClick }) => {

  let style

  const colorMineCount = (count) => {
    switch(count){
    case 1:
      return'rgb(16, 181, 66)'
    case 2:
      return'rgb(16, 132, 181)'
    case 3:
      return'rgb(184, 171, 2)'
    case 4:
      return 'rgb(181, 55, 16)'
    case 5:
      return 'rgb(235, 56, 16)'
    case 6:
      return 'rgb(235, 151, 16)'
    case 7:
      return 'rgb(235, 93, 16)'
    case 8:
      return 'rgb(235, 24, 16)'
    default: return 'white'
    }
  }

  if(tileData.open){
    style = {
      background: 'rgba(51, 51, 51, 0.7)',
      border: 0,
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
      borderRight: 'none',
      borderBottom: 'none',
      cursor: 'default',
      color:`${colorMineCount(Number(tileData.neighborMines))}`
    }
  }

  const tileId = `${tileData.locationX},${tileData.locationY}`
  let label = ''

  if(tileData.open){
    label = tileData.mine ? <FontAwesomeIcon icon={faBomb}/> : tileData.neighborMines > 0 ? tileData.neighborMines : ''
  } else{
    switch(tileData.mark){
    case 'flag':
      label = <FontAwesomeIcon icon={faFlag}/>
      break
    case 'questionmark':
      label = <FontAwesomeIcon icon={faQuestion}/>
      break
    default: break
    }
  }

  return(
    <button
      className="tile"
      style={style}
      onClick={!tileData.open ? onClick : undefined} value={tileId}
    >
      {label}
    </button>
  )
}

export default Tile