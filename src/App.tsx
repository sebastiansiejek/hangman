// eslint-disable-next-line
import React from 'react'
import AddSign from './components/AddSign'
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
      <AddSign />
    </div>
  )
}

export default App
