import React from 'react'
import './Button.css'

const button = (props) => {
  return(
    <button onClick={props.onClick} name={props.name}>
      {props.label}
    </button>
  )
}

export default button