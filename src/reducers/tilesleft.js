const tilesLeftReducer = (state = 0, action) => {
  switch(action.type){
  case 'SET_TILES_AMOUNT':
    return action.data
  case 'SUBTRACT_TILE':
    return state - 1
  default: return state
  }
}

export const setTilesAmount = (amount) => {
  return{
    type: 'SET_TILES_AMOUNT',
    data: amount
  }
}

export const subtractTile = () => {
  return{
    type: 'SUBTRACT_TILE'
  }
}

export default tilesLeftReducer