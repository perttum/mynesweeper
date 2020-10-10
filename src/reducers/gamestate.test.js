import deepfreeze from 'deep-freeze'
import gameStateReducer from '../reducers/gamestate'

const initialState = 'menu'

describe('Gamestate reducer', () => {
  test('Gamestate can be set to menu', () => {
    const state = initialState
    deepfreeze(state)
    const action = {
      type: 'MENU'
    }
    const newState = gameStateReducer(state, action)
    expect(newState).toBe('menu')
  })
  test('Gamestate can be set to game', () => {
    const state = initialState
    deepfreeze(state)
    const action = {
      type: 'STARTGAME'
    }
    const newState = gameStateReducer(state, action)
    expect(newState).toBe('game')
  })
  test('Gamestate can be set to gameover', () => {
    const state = initialState
    deepfreeze(state)
    const action = {
      type: 'GAMEOVER'
    }
    const newState = gameStateReducer(state, action)
    expect(newState).toBe('menu')
  })
})