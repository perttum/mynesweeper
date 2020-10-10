import React from 'react'
import './Tile.css'

const Tile = (props) => {

  const obj = props.obj

  let style

  if(obj.open){
    style = {
      backgroundColor: '#f5f5f5',
      borderTop: '1px dotted lightGray',
      borderLeft: '1px dotted lightGray',
      borderRight: 'none',
      borderBottom: 'none'
    }
  }

  const tileId = `${obj.locationX},${obj.locationY}`
  let label
  if(obj.open){
    label = obj.mine ? 'M' : obj.neighborMines > 0 ? obj.neighborMines : ''
  } else{
    label = ''
  }

  return(
    <button className="tile" style={style} onClick={props.onClick} value={tileId}>
      {label}
    </button>
  )
}

export default Tile