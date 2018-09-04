import React from 'react';
import './Conversation.css';
import InterestList from './InterestsList';
import MessageThread from './MessageThread';
import SendMessage from './SendMessage';

export default function Conversation(props) {
  return (
    <div className="conversation">
      <header>
        <h1>Conversation</h1>
      </header>
      
      <section>
        <h2 class="user-name">rose2</h2>
        <p>Oakland, CA</p>
        <p>Interests:</p>
        <InterestList />
      </section>

      <section>
        <MessageThread />
      </section>

      <section>
        <h2>Reply:</h2>
        <SendMessage />
      </section>

      <section>
        <button>Delete this conversation</button>
        <button>Block This Person</button>
      </section>
    </div>
  );
}