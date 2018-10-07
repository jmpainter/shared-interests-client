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
import { refreshAuthToken } from '../actions/auth';
import { connect } from 'react-redux';
import './App.css';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
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
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);