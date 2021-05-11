import difficultyReducer, { difficultySettings } from './difficulty'
import deepfreeze from 'deep-freeze'
const initialState = difficultySettings[0]

describe('Difficulty reducer', () => {
  test('Difficulty can be set to easy', () => {
    const state = initialState
    const action = {
      type: 'SET_DIFFICULTY',
      data: difficultySettings[0]
    }
    deepfreeze(state)
    const newState = difficultyReducer(state, action)
    expect(newState).toEqual(difficultySettings[0])
  })
  test('Difficulty can be set to medium', () => {
    const state = initialState
    const action = {
      type: 'SET_DIFFICULTY',
      data: difficultySettings[1]
    }
    deepfreeze(state)
    const newState = difficultyReducer(state, action)
    expect(newState).toEqual(difficultySettings[1])
  })
  test('Difficulty can be set to hard', () => {
    const state = initialState
    const action = {
      type: 'SET_DIFFICULTY',
      data: difficultySettings[2]
    }
    deepfreeze(state)
    const newState = difficultyReducer(state, action)
    expect(newState).toEqual(difficultySettings[2])
  })
})