import React from 'react'
import './Tile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb, faFlag, faQuestion } from '@fortawesome/free-solid-svg-icons'

const Tile = (props) => {

  const obj = props.obj

  let style

  if(obj.open){
    style = {
      backgroundColor: '#f5f5f5',
      borderTop: '1px solid lightGray',
      borderLeft: '1px solid lightGray',
      borderRight: 'none',
      borderBottom: 'none',
      cursor: 'default'
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
    <button className="tile" style={style} onClick={!obj.open && props.onClick} value={tileId} >
      {label}
    </button>
  )
}

export default Tile