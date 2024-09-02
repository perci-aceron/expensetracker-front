// redux/actions/authActions.js
import { createAction } from '@reduxjs/toolkit';
import axiosInstance from 'api/axios';

// Consolidated action creator using createAction
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');
export const logout = createAction('LOGOUT');

// Async action creator using thunk
export const loginUserAsync = credentials => async dispatch => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    dispatch(loginSuccess(response.data.token)); // Use single action for login success
  } catch (err) {
    console.error('Login failed:', err);
  }
};
