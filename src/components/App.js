import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import AddEditInterests from './AddEditInterests';
import Dashboard from './Dashboard';
import NavBar from './NavBar';

import './App.css';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <nav>
          <NavBar />
        </nav>
        <main>
          <Route exact path="/" component={ Home } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/add-edit-interests" component={ AddEditInterests } />
          <Route exact path="/dashboard" component={ Dashboard } />
        </main>
      </div>
    </Router>
  );
}