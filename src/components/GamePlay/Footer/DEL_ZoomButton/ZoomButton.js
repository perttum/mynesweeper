import React from 'react'

const ZoomButton = ({ onClick }) => {

  return(
    <div>
      <button
        onClick={onClick}
        id="sub-zoom"
      >
        -
      </button>

      <button
        onClick={onClick}
        id="add-zoom"
      >
        +
      </button>
    </div>
  )
}

export default ZoomButton