import { configureStore, combineReducers } from '@reduxjs/toolkit'
import wordsSlice from './reducers/wordsSlice'

const store = configureStore({
  reducer: combineReducers({
    words: wordsSlice.reducer
  })
})

export default store
