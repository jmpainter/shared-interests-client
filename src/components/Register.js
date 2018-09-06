import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
  submit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="register">
        <header>
          <h1>Register</h1>
        </header>
        <section>
          <form onSubmit={event => this.submit(event)}>
            <label htmlFor="first-name">First Name:</label>
            <input type="text" name="first-name" id="first-name" />
            <label htmlFor="last-name">Last Name:</label>
            <input type="text" name="last-name" id="last-name" />
            <label htmlFor="screen-name">Screen Name (public):</label>
            <input type="text" name="screen-name" id="screen-name" />
            <label htmlFor="location">Location:</label>
            <input type="text" name="location" id="location" />
            <label htmlFor="username">Username (for login):</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" id="password" />
            <button type="submit">Submit</button>
            <Link to="/add-edit-interests">Not implemented - continue</Link>
          </form>
        </section>
      </div>
    );
  }
}