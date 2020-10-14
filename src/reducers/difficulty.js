export const difficultySettings = [{
  difficulty: 'easy',
  mines: 4,
  boardsize: 8
}, {
  difficulty: 'medium',
  mines: 16,
  boardsize: 16
}, {
  difficulty: 'hard',
  mines: 24,
  boardsize: 24
},
]

const initialState = difficultySettings[0]

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