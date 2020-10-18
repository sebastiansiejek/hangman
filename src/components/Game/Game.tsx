import React from 'react'
import AddChar from '../AddChar'
import Chars from '../Chars'
import CorrectWord from '../CorrectWord'
import HangMan from '../HangMan'

const Game: React.FC = () => (
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
)

export default Game
