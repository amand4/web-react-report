import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import New from "../pages/New";
import Form from "../pages/Form";
import NotFoundPage from "../pages/NotFound";

import Route from "./route";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/welcome" component={Welcome} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} isPrivate />
        <Route path="/new" component={New} isPrivate />
        <Route path="/form" component={Form} isPrivate />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
