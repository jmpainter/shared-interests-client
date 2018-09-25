import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from './Start';
import RegistrationPage from './RegistrationPage';
import LoginForm from './LoginForm';
import AddEditInterests from './AddEditInterests';
import Profile from './Profile';
import MeetUser from './MeetUser';
import HeaderBar from './HeaderBar';
import Footer from './Footer';
import './App.css';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <HeaderBar />
        <main>
          <Route exact path="/" component={ Start } />
          <Route exact path="/register" component={ RegistrationPage } />
          <Route exact path="/login" component={ LoginForm } />
          <Route exact path="/add-edit-interests" component={ AddEditInterests } />
          <Route exact path="/profile" component={ Profile } />
          <Route path="/meet-user/:id" component={ MeetUser } />
        </main>
        <Footer />
      </div>
    </Router>
  );
}