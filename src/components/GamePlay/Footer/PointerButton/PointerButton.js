import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faQuestion } from '@fortawesome/free-solid-svg-icons'

const PointerButton = ({ tool, onClick, active }) => {

  const icon = tool === 'flag' ? <FontAwesomeIcon icon={faFlag}/> : <FontAwesomeIcon icon={faQuestion}/>
  const activeStyle = {
    borderColor: 'rgb(79, 243, 20)',
    color: 'rgb(79, 243, 20)',
  }

  let style = {}
  if(active){
    style = activeStyle
  }

  return(
    <button
      className="footer-button"
      onClick={onClick}
      id={tool}
      style={style}
    >
      <span>{icon}</span>
    </button>
  )
}

export default PointerButton