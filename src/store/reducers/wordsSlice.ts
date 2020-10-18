import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import words from '../../data/words.json'

interface initialState {
  words: Array<{ word: string }>
  sign: string
  currentWordIndex: number
}

const initialState: initialState = {
  words: words.words,
  sign: '',
  currentWordIndex: 0
}

const wordsSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addSign(state, action: PayloadAction<initialState['sign']>) {
      state.sign = action.payload
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

export const { addSign } = wordsSlice.actions
export default wordsSlice
