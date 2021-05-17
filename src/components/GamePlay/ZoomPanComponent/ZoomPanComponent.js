import React from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons'

const ZoomPanComponent = (props) => {

  // Transform wrapper methods cannot be called outside of the component
  // It is messy, but zoom control buttons need to be defined here, inside of the Transform wrapper

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
    {({ zoomIn, zoomOut }) => (
      <React.Fragment>
        <div id="zoom-tools">
          <button className="footer-button" onClick={zoomIn}><span><FontAwesomeIcon icon={faSearchPlus}/></span></button>
          <button className="footer-button" onClick={zoomOut}><span><FontAwesomeIcon icon={faSearchMinus}/></span></button>
        </div>
        <TransformComponent>
          <div>
            { props.children }
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