import React from 'react'
import './PointerButton.css'

const PointerButton = ({ tool, onClick, active }) => {

  let label = tool === 'flag' ? 'F' : '?'
  const activeStyle = {
    backgroundColor: 'blue'
  }

  let style = {}
  if(active){
    style = activeStyle
  }
  return(
    <div className="pointer-button" onClick={onClick} id={tool} style={style}>
      <span>{label}</span>
    </div>
  )
}

export default PointerButton