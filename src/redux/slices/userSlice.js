import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // List of users
  userDetails: {}, // Details of a specific user
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload; // Set the list of users
    },
    addUser: (state, action) => {
      state.users.push(action.payload); // Add a new user to the list
    },
    updateUser: (state, action) => {
      const { id, data } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...data }; // Update user details
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload); // Remove a user by ID
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload; // Set details for a specific user
    },
    clearUserDetails: (state) => {
      state.userDetails = {}; // Clear user details
    },
  },
});

export const {
  setUsers,
  addUser,
  updateUser,
  deleteUser,
  setUserDetails,
  clearUserDetails,
} = userSlice.actions;

export default userSlice.reducer;
