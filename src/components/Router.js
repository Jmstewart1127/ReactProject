import React from "react";
import Employees from './EmployeeTable';
import { Switch, Route } from 'react-router-dom';

const Router = () => (
  <main>
    <Switch>
      <Route path='/employees' component={Employees}/>
    </Switch>
  </main>
);

export default Router