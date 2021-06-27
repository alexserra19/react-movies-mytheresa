
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { HeaderBar } from '../components/HeaderBar/HeaderBar';

import Home from "../pages/Home/Home"
import Details from '../pages/Details/Details';
import WishList from '../pages/WishList/WishList';

const { Footer } = Layout;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <HeaderBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route path="/wishlist" component={WishList} />
      </Switch>
      <Footer style={{ textAlign: 'center' }}>The Movie Database MyTheresa ©2021 Created by Alex Serra</Footer>
    </BrowserRouter>
  )
}


export default AppRouter;
