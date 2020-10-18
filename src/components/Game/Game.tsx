import React from 'react'
import styled from 'styled-components'
import AddChar from '../AddChar'
import Chars from '../Chars'
import CorrectWord from '../CorrectWord'
import HangMan from '../HangMan'

const StyledContainer = styled.div`
  display: grid;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Game: React.FC = () => (
  <StyledContainer>
    <h1>HANGMAN</h1>
    <Chars />
    <AddChar />
    <CorrectWord />
    <HangMan />
  </StyledContainer>
)

export default Game
