import React from 'react';
import './SendMessage.css';
import { connect } from 'react-redux';
import { setEditorState } from '../actions/misc';
import { addMessage } from '../actions/messages';
import { getConversations } from '../actions/conversations';

import RichTextEditor from 'react-rte';

export class SendMessage extends React.Component {
  submit(event) {
    // event not present in test
    if(event) {
      event.preventDefault();
    }
    const message = this.props.editorState.toString('html');
    return this.props.dispatch(addMessage(this.props.conversationId, message))
      .then(() => this.props.dispatch(getConversations()));
  }

  onChange = (value) => {
    this.props.dispatch(setEditorState(value));
  };

  render() {
    return (
      <div className="send-message">
        <form onSubmit={event => this.submit(event)}>
          <label htmlFor="message">Send a message:</label>
          <RichTextEditor
            className="editor"
            value={this.props.editorState}
            onChange={this.onChange}
          />
          <button className="submit-button" type="submit">Send</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  editorState: state.misc.editorState
});

export default connect(mapStateToProps)(SendMessage);