import React from 'react';
import './Login.css';

export default function Login(props) {
  return (
    <div className="login">
      <h1>Log In</h1>
      <form>
        <label for="username">Username (for login):</label>
        <input type="text" name="username" id="username" />
        <label for="password">Password:</label>
        <input type="text" name="password" id="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}