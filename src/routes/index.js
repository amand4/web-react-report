import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Hero from "../pages/Hero";
import New from "../pages/New";
import Form from "../pages/Form";

import Route from "./route";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Hero} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/new" component={New} isPrivate />
        <Route path="/form" component={Form} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
