import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from '../../store'
import { render, fireEvent } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'
import StartMenu from './StartMenu'
import StartGameButton from './StartGameButton/StartGameButton'
import DifficultySelection from './DifficultySelection/DifficultySelection'

describe('Start menu', () => {
  test('Start menu is rendered', () => {
    const menu = render(
      <Provider store={store}>
        <StartMenu />
      </Provider>
    )
    expect(menu.container).toHaveTextContent('Myne Sweeper')
  })
})