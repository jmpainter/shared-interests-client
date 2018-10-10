import React from 'react';
import './SendMessage.css';
import { connect } from 'react-redux';
import { setEditorState } from '../actions/misc';
import { addMessage } from '../actions/messages';
import { getConversations } from '../actions/conversations';

import RichTextEditor from 'react-rte';

export class SendMessage extends React.Component {

  submit(event) {
    // event is not present in test
    if(event) {
      event.preventDefault();
    }
    const message = this.props.editorState.toString('html');
    // add the message, update the conversations in state, and reset editor
    return this.props.dispatch(addMessage(this.props.conversationId, message))
      .then(() => this.props.dispatch(getConversations()))
      .then(() => this.props.dispatch(setEditorState(RichTextEditor.createEmptyValue())));
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
          <button className="submit-button wide" type="submit">Send</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  editorState: state.misc.editorState
});

export default connect(mapStateToProps)(SendMessage);