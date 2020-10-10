import deepfreeze from 'deep-freeze'
import boardReducer from '../reducers/board'

const testBoard = [
  [{
    open: false,
    locationX: 0,
    locationY: 0,
    mine: false,
    neighbourMines: 1
  },
  {
    open: false,
    locationX: 0,
    locationY: 1,
    mine: true,
    neighbourMines: 0
  },
  {
    open: false,
    locationX: 0,
    locationY: 2,
    mine: false,
    neighbourMines: 1
  }
  ], [
    {
      open: false,
      locationX: 1,
      locationY: 0,
      mine: false,
      neighbourMines: 1
    },
    {
      open: false,
      locationX: 1,
      locationY: 1,
      mine: false,
      neighbourMines: 0
    },
    {
      open: false,
      locationX: 1,
      locationY: 2,
      mine: false,
      neighbourMines: 1
    }
  ],[
    {
      open: false,
      locationX: 0,
      locationY: 0,
      mine: false,
      neighbourMines: 0
    },
    {
      open: false,
      locationX: 0,
      locationY: 1,
      mine: false,
      neighbourMines: 0
    },
    {
      open: false,
      locationX: 0,
      locationY: 2,
      mine: false,
      neighbourMines: 0
    }
  ]]

const initialState = []

describe('Board reducer', () => {
  test('Board can be set', () => {
    const action = {
      type: 'BOARD',
      data: testBoard
    }
    const state = initialState
    deepfreeze(state)

    const newState = boardReducer(state, action)
    expect(newState).toEqual(testBoard)
  })
  test('Mine amoun can be set', () => {
    const action = {
      type: 'MINEAMOUNT',
      data: 3
    }
    const state = 0
    deepfreeze(state)
    const newState = boardReducer(state, action)
    expect(newState).toBe(3)
  })
  test('Board size can be set', () => {
    const action = {
      type: 'BOARDSIZE',
      data: 6
    }
    const state = 0
    deepfreeze(state)
    const newState = boardReducer(state, action)
    expect(newState).toBe(6)
  })
})