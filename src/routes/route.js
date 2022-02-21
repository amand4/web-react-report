import React from "react";
import { Redirect, Route as ReactRoute } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useAuth();
  return (
    <ReactRoute
      {...rest}
      render={(params) =>
        isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : "/dashboard"} />
        )
      }
    />
  );
};

export default Route;
