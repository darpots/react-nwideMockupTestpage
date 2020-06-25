import React from 'react';

// IMPORT ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// IMPORT COMPONENTS THAT NEED ROUTING
import Support from './Containers/Support';
import Welcome from './Containers/Welcome';
// import NotFound from './NotFound';

// SETUP ROUTER
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/support" component={Support} />
      <Route path="/" component={Welcome} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);

// EXPORT ROUTER
export default Router;
