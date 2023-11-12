import { createSlice } from '@reduxjs/toolkit'

export const timerSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    started: false
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    start: state => {
        state.started = true
    }
  }
})

export const { increment, start } = timerSlice.actions

export default timerSlice.reducer