import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api';

// Import slices here
// import counterReducer from './slices/counterSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  // counter: counterReducer,
});

export default rootReducer;
