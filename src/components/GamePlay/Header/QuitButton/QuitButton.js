import React from 'react'

const QuitButton = ({ onClick }) => {
  return(
    <button
      onClick={onClick}
      id="quit-button"
    >
      x
    </button>
  )
}

export default QuitButton