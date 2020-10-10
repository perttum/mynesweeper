const initialState = null

const boardReducer = (state = initialState, action) => {
  switch(action.type){
  case 'BOARD':
    return action.data

  case 'MINEAMOUNT':
    return action.data

  case 'BOARDSIZE':
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

export const setMineAmount = (amount) => {
  return{
    type: 'MINEAMOUNT',
    data: amount
  }
}

export const setBoardSize = (size) => {
  return{
    type: 'BOARDSIZE',
    data: size
  }
}

export default boardReducer