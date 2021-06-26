
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from "../pages/Home"
import Details from '../pages/Details';

const AppRouter = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route path="/details" component={Details} />

        </Switch>
      </BrowserRouter>
  )
}


export default AppRouter;
