import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from '../../store'
import { render, fireEvent } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'
import StartMenu from './StartMenu'

describe('Start menu', () => {
  test('Start menu is rendered', () => {
    const menu = render(
      <Provider store={store}>
        <StartMenu />
      </Provider>
    )
    expect(menu.container).toHaveTextContent('Start game')
  })
  test('Easy difficulty button can be clicked', () => {
    const mockHandler = jest.fn()

    const menu = render(
      <Provider store={store}>
        <StartMenu handleSetDifficultyButtonClick={mockHandler}/>
      </Provider>
    )

    const button = menu.getByText('easy')

    fireEvent.click(button)
    console.log('calls: ', mockHandler.mock.calls)

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
  test('Medium difficulty button can be clicked', () => {
    const mockHandler = jest.fn()

    const menu = render(
      <Provider store={store}>
        <StartMenu handleSetDifficultyButtonClick={mockHandler}/>
      </Provider>
    )

    const button = menu.getByText('medium')
    fireEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(1)
  })
  test('Hard difficulty button can be clicked', () => {
    const mockHandler = jest.fn()

    const menu = render(
      <Provider store={store}>
        <StartMenu handleSetDifficultyButtonClick={mockHandler}/>
      </Provider>
    )

    const button = menu.getByText('hard')
    fireEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})