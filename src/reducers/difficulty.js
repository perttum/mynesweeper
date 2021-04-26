export const difficultySettings = [{
  difficulty: 'easy',
  mines: 10,
  boardsize: 8
}, {
  difficulty: 'medium',
  mines: 22,
  boardsize: 12
}, {
  difficulty: 'hard',
  mines: 40,
  boardsize: 18
},
]

const initialState = difficultySettings[0]

const difficultyReducer = (state = initialState, action) => {
  switch(action.type){
  case 'SET_DIFFICULTY':
    return difficultySettings[Number(action.data)]

  default: return state
  }
}

// Action creators

// Takes in difficulty as a number from 0 to 2
export const setDifficulty = (difficulty) => {
  return{
    type: 'SET_DIFFICULTY',
    data: difficulty
  }
}

export default difficultyReducer