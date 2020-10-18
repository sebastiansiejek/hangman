import { configureStore, combineReducers } from '@reduxjs/toolkit'
import wordsSlice, { IInitialState } from './reducers/wordsSlice'

export interface IState {
  words: IInitialState
}

const store = configureStore({
  reducer: combineReducers({
    words: wordsSlice.reducer
  })
})

export default store
