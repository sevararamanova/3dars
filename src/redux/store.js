import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/authSlices';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
