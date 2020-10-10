import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import boardReducer from './reducers/board'
import gameStateReducer from './reducers/gamestate'
import difficultyReducer from './reducers/difficulty'

const reducer = combineReducers({
  boardReducer: boardReducer,
  gameStateReducer: gameStateReducer,
  difficultyReducer: difficultyReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

export default store