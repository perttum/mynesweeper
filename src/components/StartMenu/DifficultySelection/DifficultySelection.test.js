import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from '../../../store'
import { render, fireEvent } from '@testing-library/react'
import DifficultySelection from './DifficultySelection'

describe('Difficulty selection', () => {

  test('Easy difficulty button can be clicked', () => {
    const mockHandler = jest.fn()

    const component = render(
      <Provider store={store}>
        <DifficultySelection handleDifficultyButtonClick={mockHandler}/>
      </Provider>
    )

    const button = component.container.querySelector('[data-testid=easy-difficulty]')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
  test('Medium difficulty button can be clicked', () => {
    const mockHandler = jest.fn()

    const component = render(
      <Provider store={store}>
        <DifficultySelection handleDifficultyButtonClick={mockHandler}/>
      </Provider>
    )

    const button = component.container.querySelector('[data-testid=medium-difficulty]')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
  test('Hard difficulty button can be clicked', () => {
    const mockHandler = jest.fn()

    const component = render(
      <Provider store={store}>
        <DifficultySelection handleDifficultyButtonClick={mockHandler}/>
      </Provider>
    )

    const button = component.container.querySelector('[data-testid=hard-difficulty]')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})