import {
  createSlice,
  PayloadAction,
  Dispatch,
  createSelector
} from '@reduxjs/toolkit'
import words from '../../data/words.json'
import { gerRandomNumber } from '../../utils/utils'
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
  name: 'words',
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
    },
    drawWord(state) {
      const randomIndex = gerRandomNumber(0, state.words.length - 1)
      console.log(randomIndex)
      state.currentWordIndex = randomIndex
    }
  }
})

export const addChar = (char: string) => async (dispatch: Dispatch) => {
  const { addChar } = wordsSlice.actions
  dispatch(addChar(char))
}

export const drawWord = () => async (dispatch: Dispatch) => {
  const { drawWord } = wordsSlice.actions
  dispatch(drawWord())
}

//selectors
export const currentWordIndexSelector = (state: IState) =>
  state.words.currentWordIndex
export const currentWordsSelector = (state: IState) => state.words.words
export const typedCharsSelector = (state: IState) => state.words.typedChars
export const lastTypedCharSelector = (state: IState) =>
  state.words.typedChars[typedCharsSelector.length - 1]
export const currentWordSelector = createSelector(
  currentWordIndexSelector,
  currentWordsSelector,
  (index, words) => words[index]
)

export default wordsSlice
