import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const StyledSvg = styled.svg`
  display: block;
  max-width: 400px;

  path {
    stroke: #000;
    visibility: hidden;
    opacity: 0;

    &.is-active {
      visibility: visible;
      opacity: 1;
    }
  }

  .path--stand {
    stroke-width: 14.1732;
  }
`

type IProps = {
  words: Array<{ word: string }>
  char: string
  currentWordIndex: number
}

const HangMan = ({ char, words, currentWordIndex }: IProps) => {
  const svgRef = useRef(null)

  useEffect(() => {
    if (svgRef && svgRef.current) {
      const svg: any = svgRef.current
      const { children } = svg

      if (!words[currentWordIndex].word.includes(char)) {
        const activesElems = [...children].filter((child: any) =>
          child.classList.contains('is-active')
        )
        if (activesElems.length) {
          const lastActive = activesElems[activesElems.length - 1]
          lastActive &&
            lastActive.nextSibling &&
            lastActive.nextSibling.classList.add('is-active')
        }
        children[0].classList.add('is-active')
      }
    }
  })

  return (
    <StyledSvg id="hangman-image" viewBox="0 0 513.2 675" ref={svgRef}>
      <path id="right" className="path--stand" d="M6.8 671.3l76.5-76.5" />
      <path id="left" className="path--stand" d="M157.3 671.3l-76.5-76.5" />
      <path id="vertical_long" className="path--stand" d="M82.8 604V7" />
      <path id="horizontal" className="path--stand" d="M75.7 7h357.7" />
      <path id="vertical_short" className="path--stand" d="M426.8 89V7" />
      <path
        id="head_1_"
        d="M426.3 94.3c31.9 0 57.8 25.9 57.8 57.8s-25.9 57.8-57.8 57.8-57.8-25.9-57.8-57.8 25.9-57.8 57.8-57.8m0-14.2c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.3-72-72-72z"
      />
      <path id="body" d="M419.2 214.1h14.2v256h-14.2z" />
      <path
        id="right_hand"
        transform="rotate(-45.001 388.274 320.02)"
        d="M335.9 312.9h104.7v14.2H335.9z"
      />
      <path
        id="left_hand"
        transform="rotate(-45.001 465.271 319.924)"
        d="M458.2 267.6h14.2v104.7h-14.2z"
      />
      <path
        id="right_leg"
        transform="rotate(-45.001 388.265 498.025)"
        d="M335.9 490.9h104.7v14.2H335.9z"
      />
      <path
        id="left_leg"
        transform="rotate(-45.001 465.269 497.92)"
        d="M458.2 445.6h14.2v104.7h-14.2z"
      />
    </StyledSvg>
  )
}

const mapStateToProps = (state: any) => {
  const { typedChars, words, currentWordIndex } = state.words
  return { char: typedChars[typedChars.length - 1], words, currentWordIndex }
}

export default connect(mapStateToProps)(HangMan)
