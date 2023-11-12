import { configureStore, combineReducers } from '@reduxjs/toolkit';
import timerReducer from './timerSlice';
import questionReducer from './questionSlice';

const rootReducer = combineReducers({
  timer: timerReducer,
  mcq: questionReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;