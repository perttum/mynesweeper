import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import boardReducer from './reducers/board'
import gameStateReducer from './reducers/gamestate'
import difficultyReducer from './reducers/difficulty'
import pointerReducer from './reducers/pointer'
import tilesLeftReducer from './reducers/tilesleft'
import zoomLevelReducer from './reducers/zoomlevel'

const reducer = combineReducers({
  boardReducer: boardReducer,
  gameStateReducer: gameStateReducer,
  difficultyReducer: difficultyReducer,
  pointerReducer: pointerReducer,
  tilesLeftReducer: tilesLeftReducer,
  zoomLevel: zoomLevelReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

export default store