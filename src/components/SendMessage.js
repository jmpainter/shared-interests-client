import React from 'react';
import './SendMessage.css';

export default function SendMessage(props) {
  return (
    <form>
      <label for="message">Message:</label>
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
      <a href="dashboard.html"><button>Send</button></a>
    </form>
  );
}