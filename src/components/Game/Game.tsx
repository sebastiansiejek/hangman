import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import AddChar from '../AddChar'
import Chars from '../Chars'
import CorrectWord from '../CorrectWord'
import HangMan from '../HangMan'
import { drawWord } from '../../store/reducers/wordsSlice'

const StyledContainer = styled.div`
  display: grid;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Game: React.FC = () => {
  const dispatch = useDispatch()

  dispatch(drawWord())

  return (
    <StyledContainer>
      <h1>HANGMAN</h1>
      <Chars />
      <AddChar />
      <CorrectWord />
      <HangMan />
    </StyledContainer>
  )
}

export default Game
