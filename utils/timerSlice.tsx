import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  value: number;
  started: boolean;
}

const initialState: TimerState = {
  value: 0,
  started: false
};

const timerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    start: (state) => {
      state.started = true;
    }
  }
});

export const { increment, start } = timerSlice.actions;

export default timerSlice.reducer;