import deepfreeze from 'deep-freeze'
import tilesLeftReducer from './tilesleft'

describe('Tiles left reducer', () => {
  test('Tiles amount can set', () => {
    const state = 0
    const action = {
      type: 'SET_TILES_AMOUNT',
      data: 100
    }
    deepfreeze(state)
    const newState = tilesLeftReducer(state, action)
    expect(newState).toBe(100)
  })
  test('Tile count can be subtracted', () => {
    const state = 10
    const action = {
      type: 'SUBTRACT_TILE'
    }
    deepfreeze(state)
    const newState = tilesLeftReducer(state, action)
    expect(newState).toBe(9)
  })
})
