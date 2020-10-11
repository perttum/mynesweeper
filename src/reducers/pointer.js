const initialState = 'default'

const pointerReducer = (state = initialState, action) => {
  switch(action.type){
  case 'DEFAULT':
    return 'default'
  case 'FLAG':
    return 'flag'
  case 'QUESTIONMARK':
    return 'questionmark'
  default: return state
  }
}

export const setPointerToDefault = () => {
  return{
    type: 'DEFAULT',
  }
}

export const setPointerToFlag = () => {
  return{
    type: 'FLAG'
  }
}

export const setPointerToQuestionMark = () => {
  return{
    type: 'QUESTIONMARK'
  }
}

export default pointerReducer