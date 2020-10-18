// eslint-disable-next-line
import AddChar from './components/AddChar'
import HangMan from './components/HangMan'
import React from 'react'
import store from './store/store'
import { Provider } from 'react-redux'
import CorrectWord from './components/CorrectWord'
import Chars from './components/Chars'

function App() {
  return (
    <Provider store={store}>
      <div
        className="App"
        style={{
          display: 'grid',
          gap: '2rem',
          justifyContent: 'center'
        }}
      >
        <Chars />
        <AddChar />
        <CorrectWord />
        <HangMan />
      </div>
    </Provider>
  )
}

export default App
