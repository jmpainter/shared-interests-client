import React from 'react';
import './Login.css';

export default class Login extends React.Component {
  submit(event) {
    event.preventDefault();
  }

  render() {
    return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Log In</h1>
            <form action="">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username"/>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password"/>
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </section>    
    );
  }
}