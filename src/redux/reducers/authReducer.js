// src/redux/reducers/authReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { loginSuccess, loginFailure, logout } from '../actions/authActions';

const initialState = {
  token: localStorage.getItem('token') || null,
};

const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(loginSuccess, (state, action) => {
      state.token = action.payload;
    })
    .addCase(loginFailure, (state, action) => {
      state.error = action.payload;
    })
    .addCase(logout, state => {
      state.token = null;
    });
});

export default authReducer;
