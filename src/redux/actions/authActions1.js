// redux/actions/authActions.js
import axiosInstance from 'api/axios';

export const loginAuth = token => ({
  type: 'LOGIN_SUCCESS',
  payload: token,
});

export const logoutAuth = () => ({
  type: 'LOGOUT',
});

// Optionally, you can define async action creators for login and logout
export const loginUser = credentials => async dispatch => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    dispatch(loginAuth(response.data.token));
  } catch (err) {
    console.error('Login failed:', err);
  }
};
