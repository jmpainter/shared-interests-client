import React from 'react';
import './Register.css';

export default class Register extends React.Component {
  submit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>Sign Up</h1>
              <form action="">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name"/>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name"/>
                <label htmlFor="screen-name">Screen Name (public)</label>
                <input type="text" id="screen-name" name="first-name"/>
                <label htmlFor="location">Location</label>
                <div className="select-wrapper">
                  <select name="location" id="location">
                    <option value=""></option>
                    <option value="1">San Francisco</option>
                    <option value="2">Concord</option>
                  </select>
                </div>
                <label htmlFor="username">Username (for login)</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"/>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}