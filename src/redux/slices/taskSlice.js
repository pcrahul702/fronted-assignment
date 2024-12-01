import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [], 
  taskDetails: {}, 
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload; 
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload); 
    },
    updateTask: (state, action) => {
      const { _id, data } = action.payload;
      const index = state.tasks.findIndex((task) => task._id === _id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...data }; 
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload); 
    },
    setTaskDetails: (state, action) => {
      state.taskDetails = action.payload; 
    },
    clearTaskDetails: (state) => {
      state.taskDetails = {}; 
    },
  },
});

export const {
  setTasks,
  addTask,
  updateTask,
  deleteTask,
  setTaskDetails,
  clearTaskDetails,
} = taskSlice.actions;

export default taskSlice.reducer;
