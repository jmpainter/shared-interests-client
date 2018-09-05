import React from 'react';
import './SendMessage.css';

export default function SendMessage(props) {
  return (
    <div className="send-message">
      <form>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}