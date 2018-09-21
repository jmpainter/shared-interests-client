import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from './Start';
import RegistrationPage from './RegistrationPage';
import Login from './Login';
import AddEditInterests from './AddEditInterests';
import Profile from './Profile';
import Conversation from './Conversation';
import HeaderBar from './HeaderBar';
import './App.css';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <HeaderBar />
        <main>
          <Route exact path="/" component={ Start } />
          <Route exact path="/register" component={ RegistrationPage } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/add-edit-interests" component={ AddEditInterests } />
          <Route exact path="/profile" component={ Profile } />
          <Route path="/conversation/:id" component={ Conversation } />
        </main>
      </div>
    </Router>
  );
}