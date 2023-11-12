import { configureStore } from '@reduxjs/toolkit'
import timerReducer from './timerSlice'
import questionReducer from './questionSlice'

export default configureStore({
  reducer: {
    timer: timerReducer,
    mcq: questionReducer
  }
})