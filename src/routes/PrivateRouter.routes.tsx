import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = ({ children }: any) => {
  const auth = useSelector((state: any) => state.auth);
  const loading = false;
  if (loading) return <h1>Loading....</h1>;

  if (!auth.user) return <Navigate to={"/"} />;

  return <>{children}</>;
};

export default PrivateRouter;
