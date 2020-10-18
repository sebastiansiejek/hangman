import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addChar } from '../../store/reducers/wordsSlice'

const Chars = () => {
  const dispatch = useDispatch()

  const StyledChars = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 200px;

    > * {
      margin: 5px;
    }
  `

  const chars = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm'
  ]

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    char: string
  ) => {
    dispatch(addChar(char))
  }

  return (
    <StyledChars>
      {chars.map((char) => (
        <button key={char} onClick={(e) => handleClick(e, char)}>
          {char}
        </button>
      ))}
    </StyledChars>
  )
}

export default Chars
