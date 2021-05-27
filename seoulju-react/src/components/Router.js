import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FoodListContainer from './FoodListContainer';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={FoodListContainer} />
    </Switch>
  </BrowserRouter>
);

export default Router;