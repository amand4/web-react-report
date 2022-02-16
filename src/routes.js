import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Hero from './pages/Hero';
import Form from './pages/Form';


export default function Routes(){
  return (
    <BrowserRouter>
          <Switch>
              <Route path="/" exact  component={Hero} />
              <Route path="/login" exact  component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/new" component={New} />
              <Route path="/form" component={Form} />
          </Switch>

    </BrowserRouter>
  );
}