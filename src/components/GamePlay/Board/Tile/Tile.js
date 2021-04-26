import React from 'react'
import './Tile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb, faFlag, faQuestion } from '@fortawesome/free-solid-svg-icons'

const Tile = (props) => {

  const obj = props.obj

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

  if(obj.open){
    style = {
      background: 'rgba(125, 12, 150, 0.1)',
      borderTop: '1px solid #270c40',
      borderLeft: '1px solid #270c40',
      borderRight: 'none',
      borderBottom: 'none',
      cursor: 'default',
      color:`${colorMineCount(Number(obj.neighborMines))}`
    }
  }


  const tileId = `${obj.locationX},${obj.locationY}`
  let label = ''
  if(obj.open){
    label = obj.mine ? <FontAwesomeIcon icon={faBomb}/> : obj.neighborMines > 0 ? obj.neighborMines : ''
  } else{
    switch(obj.mark){
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
    <button className="tile" style={style} onClick={!obj.open ? props.onClick : undefined} value={tileId} >
      {label}
    </button>
  )
}

export default Tile