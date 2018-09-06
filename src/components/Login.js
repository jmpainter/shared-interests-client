import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  submit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="login">
        <header>
          <h1>Log In</h1>
        </header>
        <section>
          <form onSubmit={event => this.submit(event)}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" id="password" />
            <Link to="/dashboard"><button type="submit">Submit</button></Link>
          </form>
        </section>
      </div>
    );
  }
}