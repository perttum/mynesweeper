const initialState = null

const boardReducer = (state = initialState, action) => {
  switch(action.type){
  case 'BOARD':
    return action.data

  default: return state
  }
}

export const setNewBoard = (board) => {
  return{
    type: 'BOARD',
    data: board
  }
}

export default boardReducer