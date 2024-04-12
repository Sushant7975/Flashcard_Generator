import { combineReducers } from '@reduxjs/toolkit';
import flashcardsReducer from './flashcardsSlice';
import termsReducer from './termsSlice'

const rootReducer = combineReducers({
  flashcards: flashcardsReducer,
  terms: termsReducer,
});

export default rootReducer;