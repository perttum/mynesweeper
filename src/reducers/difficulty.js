export const difficultySettings = [{
  difficulty: 'easy',
  mines: 1, // 8
  boardsize: 8
}, {
  difficulty: 'medium',
  mines: 18, // 20
  boardsize: 12
}, {
  difficulty: 'hard',
  mines: 40, // 40
  boardsize: 18
},
]

const initialState = difficultySettings[0]

const difficultyReducer = (state = initialState, action) => {
  switch(action.type){
  case 'SET_DIFFICULTY':
    return action.data
    // return difficultySettings[Number(action.data)]

  default: return state
  }
}

// Takes in difficulty as a number from 0 to 2
export const setDifficulty = (difficulty) => {
  const difficultyToInt = difficulty === 'easy' ? 0 : difficulty === 'medium' ? 1 : 2
  return{
    type: 'SET_DIFFICULTY',
    data: difficultySettings[difficultyToInt]
  }
}

export default difficultyReducer