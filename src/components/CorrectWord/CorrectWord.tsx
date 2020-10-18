import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { currentWordSelector } from '../../store/reducers/wordsSlice'

type IProps = {
  word: string
  typedChars: Array<string>
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledChar = styled.span`
  border-bottom: 3px solid tomato;
  text-align: center;
  min-width: 15px;
`
const CorrectWord: React.FC<IProps> = ({ word, typedChars }) => {
  return (
    <StyledContainer>
      {word.split('').map((char, index) => (
        <StyledChar key={char + index}>
          {typedChars.find((typeedChar) => typeedChar === char) && char}
        </StyledChar>
      ))}
    </StyledContainer>
  )
}

const mapStateToProps = (state: any) => ({
  word: currentWordSelector(state).word,
  typedChars: state.words.typedChars
})

export default connect(mapStateToProps)(CorrectWord)
