// src/redux/slices/authSlices.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    loading: false,
  },
  reducers: {
    registerStart(state) {
      state.loading = true;
    },
    registerSuccess(state, action) {
      state.token = action.payload;
      state.loading = false;
    },
    registerFailure(state) {
      state.loading = false;
    },
    loginStart(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.token = action.payload;
      state.loading = false;
    },
    loginFailure(state) {
      state.loading = false;
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logout
} = authSlice.actions;

export default authSlice.reducer;
