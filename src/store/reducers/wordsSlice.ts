import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import words from '../../data/words.json'

interface initialState {
  words: Array<{ word: string }>
  typedChars: Array<string>
  currentWordIndex: number
}

const initialState: initialState = {
  words: words.words,
  typedChars: [''],
  currentWordIndex: 0
}

const wordsSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addChar(state, action: PayloadAction<string>) {
      state.typedChars.push(action.payload)
    },
    setWordByIndex(
      state,
      action: PayloadAction<initialState['currentWordIndex']>
    ) {
      state.currentWordIndex = action.payload
    },
    setWords(state, action: PayloadAction<initialState['words']>) {
      state.words = action.payload
    }
  }
})

export const addChar = (char: string) => async (dispatch: Dispatch) => {
  const { addChar } = wordsSlice.actions
  dispatch(addChar(char))
}

export default wordsSlice
