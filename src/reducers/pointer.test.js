import deepfreeze from 'deep-freeze'
import pointerReducer from './pointer'

const initialState = 'default'

describe('Pointer reducer', () => {
  test('Pointer can be set to Default', () => {
    const action = {
      type: 'DEFAULT'
    }
    const state = deepfreeze(initialState)
    const newState = pointerReducer(state, action)
    expect(newState).toBe('default')
  })
  test('Pointer can set to Flag', () => {
    const action = {
      type: 'FLAG'
    }
    const state = deepfreeze(initialState)
    const newState = pointerReducer(state, action)
    expect(newState).toBe('flag')
  })
  test('Pointer can set to Question mark', () => {
    const action = {
      type: 'QUESTIONMARK'
    }
    const state = deepfreeze(initialState)
    const newState = pointerReducer(state, action)
    expect(newState).toBe('questionmark')
  })

})