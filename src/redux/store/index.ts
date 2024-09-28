// src/store/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../reducer/authSlice';


const rootReducer = combineReducers({
  auth: authReducer,
  
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
