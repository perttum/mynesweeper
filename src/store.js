import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import boardReducer from './reducers/board'
import gameStateReducer from './reducers/gamestate'
import difficultyReducer from './reducers/difficulty'
import pointerReducer from './reducers/pointer'
import tilesLeftReducer from './reducers/tilesleft'

const reducer = combineReducers({
  boardReducer: boardReducer,
  gameStateReducer: gameStateReducer,
  difficultyReducer: difficultyReducer,
  pointerReducer: pointerReducer,
  tilesLeftReducer: tilesLeftReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

export default store