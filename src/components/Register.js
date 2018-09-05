import React from 'react';
import './Register.css';

export default function Register(props) {
  return (
    <div className="register">
      <header>
        <h1>Register</h1>
      </header>
      <section>
        <form>
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
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
}