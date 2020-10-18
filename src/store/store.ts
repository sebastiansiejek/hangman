import { configureStore, combineReducers } from '@reduxjs/toolkit'
import wordsSlice from './reducers/wordsSlice'

const reducer = combineReducers({
  game: wordsSlice.reducer
})

const store = configureStore({ reducer })

export default store
