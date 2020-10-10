export const difficultySettings = [{
  difficulty: 'easy',
  mines: 8,
  boardsize: 6
}, {
  difficulty: 'medium',
  mines: 16,
  boardsize: 12
}, {
  difficulty: 'hard',
  mines: 24,
  boardsize: 18
},
]

const initialState = 0

const difficultyReducer = (state = initialState, action) => {
  switch(action.type){
  case 'DIFFICULTY':
    return difficultySettings[action.data]
  default: return state
  }
}

// Action creators

// Takes in difficulty as a number from 0 to 2
export const setDifficulty = (difficulty) => {
  return{
    type: 'DIFFICULTY',
    data: difficulty
  }
}

export default difficultyReducer