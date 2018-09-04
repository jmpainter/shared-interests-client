import React from 'react';
import './Register.css';

export default function Register(props) {
  return (
    <div className="register">
      <h1>Register</h1>
      <section>
        <form>
          <label for="first-name">First Name:</label>
          <input type="text" name="first-name" id="first-name" />
          <label for="last-name">Last Name:</label>
          <input type="text" name="last-name" id="last-name" />
          <label for="screen-name">Screen Name (public):</label>
          <input type="text" name="screen-name" id="screen-name" />
          <label for="location">Location:</label>
          <input type="text" name="location" id="location" />
          <label for="username">Username (for login):</label>
          <input type="text" name="username" id="username" />
          <label for="password">Password:</label>
          <input type="text" name="password" id="password" />
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
}