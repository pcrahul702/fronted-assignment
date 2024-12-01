import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"
import LoadingSpinner from "../components/Loading/LoadingSpinner";
const Layout = React.lazy(() => import("../components/shared/AdminLayout"));
const AdminHome = React.lazy(() => import("../(admin)/Admin"));
const UserList = React.lazy(() => import("../(admin)/Users"));
const UserDashboard = React.lazy(() => import("../(user)/Dashboard"));
const TaskList = React.lazy(() => import("../(user)/Tasks"));
const TaskDetails = React.lazy(() => import("../(user)/Taskdetails"));
const NotFound = React.lazy(() => import("../pages/404"));
const Register = React.lazy(() => import("../pages/Register"));
const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const UserDetailsPage = React.lazy(() => import("../(admin)/UserDetails"));
const AppRoutes = ({ role, isAuthenticated }) => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ProtectedRoute isAuthenticated={isAuthenticated} role={role} layout={Layout}/>}>
            <Route index element={role=="admin"?<AdminHome />:<UserDashboard />} />
            <Route path="/admin/users" element={<UserList />} />
            <Route path="/admin/user/:id" element={<UserDetailsPage />} />

            <Route path="/user/tasks" element={<TaskList />} />
            <Route path="/user/task/:taskId" element={<TaskDetails />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
