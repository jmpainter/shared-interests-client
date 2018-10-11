import React from 'react';
import './SendMessage.css';
import { connect } from 'react-redux';
import { setEditorState } from '../actions/misc';
import { addMessage } from '../actions/messages';
import { getConversations } from '../actions/conversations';

import ReactQuill from 'react-quill';

export class SendMessage extends React.Component {

  constructor(props) {
    super(props);

    // configure toolbars for editor
    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
    };
    this.formats = [
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ];
  }

  submit(event) {
    // event is not present in test
    if(event) {
      event.preventDefault();
    }
    const message = this.props.editorState.text;
    // add the message, update the conversations in state, and reset editor
    return this.props.dispatch(addMessage(this.props.conversationId, message))
      .then(() => this.props.dispatch(getConversations()))
      .then(() => this.props.dispatch(setEditorState('')))
  }

  onChange = (value) => {
    this.props.dispatch(setEditorState(value));
  };


 render() {
    return (
      <div className="send-message">
        <form onSubmit={event => this.submit(event)}>
          <label htmlFor="message">Send a message:</label>
          <ReactQuill
            modules={this.modules}
            formats={this.formats}
            value={this.props.editorState.text}
            onChange={value => this.onChange(value)} 
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