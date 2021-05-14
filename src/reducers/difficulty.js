export const difficultySettings = [{
  difficulty: 'easy',
  mines: 6, // 8
  boardsize: 6
}, {
  difficulty: 'medium',
  mines: 16, // 20
  boardsize: 10
}, {
  difficulty: 'hard',
  mines: 20, // 40
  boardsize: 14
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