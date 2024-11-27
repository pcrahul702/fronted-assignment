import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  role: null,
  isAuthenticated: false,
};

// Check if token is in localStorage when app loads
const storedToken = localStorage.getItem('authToken');
const storedUser = JSON.parse(localStorage.getItem('user'));
const storedRole = JSON.parse(localStorage.getItem('role'));


const initialStateFromStorage = storedToken && storedUser && storedRole
  ? { user: storedUser, role: storedRole, isAuthenticated: true }
  : initialState;

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateFromStorage,  // Start with the data from localStorage
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.isAuthenticated = true;
      // Store the token and user in localStorage
      localStorage.setItem('authToken', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('role', JSON.stringify(action.payload.role));
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
      // Remove from localStorage on logout
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      localStorage.removeItem('role');

    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
