import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducers/auth';
import fileReducer from '../reducers/userFiles';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    files: fileReducer,
  },
});
