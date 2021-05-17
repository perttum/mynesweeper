import React from 'react'
import PointerButton from './PointerButton/PointerButton'
import ZoomButton from './ZoomButton/ZoomButton'
import { useDispatch, useSelector } from 'react-redux'
import { setZoomLevel } from '../../../reducers/zoomlevel'
import { setPointerToDefault, setPointerToFlag, setPointerToQuestionMark } from '../../../reducers/pointer'

const Footer = () => {

  const dispatch = useDispatch()
  const pointer = useSelector(state => state.pointerReducer)
  const zoomLevel = useSelector(state => state.zoomLevel)

  const handlePointerButton = (event) => {
    switch(event.target.id){
    case 'flag':
      if(pointer === 'flag'){
        dispatch(setPointerToDefault())
      } else{
        dispatch(setPointerToFlag())
      }
      break
    case 'question-mark':
      if(pointer === 'questionmark'){
        dispatch(setPointerToDefault())
      } else {
        dispatch(setPointerToQuestionMark())
      }
      break
    default: break
    }
  }

  const handleZoomClick = (event) => {
    event.preventDefault()
    console.log('zoom click: ', event.target.id)
    const addZoom = event.target.id === 'add-zoom' ? true : false
    const zoom = addZoom ? 2 : 1
    dispatch(setZoomLevel(zoom))
  }

  return(
    <div id="game-footer">
      <div>
        <PointerButton tool='flag' onClick={handlePointerButton} active={pointer === 'flag' ? true : false}/>
        <PointerButton tool='question-mark' onClick={handlePointerButton} active={pointer === 'questionmark' ? true : false}/>
      </div>
      {/* <ZoomButton onClick={handleZoomClick}/> */}
    </div>
  )
}

export default Footer