import React, { Component } from 'react';
import logo from './logo.svg';
import Fun from './components/Fun';
import FunInput from './components/FunInput';
import FunLogin from './components/FunLogin';
import EmployeeTable from './components/EmployeeTable';
import BusinessTable from './components/BusinessTable';
import Nav from './components/Nav';
import './App.css';
import './'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Nav/>
        <FunLogin/>
        <Fun/>
        <FunInput/>
        <EmployeeTable/>
        <BusinessTable/>
      </div>
    );
  }
}

export default App;
