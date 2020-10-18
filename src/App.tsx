// eslint-disable-next-line
import React from 'react'
import store from './store/store'
import { Provider } from 'react-redux'
import Game from './components/Game'

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
)

export default App
