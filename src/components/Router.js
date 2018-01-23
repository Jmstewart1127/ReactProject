import React from "react";
import Employees from './EmployeeTable';
import Businesses from '/.BusinessTable';
import { Switch, Route } from 'react-router-dom';

const Router = () => (
  <main>
    <Switch>
      <Route path='/employees' component={Employees}/>
      <Route path='/business' component={Businesses}/>
    </Switch>
  </main>
);

export default Router