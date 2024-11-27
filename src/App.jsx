import React, { useEffect, Suspense } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setUser } from "./redux/slices/authSlice";

import AppRoutes from "./routes/AppRoutes";

function App() {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storeRole = JSON.parse(localStorage.getItem("role"));
    if (token && storedUser && storeRole) {
      dispatch(setUser({ user: storedUser, role: storeRole, token }));
    }
  }, [dispatch,role]);

  return <AppRoutes role={role} isAuthenticated={isAuthenticated} />;
}

export default App;
