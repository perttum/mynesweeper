import React from 'react'
import PointerButton from './PointerButton/PointerButton'
import { setPointerToDefault, setPointerToFlag, setPointerToQuestionMark } from '../../../reducers/pointer'
import { useDispatch, useSelector } from 'react-redux'

const Footer = () => {

  const dispatch = useDispatch()
  const pointer = useSelector(state => state.pointerReducer)

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

  return(
    <div id="game-footer">
      <div>
        <PointerButton tool='flag' onClick={handlePointerButton} active={pointer === 'flag' ? true : false}/>
        <PointerButton tool='question-mark' onClick={handlePointerButton} active={pointer === 'questionmark' ? true : false}/>
      </div>
    </div>
  )
}

export default Footer