import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
const AdminLayout = React.lazy(() => import("../components/shared/AdminLayout"));
const AdminHome = React.lazy(() => import("../(admin)/Admin"));
const UserList = React.lazy(() => import("../(admin)/Users"));
const UserDashboard = React.lazy(() => import("../pages/Home"));
const NotFound = React.lazy(() => import("../pages/404"));
const Register = React.lazy(() => import("../pages/Register"));
const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const UserDetailsPage = React.lazy(() => import("../(admin)/UserDetails"));
const AppRoutes = ({ role, isAuthenticated }) => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Redirect root path based on authentication status */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                role === "admin" ? (
                  <Navigate to="/admin/home" />
                ) : (
                  <Navigate to="/user/dashboard" />
                )
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Protected Routes based on user roles */}
          {isAuthenticated && (
            <>
              {/* Admin Routes */}
              {role === "admin" && (
                <Route element={<AdminLayout role={role} />}>
                  <Route path="/admin/home" element={<AdminHome />} />
                  {/* Add more admin-related routes here */}
                  <Route path="/admin/users" element={<UserList />} />
                  <Route
                    path="/admin/user/:id"
                    element={<UserDetailsPage />}
                  />
                </Route>
              )}

              {/* User Routes */}
              {role === "user" && (
                <Route element={<AdminLayout role={role} />}>
                  <Route path="/user/dashboard" element={<UserDashboard />} />
                </Route>

              )}
            </>
          )}

          {/* Catch-all for undefined routes */}
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
