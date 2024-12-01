import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, role, layout: Layout }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return Layout ? (
    <Layout role={role}>
      <Outlet />
    </Layout>
  ) : (
    <Outlet />
  );
};

export default ProtectedRoute;
