import React from 'react';
import './SendMessage.css';
import { Link } from 'react-router-dom';

export default class SendMessage extends React.Component {
  submit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="send-message">
        <form onSubmit={event => this.submit}>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <br />
          <Link to="/dashboard"><button type="submit">Send</button></Link>
        </form>
      </div>
    );
  }
}