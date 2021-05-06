import React from 'react'
import './PointerButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faQuestion } from '@fortawesome/free-solid-svg-icons'

const PointerButton = ({ tool, onClick, active }) => {

  const icon = tool === 'flag' ? <FontAwesomeIcon icon={faFlag}/> : <FontAwesomeIcon icon={faQuestion}/>
  const activeStyle = {
    borderColor: 'var(--success-color)',
    color: 'var(--success-color)',
  }

  let style = {}
  if(active){
    style = activeStyle
  }
  return(
    <button className="pointer-button" onClick={onClick} id={tool} style={style}>
      <span>{icon}</span>
    </button>
  )
}

export default PointerButton