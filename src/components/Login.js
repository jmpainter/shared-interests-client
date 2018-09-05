import React from 'react';
import './Login.css';

export default function Login(props) {
  return (
    <div className="login">
      <header>
        <h1>Log In</h1>
      </header>
      <section>
        <form>
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