import React from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const ZoomPanComponent = (props) => {

  // Options for pinch-pan-zoom
  const wrapperOptions = {
    limitToBounds: false,
    limitToWrapper: false,
    defaultPositionX: window.innerWidth / 2,
    defauttPositionY: window.innerHeight / 2,
  }

  const wrapper = <TransformWrapper
    options={wrapperOptions}
  >
    {({ zoomIn, zoomOut, resetTransform }) => (
      <React.Fragment>
        <div className="tools">
          <button onClick={zoomIn}>+</button>
          <button onClick={zoomOut}>-</button>
          <button onClick={resetTransform}>x</button>
        </div>
        <TransformComponent>
          <div>
            { props.children }
            {/* <Board
              board={board}
              size={size}
              handleTileClick={handleTileClick}
            /> */}
          </div>
        </TransformComponent>
      </React.Fragment>
    )}
  </TransformWrapper>
  return(
    <>
      { wrapper }
    </>
  )
}

export default ZoomPanComponent