const initialState = null

const boardReducer = (state = initialState, action) => {
  switch(action.type){
  case 'UPDATE_BOARD':
    return action.data

  default: return state
  }
}

export const updateBoard = (board) => {
  return{
    type: 'UPDATE_BOARD',
    data: board
  }
}

export default boardReducer