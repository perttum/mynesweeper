const initialState = 'menu'

const gameStateReducer = (state = initialState, action) => {
  switch(action.type){
  case 'STARTGAME':
    return 'game'
  case 'MENU':
    return 'menu'
  case 'GAMEOVER':
    return 'menu'
  default: return state
  }
}

export const startGame = () => {
  return{
    type: 'STARTGAME',
    data: false
  }
}

export const menu = () => {
  return{
    type: 'MENU'
  }
}

export const gameOver = () => {
  return{
    type: 'GAMEOVER'
  }
}

export default gameStateReducer