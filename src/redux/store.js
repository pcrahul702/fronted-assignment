import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import taskSlice from "./slices/taskSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    user:userSlice,
    task:taskSlice
    
  },
});

export default store;
