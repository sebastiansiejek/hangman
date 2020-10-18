// eslint-disable-next-line
import React from 'react'
import AddChar from './components/AddChar'
import HangMan from './components/HangMan'

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'grid',
        gap: '2rem',
        justifyContent: 'center'
      }}
    >
      <HangMan />
      <AddChar />
    </div>
  )
}

export default App
