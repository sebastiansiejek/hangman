import {
  createSlice,
  PayloadAction,
  Dispatch,
  createSelector
} from '@reduxjs/toolkit'
import words from '../../data/words.json'
import { IState } from '../store'

export interface IInitialState {
  words: Array<{ word: string }>
  typedChars: Array<string>
  currentWordIndex: number
}

const initialState: IInitialState = {
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
      action: PayloadAction<IInitialState['currentWordIndex']>
    ) {
      state.currentWordIndex = action.payload
    },
    setWords(state, action: PayloadAction<IInitialState['words']>) {
      state.words = action.payload
    }
  }
})

export const addChar = (char: string) => async (dispatch: Dispatch) => {
  const { addChar } = wordsSlice.actions
  dispatch(addChar(char))
}

//selectors
export const currentWordIndexSelector = (state: IState) =>
  state.words.currentWordIndex
export const currentWordsSelector = (state: IState) => state.words.words
export const currentWordSelector = createSelector(
  currentWordIndexSelector,
  currentWordsSelector,
  (index, words) => words[index]
)

export default wordsSlice
