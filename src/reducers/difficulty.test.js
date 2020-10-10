import difficultyReducer, { difficultySettings } from './difficulty'
import deepfreeze from 'deep-freeze'
const initialState = 0

describe('Difficulty reducer', () => {
  test('Difficulty can be set to easy (zero)', () => {
    const state = initialState
    const action = {
      type: 'DIFFICULTY',
      data: 0
    }
    deepfreeze(state)
    const newState = difficultyReducer(state, action)
    expect(newState).toEqual(difficultySettings[0])
  })
  test('Difficulty can be set to medium (one)', () => {
    const state = initialState
    const action = {
      type: 'DIFFICULTY',
      data: 1
    }
    deepfreeze(state)
    const newState = difficultyReducer(state, action)
    expect(newState).toEqual(difficultySettings[1])
  })
  test('Difficulty can be set to hard (two)', () => {
    const state = initialState
    const action = {
      type: 'DIFFICULTY',
      data: 2
    }
    deepfreeze(state)
    const newState = difficultyReducer(state, action)
    expect(newState).toEqual(difficultySettings[2])
  })
})