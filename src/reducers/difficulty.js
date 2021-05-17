export const difficultySettings = [{
  difficulty: 'easy',
  mines: 8, // 8
  boardsize: 8
}, {
  difficulty: 'medium',
  mines: 20, // 20
  boardsize: 12
}, {
  difficulty: 'hard',
  mines: 28, // 40
  boardsize: 16
},
]

const initialState = difficultySettings[0]

const difficultyReducer = (state = initialState, action) => {
  switch(action.type){
  case 'SET_DIFFICULTY':
    return action.data

  default: return state
  }
}

export const setDifficulty = (difficulty) => {
  const difficultyToInt = difficulty === 'easy' ? 0 : difficulty === 'medium' ? 1 : 2
  return{
    type: 'SET_DIFFICULTY',
    data: difficultySettings[difficultyToInt]
  }
}

export default difficultyReducer