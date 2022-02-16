import { BrowserRouter, Switch } from 'react-router-dom';

import { Route } from './Routes';




export const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );